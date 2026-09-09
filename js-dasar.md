# JavaScript Dasar — Materi Lanjutan

Lanjutan setelah operator aritmatika. Urutan bab ini disusun berdasarkan ketergantungan konsep, jadi jangan dilompat. Tiap bab ada soal di akhir. Kerjakan sebelum lanjut.

Jalankan semua latihan dengan `node namafile.js`.

---

## Bab 1. Variabel dan Tipe Data

### Tiga cara deklarasi

```javascript
var namaLama = "jangan dipakai lagi";
let berat = 5;
const HARGA_PER_KG = 7000;
```

`var` itu peninggalan JavaScript lama. Masalahnya dia bisa dideklarasi ulang tanpa error dan aturan cakupannya membingungkan. Lo akan ketemu di kode lama, tapi jangan nulis baru pakai ini.

`let` untuk nilai yang bakal berubah. `const` untuk nilai yang tidak akan diganti setelah diisi.

Aturan praktis yang dipakai di dunia kerja: pakai `const` sebagai default. Baru ganti ke `let` kalau lo sadar nilainya memang perlu berubah. Ini bukan soal gaya, ini soal mengurangi kemungkinan bug — variabel yang tidak bisa berubah itu lebih gampang dilacak.

Satu jebakan penting soal `const`:

```javascript
const pelanggan = { nama: "Budi" };
pelanggan.nama = "Andi";   // ini BOLEH
pelanggan = { nama: "Andi" };  // ini ERROR
```

`const` mengunci variabelnya, bukan isinya. Untuk object dan array, isinya masih bisa diubah. Yang dilarang cuma menugaskan ulang variabel itu ke sesuatu yang baru.

### Tipe data primitif

```javascript
const angka = 42;              // number
const teks = "Maisa Laundry";  // string
const aktif = true;            // boolean
const kosong = null;           // null
let belumDiisi;                // undefined
```

JavaScript cuma punya satu tipe angka, `number`. Tidak ada pemisahan integer dan desimal seperti bahasa lain. `7` dan `7.5` sama-sama `number`.

Bedanya `null` dan `undefined` sering bikin bingung. `undefined` artinya variabel ada tapi belum pernah diisi — ini terjadi otomatis. `null` artinya lo sengaja mengisi dengan "kosong" — ini keputusan lo sebagai programmer.

Cek tipe data pakai `typeof`:

```javascript
console.log(typeof 42);        // "number"
console.log(typeof "halo");    // "string"
console.log(typeof true);      // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object"  <- ini BUG bawaan JavaScript
```

Yang terakhir itu kesalahan sejak versi pertama JavaScript yang tidak pernah diperbaiki karena akan merusak kode lama di seluruh dunia. Ingat saja sebagai keanehan.

### Latihan Bab 1

1. Bikin variabel untuk nama laundry, harga per kg, dan status buka. Tentukan sendiri mana yang pantas `const` dan mana `let`. Cetak ketiganya.
2. Bikin variabel `totalPelanggan` tanpa diisi nilai. Cetak nilainya dan tipenya.
3. Bikin object pelanggan berisi nama dan berat cucian pakai `const`. Ubah beratnya jadi angka lain, lalu cetak. Buktikan sendiri bahwa itu berhasil.
4. Cetak `typeof` dari lima nilai berbeda mewakili lima tipe primitif di atas.

---

## Bab 2. String

### Template literal

Cara lama menggabung string pakai `+`:

```javascript
const nama = "Budi";
const berat = 5;
console.log("Pelanggan " + nama + " nyuci " + berat + " kg");
```

Cara yang dipakai sekarang, pakai backtick:

```javascript
console.log(`Pelanggan ${nama} nyuci ${berat} kg`);
```

Di dalam `${}` lo bisa taruh ekspresi apa saja, bukan cuma variabel:

```javascript
console.log(`Totalnya ${berat * 7000} rupiah`);
```

Template literal juga bisa multi-baris tanpa trik apa pun:

