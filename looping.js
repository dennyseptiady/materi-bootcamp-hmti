// var names = ["Fardan","Ibnu","Ega","Asep"];

// var i = 0;

// while(i < names.length){
//     console.log(names[i]);
//     i++;
// }

// // Do While
// var x = 0;
// do{
//     console.log('Do While', x);
//     x++;
// }while(x < 1);

var oke = [
    {
        name : "Denny Septiady",
        age : 20,
        gender : "Male"
    },
    {
        name : "Cehlsea P",
        age : 19,
        gender : "Fe Male"
    },
    {
        name : "Jone",
        age : 25,
        gender : "Male"
    }
];

var i = 0;

while(i < oke.length){
    var no = i+1;
    console.log("Ini Urutan Ke = " + no++ +" " + oke[i].name + " - " + oke[i].age + " - " + oke[i].gender);
    i++;
};