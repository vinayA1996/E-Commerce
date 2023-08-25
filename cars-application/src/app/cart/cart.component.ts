import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { product } from '../model/product';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  email = localStorage.getItem('email');

  constructor(private http: HttpClient, private log: LoginService) { }

  cars: product[] = [];
  data: any;




  ngOnInit(): void {
    this.http.get(`http://localhost:8081/userproduct/user/${localStorage.getItem('email')}`)
      .subscribe(response => {
        console.log(response);
        this.data = response;
        this.cars = this.data.products;
      });
  }
  deleteitem(id: any) {
    const idToRemove = id;

    const index = this.cars.findIndex((obj) => obj.productname == idToRemove);

    if (index > -1) {
      this.cars.splice(index, 1);
    }
    console.log(this.cars)


    if (this.log.loggedin) {
      var user = {
        email: this.email,
        products: this.cars
      };
      alert("deleted from cart");
      this.http.post('http://localhost:8081/userproduct/update', user)
        .subscribe(response => {
        });
    }

  }

}