```javascript
const struk = `
Maisa Laundry
Pelanggan: ${nama}
Berat: ${berat} kg
`;
```

### Method string yang sering dipakai

```javascript
const nama = "  Budi Santoso  ";

nama.length              // panjang karakter
nama.trim()              // buang spasi di ujung
nama.toUpperCase()       // jadi huruf besar semua
nama.toLowerCase()       // jadi huruf kecil semua
nama.includes("Budi")    // true kalau mengandung teks itu
nama.replace("Budi", "Andi")
nama.split(" ")          // pecah jadi array berdasarkan pemisah
nama.slice(0, 4)         // ambil potongan dari indeks 0 sampai sebelum 4
```

Satu hal penting: **method string tidak mengubah string aslinya**. Dia mengembalikan string baru.

```javascript
let nama = "budi";
nama.toUpperCase();
console.log(nama);  // masih "budi"

nama = nama.toUpperCase();
console.log(nama);  // baru "BUDI"
```

Ini disebut immutable. String di JavaScript tidak bisa diubah di tempat, cuma bisa diganti dengan yang baru.

### Latihan Bab 2

1. Bikin variabel nama pelanggan dengan spasi berlebih di depan dan belakang. Bersihkan dan cetak dalam huruf kapital semua.
2. Bikin struk laundry multi-baris pakai template literal. Isinya nama pelanggan, berat, harga per kg, dan total. Total dihitung langsung di dalam template.
3. Ambil string `"Budi Santoso"`. Pecah jadi array nama depan dan belakang, lalu cetak nama depannya saja.
4. Ada nomor HP `"081234567890"`. Cetak empat digit terakhirnya saja.

---

## Bab 3. Operator Perbandingan dan Logika

### Perbandingan

```javascript
5 > 3      // true
5 >= 5     // true
5 < 3      // false
5 === 5    // true
5 !== 3    // true
```

### `==` versus `===`

Ini konsep yang wajib lo kuasai, bukan hafalan.

`===` membandingkan nilai **dan** tipe. Kalau tipenya beda, langsung `false`.

`==` membandingkan nilai saja, dan kalau tipenya beda dia akan **mengonversi dulu** sebelum membandingkan.

```javascript
"5" === 5   // false, string tidak sama dengan number
"5" == 5    // true, "5" dikonversi jadi 5 dulu

0 == false     // true
null == undefined  // true
"" == 0        // true
```

Konversi otomatis ini punya aturan yang rumit dan tidak intuitif. Hasilnya sering bikin bug yang susah dilacak.

Aturannya sederhana: **selalu pakai `===`**. Kalau lo butuh membandingkan tipe yang beda, konversi sendiri secara eksplisit supaya niat lo terbaca di kode.

### Truthy dan falsy

Setiap nilai di JavaScript kalau dievaluasi sebagai boolean akan jatuh ke `true` atau `false`.

Yang dianggap **falsy** cuma enam: `false`, `0`, `""` (string kosong), `null`, `undefined`, `NaN`.

Selain itu semua **truthy**. Termasuk yang sering mengejutkan:

```javascript
Boolean([])       // true, array kosong itu truthy
Boolean({})       // true, object kosong itu truthy
Boolean("0")      // true, string "0" itu truthy
Boolean(-1)       // true, angka negatif itu truthy
```

Ini penting karena banyak kode mengandalkan sifat ini untuk pengecekan singkat.

### Operator logika

```javascript
true && false   // false, AND — semua harus benar
true || false   // true, OR — cukup salah satu benar
!true           // false, NOT — membalik
```

Yang perlu lo tahu: `&&` dan `||` di JavaScript tidak mengembalikan boolean, tapi mengembalikan **salah satu nilai operandnya**.

```javascript
const nama = "" || "Tanpa Nama";   // "Tanpa Nama"
const berat = 0 || 5;              // 5
```

`||` mengembalikan operand kanan kalau kiri falsy. Ini sering dipakai untuk nilai cadangan.

