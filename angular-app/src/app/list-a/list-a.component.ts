import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-a',
  templateUrl: './list-a.component.html',
  styleUrls: ['./list-a.component.scss'],
})
export class ListAComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  click(route) {
    this.router.navigate(['/listA', route]);
  }
}
