import { Component } from '@angular/core';

@Component({
    selector: 'bai1',
    template: `
    <h1> {{so}} </h1>
    <button (click)="CONG()">+</button>
     <button (click)="TRU()">-</button>

     
    `,
})

export class Bai1Component{
    
    so:number = 0;

    CONG(){
        this.so = this.so + 1;
    }

    TRU(){
        this.so = this.so - 1;
    }

}