Tapi hati-hati, contoh kedua di atas itu jebakan. Kalau berat memang benar-benar 0, dia akan diganti jadi 5 karena 0 itu falsy. Untuk kasus begini pakai `??`:

```javascript
const berat = 0 ?? 5;   // 0, karena 0 bukan null/undefined
```

`??` cuma mengambil operand kanan kalau kiri `null` atau `undefined`. Lebih aman untuk nilai numerik.

### Latihan Bab 3

1. Cetak hasil `"7" == 7` dan `"7" === 7`. Tebak dulu sebelum jalankan.
2. Cek apakah berat cucian lebih dari 10 kg DAN pelanggan adalah member. Bikin dua variabel dulu, lalu cetak hasil pengecekannya.
3. Bikin variabel nama yang isinya string kosong. Pakai `||` untuk memberi nilai cadangan `"Pelanggan Umum"`. Cetak hasilnya.
4. Bikin variabel `diskon` bernilai `0`. Coba pakai `||` dengan cadangan `10`, lalu coba pakai `??` dengan cadangan yang sama. Jelaskan ke diri lo sendiri kenapa hasilnya beda.
5. Cetak hasil `Boolean()` dari enam nilai falsy dan tiga nilai truthy yang mengejutkan.

---

## Bab 4. Percabangan

### if / else if / else

```javascript
const berat = 7;

if (berat > 10) {
  console.log("Cucian besar");
} else if (berat > 5) {
  console.log("Cucian sedang");
} else {
  console.log("Cucian kecil");
}
```

Urutan pengecekan penting. JavaScript berhenti di kondisi pertama yang benar. Kalau lo tulis `berat > 5` duluan, cucian 20 kg akan masuk ke kategori sedang karena kondisi itu sudah benar duluan.

### Ternary

Bentuk singkat untuk if-else sederhana:

```javascript
const status = berat > 10 ? "besar" : "kecil";
```

Bacanya: kondisi, tanda tanya, nilai kalau benar, titik dua, nilai kalau salah.

Pakai ini cuma untuk kasus sederhana. Ternary bertingkat susah dibaca dan sebaiknya dihindari.

### switch

Untuk membandingkan satu nilai dengan banyak kemungkinan:

```javascript
const layanan = "express";

switch (layanan) {
  case "reguler":
    console.log("Selesai 3 hari");
    break;
  case "express":
    console.log("Selesai 1 hari");
    break;
  case "kilat":
    console.log("Selesai 6 jam");
    break;
  default:
    console.log("Layanan tidak dikenal");
}
```

`break` itu wajib. Tanpa `break`, eksekusi akan lanjut ke case berikutnya. Ini penyebab bug klasik. `switch` juga membandingkan pakai `===`, jadi tipe harus cocok.

### Latihan Bab 4

1. Bikin program yang menentukan kategori cucian: di bawah 3 kg "kecil", 3 sampai 8 kg "sedang", di atas 8 kg "besar". Uji dengan tiga nilai berbeda.
2. Bikin sistem diskon bertingkat. Belanja di atas 100000 dapat 15 persen, di atas 50000 dapat 10 persen, di bawah itu tidak dapat. Cetak total setelah diskon.
3. Tulis ulang soal nomor 1 pakai ternary untuk kasus dua kategori saja (besar atau kecil).
4. Bikin `switch` untuk jenis layanan yang menentukan harga per kg. Reguler 7000, express 12000, kilat 20000. Hitung total untuk 4 kg dengan layanan express.
5. Bikin validasi input. Kalau berat kurang dari atau sama dengan 0, cetak pesan error. Kalau lebih dari 50, cetak "melebihi kapasitas". Selain itu proses normal.

---

## Bab 5. Perulangan

### for

```javascript
for (let i = 1; i <= 5; i++) {
  console.log(`Cucian ke-${i}`);
}
```

Tiga bagian di dalam kurung: nilai awal, kondisi selama perulangan berjalan, dan apa yang dilakukan tiap akhir putaran.

### while

Dipakai kalau lo tidak tahu berapa kali harus mengulang:

