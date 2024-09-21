// PEMATERI 1

// INPUT OUTPUT DASAR
// cara menampilkan text ke dalam console
console.log("hello");
alert("gse");
prompt("hdhtdh");
confirm("edrfvgbhnuj");
document.write("test write");
document.writeln("test");

// VARIABEL
// kegunaan variabel var adalah bisa dirubah tetapi sudah tertinggal
// kegunaan variabel dari let juga bisa dirubah
// kegunaan varibel dari const adalah nilai konstanta tidak dapot diubah
var test;
let kon;
const tol = "kontol";

// tipe data = integer, string;
// mengisi nilai pada variabel
kon = "tol";

const umur = 2;
const umur2 = 3;
//menampilkan nilai dari variabel
console.log(kon);

//menampilkan dialog alert/peringatan
alert(kon);
prompt(kon);
confirm(kon);
// menampilkan/mencetak variabel di body browser
document.write(kon);
document.writeln(kon);

// ARITMATIKA
console.log(umur + umur2);
console.log(umur - umur2);
console.log(umur * umur2);
console.log(umur / umur2);
console.log(umur % umur2);
// operasi aritmatika dalam kurung
console.log(umur + umur2 + (umur - umur2));
// concatenasi variabel
console.log(kon + tol);

// Cara mengambil data dari inputan
const con = prompt("tol");
console.log(con);
console.log("con: " + tol);

// Penjumlahan dengan inputan
const input1 = parseInt(prompt("Input bilangan ke-1"));
const input2 = parseInt(prompt("Input bilangan ke-2"));
// menampilkan nilai dari inputan1 dan inputan2
console.log(input1 + input2);

// manipulasi string dengan variabel
console.log(
  "Penjumlahan " + input1 + " + " + input2 + " = " + (input1 + input2)
);
console.log(
  "Pengurangan " + input1 + " - " + input2 + " = " + (input1 - input2)
);
console.log("Perkalian " + input1 + " x " + input2 + " = " + input1 * input2);
console.log("Pembagian " + input1 + " / " + input2 + " = " + input1 / input2);
console.log("Modulus " + input1 + " % " + input2 + " = " + (input1 % input2));
