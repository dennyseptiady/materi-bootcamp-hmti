//Deklarasi name variabel 
var name;

//Set Nilai Variabel NAME
name = "HMTI";
console.log("Namanya : " + name);

//Tipe data number
var angka1 = 10; //integer
var angka2 = 5.5; // double / global

var sudahNikah = true; // atau false

console.log(name + angka1);
console.log(angka1 + angka2);
console.log(sudahNikah);

if(sudahNikah === true){
    console.log("Sudah Nikah");
}else{
    console.log("Belum Nikah")
}

//Variabel array
var names = ['jois','Fardan','ibnu','Egi','Asep','Chelsea','Icha'];
console.log(names);
console.log(names[2]);
console.log("Data Terakhir ", names[names.length - 1]);
console.log("Total : " + names.length);

//Variabel Object
var hobby = {
    main : "bola"
};

var biodata = {
    name : "Fardan",
    kelas : 'TI',
    address : 'Bekasi',
    hobbyku : hobby,
    hobbies : ["Coding","Singing","Sepak Bola","Nyuci Baju"],
    age : 25,
    ucapKata : function(){
        console.log("Ada ibu ibu gaes !");
    },
    pacar : {
        pacar1 : "Nia",
        pacar2 : "Niken"
    },
};

console.log(biodata);
console.log("Namanya :", biodata.name);
console.log("Umurnya :", biodata.age);
console.log("Hobi ke 1 : ",biodata.hobbyku.main);
console.log("Hobi Ke 2 : ", biodata.hobbies[2]);
console.log("Hobi Terakhir : ", biodata["hobbies"][3]);
console.log("Hobi Terakhir : ", biodata.hobbies[biodata.hobbies.length - 1]);
biodata.ucapKata();



var peserta = [
    {
        name : "fardan",
        age : 20
    },
    {
        name : "ibnu",
        age : 20,
        alamat : "Bekasi"
    }
];

var namaku = {
    names : "Denny",
    pesertaku : peserta
};

console.log(peserta);
console.log("Peserta Pertama : ",peserta[0]["name"]);
console.log("Umur Peserta Pertama : ",peserta[0].age);
console.log(namaku);