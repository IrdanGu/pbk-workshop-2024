// Menentukan bilangan ganjil atau genap
const bil = prompt("Masukkan bilangan");

if (bil % 2 == 0) {
  alert("Bilangan Genap");
} else {
  alert("Bilangan Ganjil");
}

// Menentukan bilangan ganjil atau genap dari deret bilangan
const jumlahBilangan = prompt("Masukkan Jumlah bilangan");

for (let i = 1; i <= jumlahBilangan; i++) {
  if (i % 2 == 0) {
    console.log(i + " : Bilangan Genap");
  } else {
    console.log(i + " : Bilangan Ganjil");
  }
}

// FIZZ BUZZ
const jumlahBilanganFizzBuzz = prompt("Masukkan Jumlah bilangan Fizz Buzz");

for (let i = 1; i <= jumlahBilanganFizzBuzz; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(i + " : Fizz Buzz");
  } else if (i % 5 == 0) {
    console.log(i + " : Buzz");
  } else if (i % 3 == 0) {
    console.log(i + " : Fizz");
  } else {
    console.log(i);
  }
}

// Cari jarum dari tumpukan jerami
let array = [];

for (let i = 0; i < 10; i++) {
  array[i] = prompt("Masukkan bilangan ke-" + i);
}

let findNumber = prompt("Apa yang kamu cari ?");

for (let i = 0; i < 10; i++) {
  if (array[i] == findNumber) {
    console.log("Bilangan " + findNumber + " ada pada index ke " + i);
  }
}
