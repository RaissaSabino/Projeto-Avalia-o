import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-venda-automovel',
  templateUrl: './venda-automovel.component.html',
  styleUrls: ['./venda-automovel.component.css']
})
export class VendaAutomovelComponent implements OnInit {
  clientes: [Cliente] | undefined;
  concessionarias: [Concessionaria] | undefined;
  areaID = 10;
  automovelID = 7;
  selectedClient = "";
  selectedConcessionaria = "";

  constructor(private route : ActivatedRoute) {
    this.getAllClients();
    this.loadAvaiableConcessionaria();
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.areaID = Number(routeParams.get("areaID"))

    this.automovelID = Number(routeParams.get("automovelID"))


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
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  loadAvaiableConcessionaria() {
    var data = JSON.stringify({
      "area": this.areaID,
      "automovel": {
        "id": this.automovelID,
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
      method: 'post',
      url: 'http://localhost:5184/Alocacao/GetAvaibleConcessionariaWithSpecificCarAndArea',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    let instance = this;
    axios(config)
      .then(function (response) {
        instance.concessionarias = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  MakeASell() {
    var data = JSON.stringify({
      "area": 10,
      "automovel": {
        "id": 7,
        "modelo": "",
        "preco": 0
      },
      "concessionaria": {
        "id": 2,
        "nome": ""
      },
      "quantidade": 0
    });
    
    var config = {
      method: 'put',
      url: 'http://localhost:5184/Alocacao/SellCar',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
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


interface Cliente {
  id: number;
  nome: string;
}

interface Concessionaria {
  id: number;
  nome: string;
}