import { Component } from '@angular/core';

@Component({
    selector: 'nhanvien',
    templateUrl: './nhanvien.component.html',
    styleUrls: ["./nhanvien.component.css"],
})

export class NhanvienComponent {
 hoten:string = "Tên của bạn";
 namsinh: number = 1994;
 sothich= { game:"LMHT", hoc:"Toan" };
 mang:string[] = ["Mot", "Hai", "BA", "Bon"];
 hinh:string = "https://beautybox.com.vn/media/wysiwyg/banner/46985260_2302493893316344_5124775511825842176_n.jpg";
}