```javascript
let sisa = 35;
let putaran = 0;

while (sisa >= 8) {
  sisa = sisa - 8;
  putaran++;
}
```

Bahaya utama `while` adalah lupa mengubah kondisi, sehingga jadi perulangan tak terbatas dan program menggantung.

### do...while

Sama seperti `while`, bedanya isi dijalankan minimal sekali sebelum kondisi dicek.

```javascript
let i = 10;
do {
  console.log(i);
  i++;
} while (i < 5);   // tetap tercetak sekali meski kondisi salah
```

### break dan continue

```javascript
for (let i = 1; i <= 10; i++) {
  if (i === 5) continue;  // lompati putaran ini
  if (i === 8) break;     // hentikan perulangan
  console.log(i);
}
```

### Latihan Bab 5

1. Cetak angka 1 sampai 10 pakai `for`.
2. Cetak total pemasukan dari 5 transaksi berikut pakai perulangan: 28000, 45000, 33500, 60000, 15000. Simpan dulu dalam array.
3. Mesin muat 8 kg. Ada 35 kg cucian. Pakai `while` untuk menghitung berapa putaran penuh dan berapa sisa. Cetak keduanya.
4. Cetak angka 1 sampai 20, tapi lewati semua kelipatan 3.
5. Bikin tabel harga. Cetak harga untuk 1 kg sampai 10 kg dengan tarif 7000 per kg, dalam format `"3 kg = 21000"`.

---

## Bab 6. Array

### Dasar

```javascript
const cucian = ["kemeja", "celana", "jaket"];

cucian[0]        // "kemeja", indeks mulai dari 0
cucian.length    // 3
cucian[cucian.length - 1]  // elemen terakhir
```

### Menambah dan menghapus

```javascript
cucian.push("kaos");      // tambah di belakang
cucian.pop();             // hapus dari belakang
cucian.unshift("sepatu"); // tambah di depan
cucian.shift();           // hapus dari depan
```

Empat method ini **mengubah array aslinya**. Berbeda dengan method string yang immutable.

### Menelusuri array

```javascript
const berat = [3, 5, 8, 2];

// cara lama
for (let i = 0; i < berat.length; i++) {
  console.log(berat[i]);
}

// cara modern, kalau lo tidak butuh indeks
for (const b of berat) {
  console.log(b);
}
```

`for...of` lebih bersih dan lebih jarang salah tulis. Pakai `for` biasa cuma kalau lo memang butuh nomor indeksnya.

### Latihan Bab 6

1. Bikin array berisi 5 nama pelanggan. Cetak jumlahnya, elemen pertama, dan elemen terakhir.
2. Tambahkan dua pelanggan baru di belakang dan satu di depan. Cetak array akhirnya.
3. Bikin array berat cucian `[3, 5, 8, 2, 6]`. Hitung totalnya pakai `for...of`.
4. Dari array yang sama, cari berat terbesar tanpa memakai fungsi bawaan. Pakai perulangan dan perbandingan manual.
5. Bikin array harga `[28000, 45000, 33500]`. Cetak masing-masing dalam format `"Transaksi 1: Rp28000"` dengan nomor urut yang benar.

---

## Bab 7. Object

### Dasar

```javascript
const pelanggan = {
  nama: "Budi",
  berat: 5,
  layanan: "express",
  sudahBayar: false
};

pelanggan.nama         // "Budi"
pelanggan["nama"]      // sama saja
pelanggan.alamat       // undefined, properti tidak ada
```

Pakai titik untuk akses biasa. Pakai kurung siku kalau nama propertinya disimpan di variabel:

```javascript
const kunci = "berat";
console.log(pelanggan[kunci]);  // 5
```

### Mengubah dan menambah

```javascript
pelanggan.berat = 7;          // ubah
pelanggan.alamat = "Ngawi";   // tambah properti baru
delete pelanggan.sudahBayar;  // hapus
```

### Object bersarang dan array of object

Ini bentuk yang paling sering lo temui di data nyata, terutama dari API:

