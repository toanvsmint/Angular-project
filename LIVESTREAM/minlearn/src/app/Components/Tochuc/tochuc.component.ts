import { Component } from '@angular/core';

@Component({
    selector: 'tochuc',
    templateUrl: './tochuc.component.html',
    styleUrls: ['./tochuc.component.css'],
})

export class TochucComponent {
    ten:string = "Digital";
    thanhlap:number = 2012;
    teams:string[] = ["Ecom", "Lergen", "Mobile", "Singapo"];
    hinh:string = "https://beautybox.com.vn/static/version1543604909/frontend/Kyanon/thebeautybox/vi_VN/images/logo.png";
}