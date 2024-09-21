// array kosong
const arr = [];

// array bernilai
const arr1 = [1, 2, 3];

// tampilkan array
console.log(arr1);

// menampilkan elemen array sesuai indeks
console.log(arr1[0]);

// tambahkan elemen array
arr1[2] = 4;

// menambahkan elemen menggunakan javascript push()
arr.push(1);

// menghapus elemen array ke pertama menggunakan shift()
console.log(arr.shift());

// menghapus elemen array ke terakhir menggunakan pop()
console.log(arr.pop());

// tampilkan sesudah mengisi array
console.log(arr);

// tampilkan perulangan
for (let index = 0; index < 2; index++) {
  console.log(index);
}

// tampilkan array menggunakan perulangan
for (let index = 0; index < arr.length; index++) {
  console.log(arr[index]);
}
