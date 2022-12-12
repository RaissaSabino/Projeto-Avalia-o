import { Component } from '@angular/core';
import axios from "axios";
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.css']
})
export class AreasComponent
{
  areaID = 0;
  areas: [Area]  | undefined;

  constructor(private route: ActivatedRoute){
    
  }
  ngOnInit(){
    
    const routeParams = this.route.snapshot.paramMap;
    this.areaID = Number(routeParams.get("areaID"))
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