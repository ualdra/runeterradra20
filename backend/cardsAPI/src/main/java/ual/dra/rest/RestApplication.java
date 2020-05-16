package ual.dra.rest;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.MappedInterceptor;

import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.Arrays;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurerAdapter;
import org.springframework.data.util.ReflectionUtils;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;

@SpringBootApplication
public class RestApplication {

	public static void main(String[] args) {
		SpringApplication.run(RestApplication.class, args);
	}

	@Bean
    public FilterRegistrationBean corsFilterRegistration() {
        FilterRegistrationBean registrationBean =
                new FilterRegistrationBean(new CORSFilter());
        registrationBean.setName("CORS Filter");
        registrationBean.addUrlPatterns("/*");
        registrationBean.setOrder(1);
        return registrationBean;
    }

    @Bean
    @Autowired

    // Si queremos especificar que rutas interceptar.
    
   /*  public MappedInterceptor getMappedInterceptor(MyHandlerInterceptor myHandlerInterceptor) {
        return new MappedInterceptor(new String[] { "/cards" }, myHandlerInterceptor);
    } */

    public MappedInterceptor getMappedInterceptor(MyHandlerInterceptor myHandlerInterceptor) {
        return new MappedInterceptor(null, myHandlerInterceptor);
    }


    @Component
    public static class TestBean {
        public boolean judgeToken(HttpServletRequest request) {
            String token = request.getParameter("token");
            
            System.out.println("token");
            System.out.println(token);
            
            if (token == null) {
                // throw new MyException();
            }


            RestTemplate restTemplate = new RestTemplate();
            HttpHeaders headers = new HttpHeaders();
            headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));

            Map<String, String> params = new HashMap<String, String>();
            params.put("token", token);

            HttpEntity<?> entity = new HttpEntity<>(params, headers);

            ResponseEntity<String> s = restTemplate.exchange("http://apis.manelme.com/auth/checktoken", HttpMethod.POST, entity, String.class);
            System.out.println(s.getBody().toString());

            System.out.println(s.getStatusCodeValue());

           /*  CloseableHttpClient client = HttpClients.createDefault();
            HttpPost httpPost = new HttpPost("http://apis.manelme.com/auth/checktoken");
 
            String json = "{'token':'$2a$10$x0gl0Q0qouZrVEkepW1ArucfXQlIkr7mlEvIItvDecShdy8apO/xq'}";
            StringEntity entity = new StringEntity(json);
            httpPost.setEntity(entity);
            httpPost.setHeader("Accept", "application/json");
            httpPost.setHeader("Content-type", "application/json");
 
            CloseableHttpResponse response = client.execute(httpPost);
            client.close();
            String responseString = new BasicResponseHandler().handleResponse(response);
            System.out.println(responseString); */
            
            
            return true;
        }
    }

    @Component
    public static class MyHandlerInterceptor implements HandlerInterceptor {

        @Autowired
        TestBean testBean;

        @Override
        public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
                throws Exception {
            return testBean.judgeToken(request);
        }

        @Override
        public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler,
                ModelAndView modelAndView) throws Exception {

        }

        @Override
        public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler,
                Exception ex) throws Exception {

        }
    }

    @ControllerAdvice
    public static class MyExceptionHandler {
        @ExceptionHandler(MyException.class)
        @ResponseBody
        public Map<String, Object> handelr() {
            Map<String, Object> m1 = new HashMap<String, Object>();
            m1.put("status", "error");
            m1.put("message", "Sorry, your provided token information expired or not exists.");
            return m1;
        }
    }

}
