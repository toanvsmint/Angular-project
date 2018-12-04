import { Component } from '@angular/core';

@Component({
    selector: 'bai1',
    template: `
    <h1> {{so}} </h1>
    <button (click)="CONG()">+</button>
     <button (click)="TRU()">-</button>

     <button (click)="Reload()">ABC</button>
    <hr>

    <img (mouseover)="DOIHINH($event)" (mouseout)="GUOC($event)" (click)="INFO($event)" src="{{hinh}}" />
    <a (load)="Refresh()" href="https://beautybox.com.vn/" target="blank">BeautyBox</a>
    `,
})

export class Bai1Component{  
    
    so:number = 0;

    CONG(){
        this.so = this.so + 1;
    }

    TRU(){
        if(this.so == 0){
            this.so = 0;
        } else if(this.so > 0){
            this.so = this.so - 1;
        }
       
    }

    Refresh(){
        location.reload();
    }

    Reload(){
        window.setInterval('Refresh()',1000);
    }
    
    


  hinh:string = "https://beautybox.com.vn/media/wysiwyg/banner/47183141_303475523603567_3587191977365471232_n.jpg";
    DOIHINH(e){
        e.srcElement.src="https://beautybox.com.vn/media/wysiwyg/banner/46985260_2302493893316344_5124775511825842176_n.jpg";
    }

    GUOC(f){
        f.srcElement.src = "https://beautybox.com.vn/media/wysiwyg/banner/47221069_209236476633566_4591702441837199360_n.jpg";
    }

    INFO(i){
        console.log(i);
    }
    
}