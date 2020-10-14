import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-b',
  templateUrl: './list-b.component.html',
  styleUrls: ['./list-b.component.scss'],
})
export class ListBComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  click(route) {
    this.router.navigate(['/listB', route]);
  }
}