```javascript
const transaksi = [
  { nama: "Budi", berat: 5, total: 35000 },
  { nama: "Andi", berat: 3, total: 21000 },
  { nama: "Citra", berat: 8, total: 56000 }
];

console.log(transaksi[1].nama);  // "Andi"

for (const t of transaksi) {
  console.log(`${t.nama} bayar ${t.total}`);
}
```

Struktur ini persis seperti data JSON yang nanti lo terima dari HTTP response. Biasakan sekarang.

### Optional chaining

Kalau lo mengakses properti dari object yang mungkin tidak ada, program akan error:

```javascript
const p = { nama: "Budi" };
console.log(p.alamat.kota);   // ERROR
```

Solusinya:

```javascript
console.log(p.alamat?.kota);  // undefined, tidak error
```

Tanda tanya itu artinya "kalau yang di kiri ada, lanjut. Kalau tidak, berhenti dan kembalikan undefined."

### Latihan Bab 7

1. Bikin object satu transaksi laundry berisi nama, berat, layanan, dan status bayar. Cetak semua propertinya.
2. Ubah status bayar jadi `true` dan tambahkan properti tanggal. Cetak object utuhnya.
3. Bikin array berisi 4 object transaksi. Telusuri dan cetak nama tiap pelanggan.
4. Dari array yang sama, hitung total seluruh pemasukan.
5. Dari array yang sama, cetak hanya transaksi yang beratnya di atas 5 kg. Pakai perulangan dan `if`.
6. Bikin object pelanggan tanpa properti alamat. Coba akses `pelanggan.alamat.kota` dan lihat errornya. Lalu perbaiki pakai optional chaining.

---

## Bab 8. Function

### Tiga bentuk penulisan

```javascript
// function declaration
function hitungTotal(berat, harga) {
  return berat * harga;
}

// function expression
const hitungTotal2 = function(berat, harga) {
  return berat * harga;
};

// arrow function
const hitungTotal3 = (berat, harga) => {
  return berat * harga;
};

// arrow function ringkas, kalau isinya cuma satu ekspresi
const hitungTotal4 = (berat, harga) => berat * harga;
```

Arrow function adalah gaya yang dominan di kode modern, terutama di React dan Next.js. Biasakan bentuk ini.

### return

Function tanpa `return` mengembalikan `undefined`.

```javascript
function cetak(nama) {
  console.log(nama);   // ini mencetak, bukan mengembalikan
}

const hasil = cetak("Budi");
console.log(hasil);  // undefined
```

Bedakan **mencetak** dan **mengembalikan**. `console.log` menampilkan ke layar. `return` menyerahkan nilai ke kode yang memanggil. Function yang berguna hampir selalu `return`, bukan `console.log`.

Eksekusi berhenti begitu ketemu `return`:

```javascript
function cekBerat(berat) {
  if (berat <= 0) return "Berat tidak valid";
  return `Berat ${berat} kg diterima`;
}
```

Pola ini disebut early return dan bikin kode lebih rata, tidak bertingkat-tingkat.

### Parameter default

```javascript
function hitungTotal(berat, harga = 7000) {
  return berat * harga;
}

hitungTotal(5);         // 35000, pakai harga default
hitungTotal(5, 12000);  // 60000
```

### Scope

Variabel yang dibikin di dalam function tidak bisa diakses dari luar.

```javascript
function proses() {
  const rahasia = 100;
}
console.log(rahasia);  // ERROR
```

Sebaliknya, function bisa mengakses variabel di luarnya. Ini disebut closure, dan konsekuensinya luas, tapi untuk sekarang cukup lo tahu arah aksesnya cuma satu, dari dalam ke luar.

### Latihan Bab 8

