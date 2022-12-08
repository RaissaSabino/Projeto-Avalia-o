import { Component } from '@angular/core';
import axios from "axios";

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.css']
})
export class AreasComponent
{

  areas: [Area]  | undefined;

  constructor() {
    this.GetAllAreas();
   }

   GetAllAreas()
  {
    var config = {
      method: 'get',
      url: 'http://localhost:5184/Alocacao/GetAll',
      headers: {}
    };
    
    let instance = this;
    axios(config)
      .then(function (response) {
        instance.areas = response.data
        console.log(instance.areas)
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  

}


interface Area
{
  id: number;
  quantidade: number;
}