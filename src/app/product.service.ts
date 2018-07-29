import { Injectable } from '@angular/core'
import { Album } from './album';
import { Product } from './product';

import { Http, Response } from '@angular/http'
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';



@Injectable()
export class ProductService {
	  	
  	constructor(private _http:Http) { }

  	private _albumUrl = '../assets/album.json';
  	getAlbum(id:number): Observable<Album>{
  		return this._http.get(this._albumUrl)
  				.map(response => <Album>response.json());
  	} 

  	private _productUrl = '../assets/products.json';
  	getProducts():Observable<Product[]>{
  		return this._http.get(this._productUrl)
  				.map(response => <Product[]>response.json())	
  	}

}
