import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-itens',
  templateUrl: './lista-itens.component.html',
  styleUrls: ['./lista-itens.component.css']
})
export class ListaItensComponent implements OnInit {


//Aqui, criamos uma matriz simples chamada itens com alguns valores de exemplo.
  numeros: number[] =[1,2,3,4,5,6,7,8,9];

  //adicionar item
  adicionarItem() {
    const novoNumero = Math.floor(Math.random() * 100) + 1;// Gerar um número aleatorio de 1 a 100
    this.numeros.push(novoNumero);
  }


  //remover item
  removerItem(index: number) {
    this.numeros.splice(index, 1);
  }
  //actualizar item
  actualizarItem(index: number){
    const novoValor = prompt("Digite o novo Valor");
    if(novoValor !== null){
      this.numeros[index] = parseInt(novoValor, 10);
    }
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
