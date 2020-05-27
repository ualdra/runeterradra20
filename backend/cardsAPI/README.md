# API Cards  DRA 2020 (Grupo Pablo, Cosmin y Js)

## Cards
This API let you get the cards of the game Runeterra in the URL `/cards`.

Esta api permite obtener la lista de cartas del juego Runeterra `/cards`.

## Card Detail
To obtain the detail of the card you must use the following url `/card/nombreCard`.

Para obtener el detalle de la carta usar la siguiente url `/card/nombreCard`.

## Regions
Furthermore it let you obtain the regions and get the list of card of each region using this URL `/region/nombreRegion`.

Además permite obtener las regiones y obtener la lista de cartas de cada region `/region/nombreRegion`.

## Integrado con la api auth
Every time the API receive a request checks whether the token passed by parameter is valid and is not expired, in that case the request continue, otherwise it returns an error message.

Cada vez que se hace una petición, la API REST comprueba si el token pasado como parámetro es válido y no ha expirado, en ese caso la petición continúa, en caso contrario devuelve mensaje de error.

