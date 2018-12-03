import { Component } from '@angular/core';

@Component({
    selector: 'baihat',
    template: `
    <h3 [style.color]="'red'">Bài hát: {{tenBH}} </h3>
    <h3 [style.color]="mauchu">Bài hát: {{tenBH}} </h3>
    <div [class.aoxanh]="macao">Hello world</div>
    <img
    (click)="ClickHinh($event)"
    src="{{hinh}}" [attr.logo]="mauchu" 
    />
    `,
    styles: [`
    .aoxanh{ color:yellow;background-color:blue }

    `]
})

export class BaihatComponent{
    tenBH:string = "Toxic";
    mauchu:string = "green";
    macao:boolean = true;
    hinh:string = "https://beautybox.com.vn/media/wysiwyg/banner/47012195_1930968880331634_8877483124913602560_n.jpg";

    constructor(){
       this.TAOBH();
    }
    // Hàm
    TAOBH(){
        this.tenBH = "It my life 10";
    }

    ClickHinh(e){
        console.log(e);
        alert(e.srcElement.src);
        e.srcElement.src="https://tbb-dev.stg-vn07.kyanon.digital/static/version1543544161/frontend/Kyanon/thebeautybox/vi_VN/images/banners/demo-bottom-banner-4.png";
    }
}