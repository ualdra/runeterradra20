import { Component, OnInit, Input } from '@angular/core';
import { CardService } from '../../../card.service';

@Component({
  selector: 'app-card-list-detail',
  templateUrl: './card-list-detail.component.html',
  styleUrls: ['./card-list-detail.component.css'],
})
export class CardListDetailComponent implements OnInit {
  @Input() card: any;

  constructor() {}

  ngOnInit(): void {}
}
