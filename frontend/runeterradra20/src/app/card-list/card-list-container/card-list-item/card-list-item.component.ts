import { Component, OnInit } from '@angular/core';
import { CardService } from '../../../card.service';

@Component({
  selector: 'app-card-list-item',
  templateUrl: './card-list-item.component.html',
  styleUrls: ['./card-list-item.component.css'],
})
export class CardListItemComponent implements OnInit {
  constructor(private cardService: CardService) {}

  ngOnInit(): void {
    this.cardService.getCards();
  }
}
