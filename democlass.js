var Hocsinh = /** @class */ (function () {
    function Hocsinh() {
    }
    return Hocsinh;
}());
var teo = new Hocsinh();
teo.maso = "HS001";
teo.hoten = "Nguyen Van Teo";
teo.namsinh = 2000;
console.log(teo.hoten);
console.log("=========================");
var Dongnghiep = /** @class */ (function () {
    function Dongnghiep(a, b, d) {
        this.name = a;
        this.position = b;
        this.born = d;
    }
    Dongnghiep.prototype.setSalary = function (c) {
        if (c >= 0) {
            this.salary = c;
        }
        else {
            this.salary = 0;
        }
    };
    Dongnghiep.prototype.getSalary = function () {
        return this.salary;
    };
    return Dongnghiep;
}());
var Tuyen = new Dongnghiep("Tuyen", "Squat", 1991);
Tuyen.setSalary(100);
console.log(Tuyen.getSalary());
