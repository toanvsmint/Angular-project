class Hocsinh{
    //Thuoc tinh
    maso:string;
    hoten:string;
    namsinh:number;

    //Hanh dong
}

var teo:Hocsinh = new Hocsinh();
teo.maso = "HS001";
teo.hoten = "Nguyen Van Teo";
teo.namsinh =  2000;

console.log(teo.hoten);

console.log("=========================");

class Dongnghiep{
    name:string;
    position:string;
    born:number;
    private salary:number; //phai > 0 nha
   

    constructor(a:string, b:string, d:number){
        this.name = a;
        this.position = b;
        this.born = d;
    }
    setSalary(c:number){
        if(c>=0){
            this.salary = c;
        }else{
            this.salary = 0;
        }
       
    }

    getSalary(){
        return this.salary;
    }
}

var Tuyen:Dongnghiep = new Dongnghiep("Tuyen", "Squat",1991);
Tuyen.setSalary(100);
console.log(Tuyen.getSalary());