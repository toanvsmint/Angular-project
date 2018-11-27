class A{
    hoten:string;
}   

class B extends A{
    namsinh: number;
}


var teo:A = new A();
teo.hoten = "Ten la Teo";

var tun:B = new B();
tun.hoten = "Tun la ten";
tun.namsinh = 2000;

console.log(tun.hoten);