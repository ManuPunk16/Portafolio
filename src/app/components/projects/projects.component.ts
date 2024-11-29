import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Cards } from '../../models/cards.model';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-projects',
    standalone: true,
    imports: [
      MatCardModule,
      NgFor,
      MatChipsModule,
      RouterLink
    ],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit{

  public cards = Cards.cards;

  constructor() {

  }

  ngOnInit(): void {

  }

}
