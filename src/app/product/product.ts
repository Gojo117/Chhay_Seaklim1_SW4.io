import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { Category } from '../category/category';
import { get } from 'http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  searchText: string = '';
  selectedCategory: string = '';
  showDeleteModal = false;
  showEditModal = false;
  selectedId: number = 0;
  editData: any = {};
  product = [
    {
      productid: 1,
      productname: 'Coca',
      price: 2.5,
      qty: 300,
      description: 'List product coca',
      created_date: new Date(),
      categoryname: 'Soft drink',
      images: 'https://i.pinimg.com/1200x/0b/71/13/0b71131642f1ab756bbb439e6199490e.jpg',
    },

    {
      productid: 2,
      productname: 'ABC',
      price: 2.7,
      qty: 1200,
      description: 'List product ABC',
      created_date: new Date('2026-04-27'),
      categoryname: 'Beer',
      images: 'https://domnor.com/admin/images/product/2022-08-22-11-23-49_1.jpg?v=1',
    },

    {
      productid: 3,
      productname: 'Cambodia',
      price: 1.2,
      qty: 3000,
      description: 'List product Cambodia',
      created_date: new Date('2026-04-27'),
      categoryname: 'Beer',
      images: 'https://www.monde-selection.com/wp-content/uploads/2024/05/1041868.png',
    },

    {
      productid: 4,
      productname: 'Angkor',
      price: 3.5,
      qty: 800,
      description: 'List product Angkor',
      created_date: new Date(),
      categoryname: 'Beer',
      images: 'https://i.pinimg.com/1200x/f4/b2/d3/f4b2d3802579a66f4f23dd5174ea60bc.jpg',
    },

    {
      productid: 5,
      productname: 'sting',
      price: 1.4,
      qty: 888,
      description: 'List product sting',
      created_date: new Date('2026-05-10'),
      categoryname: 'Soft drink',
      images: 'https://snapcart.pk/cdn/shop/files/Sting-Cola.jpg?v=1772409917',
    },
    {
      productid: 6,
      productname: 'water',
      price: 3.5,
      qty: 900,
      description: 'List product water',
      created_date: new Date('2026-05-10'),
      categoryname: 'Water',
      images: 'https://i.pinimg.com/1200x/cf/62/51/cf6251438bbdae2375de08ef6ccfff08.jpg',
    },
  ].map((p) => ({
    ...p,
    amount: p.price * p.qty,
  }));

  get filterproducts() {
    return this.product.filter((p) => {
      const matchesSearch =
        p.productname.toLowerCase().includes(this.searchText.toLowerCase()) ||
        p.productid.toString().includes(this.searchText);
      const matchesCategory =
        this.selectedCategory === '' ||
        p.categoryname.toLowerCase() === this.selectedCategory.toLowerCase();
      return matchesSearch && matchesCategory;
    });
  }
  // delete product
  deleteProduct(id: number) {
    // const confirmDelete = confirm('Are you sure you want to delete this product :' + id + '?');
    // if (confirmDelete) {
    //   this.product = this.product.filter((p) => p.productid != id);
    // } else {
    //   alert('Product cancel delete');
    // }
    this.selectedId = id;
    this.showDeleteModal = true;
  }
  comfrimDelete() {
    this.product = this.product.filter((p) => p.productid !== this.selectedId);
    this.showDeleteModal = false;
    alert('Product delete successfully!');
  }
  cancelDelete() {
    this.showDeleteModal = false;
  }
  // edit product
  editproduct(productid: any) {
    // const newName = prompt('Enter new product name:', productid.productname);
    // if (newName !== null && newName.trim() !== '') {
    //   productid.productname = newName;

    //   const newQuantity = prompt('Edit Quantity:', productid.qty);
    //   productid.qty = newQuantity;

    //   const newPrice = prompt('Edit Price:', productid.price);
    //   productid.price = newPrice;

    //   const newDescription = prompt('Edit Description:', productid.description);
    //   productid.description = newDescription;

    //   const newDate = prompt('Edit Created Date:', productid.created_date);
    //   productid.created_date = newDate;

    //   alert('Product updated successfully!');
    // } else {
    //   alert('Product cancel edit');
    // }

    this.editData = {
      ...productid,
      created_date: new Date(productid.created_date).toISOString().split('T')[0],
    };
    this.showEditModal = true;
  }
  updateProduct() {
    const index = this.product.findIndex((p) => p.productid === this.editData.productid);
    if (index !== -1) {
      this.product[index] = this.editData;
      alert('Product updated successfully!');
    }
    this.showEditModal = false;
  }
}
