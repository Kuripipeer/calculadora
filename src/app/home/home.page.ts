import { Component } from '@angular/core';
import { evaluate } from 'mathjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public num: string;

  constructor() {
    this.num = '';
  }

  add(valor: string){
    this.num = this.num + valor;
  }

  clear(){
    this.num = '';
  }

  calcular(){
    try {
      this.num = evaluate(this.num);
    } catch (e) {
      this.num = 'Error';
    }
  }

}
