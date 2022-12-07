import { Component } from '@angular/core';
import axios from 'axios';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-venda-automovel',
  templateUrl: './venda-automovel.component.html',
  styleUrls: ['./venda-automovel.component.css']
})
export class VendaAutomovelComponent {
  clientes: [Cliente] | undefined;
  concessionarias: [Concessionaria] | undefined;
  area: 10 | undefined;
  automovel: 7 | undefined;

  constructor(){
    this.getAllClients();
    this.loadAvaiableConcessionaria();
  }

  getAllClients() {
    var config = {
      method: 'get',
      url: 'http://localhost:5184/Cliente/GetAll',
      headers: {}
    };
    let instance = this;
    axios(config)
      .then(function (response) {
        instance.clientes = response.data
        console.log("AAAAA")
      })
      .catch(function (error) {
        console.log(error);
        console.log("fgeafaefae")
      });
  }

  loadAvaiableConcessionaria(){

    var data = JSON.stringify({
      "area": this.area,
      "automovel": {
        "id": this.automovel,
        "modelo": "",
        "preco": 0
      },
      "concessionaria": {
        "id": 0,
        "nome": ""
      },
      "quantidade": 0
    });
    
    var config = {
      method: 'get',
      url: 'http://localhost:5184/Alocacao/GetAvaibleConcessionariaWithSpecificCarAndArea',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    let instance = this;
    axios(config)
    .then(function (response) {
      instance.concessionarias = response.data;

    })
    .catch(function (error) {
      console.log(error.message);
    });
    
  }
}


interface Cliente {
  id: number;
  nome: string;
}

interface Concessionaria {
  id: number;
  nome: string;
}