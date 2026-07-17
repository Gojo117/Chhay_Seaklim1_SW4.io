import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Product } from './product/product';
import { Orderdetail } from './orderdetail/orderdetail';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = 'Welcom to my Angular SW4';

  //Declear variable using TypeScript
  studentid: Number = 100;
  studentName: string = 'Chhay Seaklim';
  subject: string = 'Web Development III';
  dob: Date = new Date('2026-04-16');

  protected readonly title1 = 'Product Information';
  productid: number = 1;
  productName: string = 'Laptop';
  quantity: number = 10;
  price: number = 500.0;
  description: string =
    'This is a high-performance laptop suitable for gaming and professional work.';
  get amount(): number {
    return this.price * this.quantity;
  }
  createDate: Date = new Date('2026-04-02');
  OrderDate: Date = new Date('2026-04-03');
}