1. Bikin function `hitungTotal(berat, harga)` yang mengembalikan hasil kali. Panggil dan cetak hasilnya.
2. Ubah function itu jadi arrow function bentuk ringkas.
3. Bikin function `hitungDiskon(total, persen)` yang mengembalikan harga setelah diskon. Beri nilai default persen 10.
4. Bikin function `kategoriBerat(berat)` yang mengembalikan string kategori. Pakai early return, jangan pakai else.
5. Bikin function `buatStruk(pelanggan)` yang menerima satu object transaksi dan mengembalikan string struk multi-baris. Uji dengan satu object.
6. Bikin function `validasiBerat(berat)` yang mengembalikan `false` kalau berat bukan angka atau kurang dari sama dengan nol, dan `true` kalau valid.

---

## Bab 9. Array Method Modern

Ini bagian yang akan lo pakai setiap hari begitu masuk React dan Next.js. Kuasai betul.

Semua method di bawah menerima function sebagai argumen dan **tidak mengubah array asli**.

### map — mengubah tiap elemen

```javascript
const berat = [3, 5, 8];
const total = berat.map(b => b * 7000);
// [21000, 35000, 56000]
```

`map` selalu menghasilkan array dengan **jumlah elemen yang sama**, isinya hasil transformasi.

### filter — menyaring

```javascript
const transaksi = [
  { nama: "Budi", total: 35000 },
  { nama: "Andi", total: 21000 },
  { nama: "Citra", total: 56000 }
];

const besar = transaksi.filter(t => t.total > 30000);
// dua object: Budi dan Citra
```

`filter` menghasilkan array yang **lebih pendek atau sama**, isinya elemen yang lolos kondisi.

### find — mencari satu

```javascript
const budi = transaksi.find(t => t.nama === "Budi");
// satu object, bukan array
```

Mengembalikan elemen pertama yang cocok, atau `undefined` kalau tidak ada.

### reduce — meringkas jadi satu nilai

```javascript
const totalSemua = transaksi.reduce((jumlah, t) => jumlah + t.total, 0);
// 112000
```

`reduce` paling sering bikin bingung. Bacanya begini: `jumlah` itu nilai yang dibawa dari putaran sebelumnya, `t` itu elemen saat ini, dan `0` di akhir itu nilai awal `jumlah`.

Putaran 1: jumlah 0, tambah 35000, jadi 35000.
Putaran 2: jumlah 35000, tambah 21000, jadi 56000.
Putaran 3: jumlah 56000, tambah 56000, jadi 112000.

### forEach — menjalankan sesuatu untuk tiap elemen

```javascript
transaksi.forEach(t => console.log(t.nama));
```

`forEach` tidak mengembalikan apa-apa. Pakai ini kalau lo cuma mau melakukan aksi, bukan menghasilkan data baru.

### some dan every

```javascript
transaksi.some(t => t.total > 50000);   // true kalau ADA yang memenuhi
transaksi.every(t => t.total > 10000);  // true kalau SEMUA memenuhi
```

### Merangkai

Method ini bisa disambung karena masing-masing mengembalikan array:

```javascript
const hasil = transaksi
  .filter(t => t.total > 20000)
  .map(t => t.nama);
// ["Budi", "Citra"]
```

### Latihan Bab 9

Pakai data ini untuk semua soal:

```javascript
const transaksi = [
  { nama: "Budi", berat: 5, total: 35000, lunas: true },
  { nama: "Andi", berat: 3, total: 21000, lunas: false },
  { nama: "Citra", berat: 8, total: 56000, lunas: true },
  { nama: "Dina", berat: 2, total: 14000, lunas: false },
  { nama: "Eko", berat: 10, total: 70000, lunas: true }
];
```

1. Pakai `map` untuk menghasilkan array berisi nama semua pelanggan.
2. Pakai `filter` untuk mengambil transaksi yang belum lunas.
3. Pakai `find` untuk mencari transaksi atas nama Citra.
4. Pakai `reduce` untuk menghitung total seluruh pemasukan.
5. Pakai `reduce` untuk menghitung total berat cucian.
6. Rangkai `filter` dan `map` untuk mendapatkan nama pelanggan yang belum lunas saja.
7. Cek apakah ada transaksi di atas 60000 pakai `some`.
8. Cek apakah semua transaksi beratnya di atas 1 kg pakai `every`.
9. Pakai `reduce` untuk menghitung total pemasukan dari yang **sudah lunas saja**. Kerjakan dua cara: dengan `filter` dulu, dan langsung di dalam `reduce`.
10. Hasilkan array string struk untuk semua pelanggan dengan format `"Budi - 5 kg - Rp35000"`.

