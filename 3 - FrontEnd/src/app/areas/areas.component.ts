import { Component } from '@angular/core';
import axios from "axios";

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.css']
})
export class AreasComponent
{
  constructor() {
    this.login();
   }

  login ()
  {
    var config = {
      method: 'get',
      url: 'https://localhost:7060/Alocacao/GetAll',
      headers: {}
    };
  
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  

}
