import { Component, OnInit } from '@angular/core';
import { CardService } from '../../card.service';

@Component({
  selector: 'app-card-list-container',
  templateUrl: './card-list-container.component.html',
  styleUrls: ['./card-list-container.component.css'],
})
export class CardListContainerComponent implements OnInit {
  constructor(private cardService: CardService) {}

  cards: any;

  ngOnInit(): void {
    this.cardService.getCards().subscribe((data) => {
      this.cards = data;
    });
  }
}