---

## Bab 10. Destructuring dan Spread

Dua sintaks ini ada di mana-mana di kode modern.

### Destructuring object

```javascript
const pelanggan = { nama: "Budi", berat: 5, layanan: "express" };

const { nama, berat } = pelanggan;
console.log(nama);  // "Budi"
```

Sering dipakai di parameter function:

```javascript
function buatStruk({ nama, berat, total }) {
  return `${nama}: ${berat} kg = ${total}`;
}
```

### Destructuring array

```javascript
const [pertama, kedua] = [10, 20, 30];
```

### Spread

Menyalin dan menggabung:

```javascript
const a = [1, 2];
const b = [3, 4];
const gabung = [...a, ...b];   // [1, 2, 3, 4]

const asli = { nama: "Budi", berat: 5 };
const salinan = { ...asli, berat: 7 };  // berat ditimpa jadi 7
```

Ini cara membuat salinan yang diubah tanpa merusak yang asli. Prinsip ini penting sekali di React, di mana mengubah data langsung sering menyebabkan bug.

### Latihan Bab 10

1. Bikin object transaksi. Ambil nama dan total pakai destructuring, lalu cetak.
2. Tulis ulang function `buatStruk` dari Bab 8 supaya parameternya pakai destructuring.
3. Bikin array berisi 3 angka. Ambil elemen pertama dan kedua pakai destructuring array.
4. Bikin object pelanggan, lalu bikin salinannya dengan berat yang berbeda pakai spread. Cetak keduanya dan buktikan yang asli tidak berubah.
5. Gabungkan dua array transaksi jadi satu pakai spread.

---

## Bab 11. Error Handling

```javascript
function hitungTotal(berat, harga) {
  if (typeof berat !== "number") {
    throw new Error("Berat harus angka");
  }
  return berat * harga;
}

try {
  const hasil = hitungTotal("lima", 7000);
  console.log(hasil);
} catch (error) {
  console.log("Gagal:", error.message);
}
```

`throw` melempar error dan menghentikan eksekusi. `try` menjalankan kode yang berisiko. `catch` menangkap error supaya program tidak mati total.

Ada `finally` yang selalu dijalankan, error atau tidak:

```javascript
try {
  // sesuatu
} catch (error) {
  // penanganan
} finally {
  console.log("Selalu jalan");
}
```

Jangan membungkus semua kode dengan `try/catch` sembarangan. Pakai di tempat yang memang bisa gagal di luar kendali lo: membaca file, memanggil API, mengurai data dari luar.

### Latihan Bab 11

1. Bikin function `bagi(a, b)` yang melempar error kalau `b` bernilai nol. Panggil dalam `try/catch` dan cetak pesan errornya.
2. Bikin function `validasiTransaksi(obj)` yang melempar error kalau nama kosong atau berat kurang dari sama dengan nol.
3. Coba parsing string JSON yang rusak pakai `JSON.parse` di dalam `try/catch`. Cetak pesan errornya.

---

## Bab 12. Asynchronous

Ini bab terakhir dan paling berkaitan langsung dengan HTTP yang lagi lo pelajari.

### Masalahnya

JavaScript menjalankan kode baris per baris. Tapi sebagian pekerjaan butuh waktu: mengambil data dari server, membaca file, menunggu timer. Kalau JavaScript menunggu diam sampai selesai, seluruh program membeku.

Solusinya: pekerjaan lama dijalankan di latar, dan kode lanjut jalan. Nanti kalau sudah selesai, hasilnya diproses.

```javascript
console.log("satu");
setTimeout(() => console.log("dua"), 1000);
console.log("tiga");

// urutan cetak: satu, tiga, dua
```

