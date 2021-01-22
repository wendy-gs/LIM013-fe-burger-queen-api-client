import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';



@Component({
  selector: 'app-home-waiter',
  templateUrl: './home-waiter.component.html',
  styleUrls: ['./home-waiter.component.sass']
})
export class HomeWaiterComponent implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

}
