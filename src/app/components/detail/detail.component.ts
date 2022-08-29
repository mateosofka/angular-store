import { Product } from './../../models/product';
import { ProductService } from 'src/app/services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  productId:string = this.activeRoute.snapshot.params['id'];
  product:Product | any = null;

  constructor(
    private router:Router,
    private productsServie:ProductService,
    private activeRoute:ActivatedRoute) {}

  ngOnInit(): void {
    this.getProductInfo();
  }

  getProductInfo(){
    this.productsServie.getProductById(this.productId)
    .subscribe((data) => this.product = data)
  }

}
