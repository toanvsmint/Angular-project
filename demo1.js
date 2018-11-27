// var a:number = 100;
// var b:string ="hello";
// var c:boolean = true;
// var d = {ho:"Pham", ten:"truong"}
// console.log(a);
// console.log(d.ho);
// for(var i=0; i <=5; i++){
//     console.log("For " + i);
// }
var ds = ["AAA", "BBB", "CCC", "XXX", "YYY"];
// duyet mang JS
for (var i = 0; i < ds.length; i++) {
    console.log(ds[i]);
}
// duyet mang: FOR IN/OFF
for (var k in ds) {
    console.log("IN " + k);
}
for (var _i = 0, ds_1 = ds; _i < ds_1.length; _i++) {
    var x = ds_1[_i];
    console.log("OFF " + x);
}