### Promise

Promise itu janji bahwa suatu nilai akan tersedia nanti. Statusnya ada tiga: menunggu, berhasil, gagal.

```javascript
const janji = new Promise((resolve, reject) => {
  const berhasil = true;
  if (berhasil) {
    resolve("Data didapat");
  } else {
    reject("Gagal ambil data");
  }
});

janji
  .then(hasil => console.log(hasil))
  .catch(error => console.log(error));
```

Lo jarang membuat Promise sendiri. Yang sering lo lakukan adalah **mengonsumsi** Promise yang dikembalikan fungsi lain.

### async / await

Cara modern menangani Promise, jauh lebih terbaca:

```javascript
async function ambilData() {
  try {
    const response = await fetch("https://api.example.com/orders");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Gagal:", error.message);
  }
}
```

Aturannya: `await` cuma bisa dipakai di dalam function yang ditandai `async`. `await` artinya "tunggu Promise ini selesai, baru lanjut ke baris berikutnya".

Function `async` **selalu** mengembalikan Promise, meskipun lo `return` nilai biasa.

### Hubungan dengan HTTP

Perhatikan contoh `fetch` di atas. Itu persis siklus HTTP yang kita bahas sebelumnya. `fetch` mengirim HTTP request. `response` adalah HTTP response, lengkap dengan status dan header. `response.json()` mengurai HTTP body yang berformat JSON jadi object JavaScript.

```javascript
async function ambilOrder() {
  const response = await fetch("https://api.example.com/orders");

  if (!response.ok) {
    throw new Error(`Request gagal dengan status ${response.status}`);
  }

  const data = await response.json();
  return data;
}
```

`response.ok` bernilai true kalau status di rentang 200-299. `response.status` berisi angka status code. Semua istilah ini sudah lo pelajari di materi HTTP, sekarang lo lihat bentuk kodenya.

Satu catatan penting: `fetch` **tidak** melempar error untuk status 404 atau 500. Dia cuma melempar error kalau jaringannya yang gagal. Jadi lo harus mengecek `response.ok` sendiri.

### Latihan Bab 12

1. Cetak tiga baris teks dengan `setTimeout` berbeda durasi. Amati urutan keluarannya.
2. Bikin function `async` bernama `tungguSebentar` yang menunggu 2 detik lalu mengembalikan string. Panggil dengan `await`.
3. Bikin Promise sederhana yang berhasil kalau nilai berat lebih dari 0 dan gagal kalau tidak. Konsumsi pakai `.then` dan `.catch`.
4. Tulis ulang soal nomor 3 pakai `async/await` dan `try/catch`.
5. Pakai `fetch` untuk mengambil data dari `https://jsonplaceholder.typicode.com/users`. Cetak nama semua pengguna. Gabungkan dengan `map` dari Bab 9.
6. Dari data yang sama, tangani kemungkinan gagal dengan mengecek `response.ok` dan melempar error yang jelas.

---

## Proyek Penutup

Kerjakan setelah semua bab selesai. Ini menggabungkan hampir semua konsep di atas.

Bikin satu file yang mengelola data transaksi Maisa Laundry dengan ketentuan:

Ada array berisi minimal 6 object transaksi, masing-masing punya nama, berat, jenis layanan, dan status lunas.

Ada function `hitungTotal` yang menentukan harga berdasarkan jenis layanan (reguler 7000, express 12000, kilat 20000) dan menghitung total per transaksi.

Ada function `terapkanDiskon` yang memberi diskon 10 persen untuk transaksi di atas 8 kg.

Ada function `buatLaporan` yang mencetak daftar semua transaksi dalam format rapi, lalu mencetak ringkasan berupa total pemasukan, jumlah transaksi lunas, jumlah belum lunas, dan rata-rata berat cucian.

Ada validasi yang melempar error kalau ada transaksi dengan berat tidak valid.

Gunakan `map`, `filter`, dan `reduce` di mana relevan. Jangan pakai perulangan `for` biasa kecuali memang lebih masuk akal.
