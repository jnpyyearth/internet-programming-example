import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  public toppings: string[];
  public pizzaSize: string;
  public quantity: number;
  public selectedToppings: string[];

  constructor() {
    this.pizzaSize = 'm';
    this.toppings = ['Pepperoni', 'Mushrooms', 'Onions', 'Sausage'];
    this.quantity = 0;
    this.selectedToppings = [];
  }

  ngOnInit(): void {}

  placeOrder(): void {}
}
