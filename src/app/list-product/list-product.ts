import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../service/product';
import { response } from 'express';

@Component({
  selector: 'app-list-product',
  imports: [FormsModule,CommonModule],
  standalone:true,
  templateUrl: './list-product.html',
  styleUrl: './list-product.css',
})
export class ListProduct {
    products: any[]=[];
    constructor( private service:ProductService){};
    ngOnInit(){
      this.loadProduct();
    }
    loadProduct(){
      this.service.getProduct().subscribe((res:any)=>{
        this.products=res.products;
      });
    }
    currentPage=1;
    pageSize=7;
    get totalPages(): number{
      return Math.ceil(this.products.length/this.pageSize);
    }

    get paginationProduct(){
      const start = (this.currentPage-1)*this.pageSize;
      return this.products.slice(start,start+this.pageSize)
    }

    nextPage(){
      if(this.currentPage< this.totalPages){
        this.currentPage++;
      }
    }

    previousPage(){
      if(this.currentPage>1){
        this.currentPage--;
      }
    }

    firstPage(){
      this.currentPage=1;
    }

    lastPage(){
      this.currentPage=this.totalPages;
    }
} 
