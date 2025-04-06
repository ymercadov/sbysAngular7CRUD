import { Injectable } from '@angular/core';
import { importType } from '@angular/compiler/src/output/output_ast';
/*customs*/
import { observable, of, throwError, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { catchError, tap, map  } from 'rxjs/operators';
import { Product  } from './product';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type' : 'application/json'})
};
const apiUrl = 'http://localhost:3000/api/v1/products';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  getproducts(): Observable<Product[]> {
    return this.http.get<Product[]>(apiUrl)
    .pipe(
      tap(heroes => console.log('fetched products')),
      catchError(this.handleError('getproducts', []))
    );
   }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send error to remote
      console.error(error);
       // let the app keep running
      return of(result as T);
    };
  }
}
