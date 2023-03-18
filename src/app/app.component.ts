import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  loginForm: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    console.log('Пройшла перевірка користувача')
    const userJson = localStorage.getItem('user');
    if (userJson !== null) {
      // const user = JSON.parse(userJson)
      this.http.post('http://localhost:3000/Auth', JSON.parse(userJson))
        .subscribe((response: any) => {
          console.log(response);
        }, (error: any) => {
          console.error(error);
        });
      // ...
    } else {
      console.log('user not found');
    }

    // if (userJson !== null) {
    //   const user = JSON.parse(userJson);
    //   this.http.post('http://localhost:3000', user)
    //     .subscribe((response: any) => {
    //       console.log(response);
    //     }, (error: any) => {
    //       console.error(error);
    //     });
    //   // ...
    // } else {
    //   console.log('user not found');
    // }
  }

  title = 'project';
}



