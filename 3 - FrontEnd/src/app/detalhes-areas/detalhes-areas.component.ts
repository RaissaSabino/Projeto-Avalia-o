import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-detalhes-areas',
  templateUrl: './detalhes-areas.component.html',
  styleUrls: ['./detalhes-areas.component.css']
})
export class DetalhesAreasComponent {
  areaID = 10;
  cars:[Automovel] | undefined

  constructor(){
    
  }

  ngOnInit(){
    this.getAreaInfo()
  }
  
 

  getAreaInfo() {
    var data = JSON.stringify(this.areaID);

    var config = {
      method: 'post',
      url: 'http://localhost:5184/Alocacao/GetAllCarsAvaiable',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    let instance = this;
    axios(config)
      .then(function (response) {
          instance.cars = response.data
          console.log("Foi")
      })
      .catch(function (error) {
        console.log(error);
      });

  }
}

export  interface Automovel{
  id: number;
  modelo: string;
  preco: number;
}