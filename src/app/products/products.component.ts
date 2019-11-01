import { Component, OnInit } from '@angular/core';
import { ApiService} from '../api.service';
import { Product } from '../product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  data: Product[] = [];
  isLoadingResults = true;

  constructor(private api: ApiService) { }

  ngOnInit() {}

  consultarProduct()  {
    this.api.getproducts()
    .subscribe(res => {
      this.data = res;
      console.log(this.data);
      this.isLoadingResults = false;
    }, err => {
      console.log('ERROR => ' + err);
      this.isLoadingResults = false;
    });
  }
}
