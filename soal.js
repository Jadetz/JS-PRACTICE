// 1.Satu pelanggan bawa cucian 4 kg. Harga per kg 7000. Cetak total yang harus dia bayar.
let cucian = 4;
let hargaPerKg = 7000;

let result = cucian * hargaPerKg;
console.log(result);

// 2.Hari ini ada tiga pelanggan. Yang pertama bayar 28000, kedua 45000, ketiga 33500. Cetak total pemasukan hari ini dan rata-rata belanja per pelanggan.
let a = 28000;
let b = 45000;
let c = 33500;

let total = a + b + c;
console.log(total);

/*
Mesin cuci lo muat 8 kg sekali jalan. 
Hari ini masuk 35 kg cucian. 
Cetak berapa kali mesin harus jalan penuh,
dan berapa kg sisa yang nggak penuh satu putaran.
*/

let mesinCuci = 8;
let orderan = 35;

let cetak = orderan % mesinCuci;
console.log(cetak);

// kesimpulan: sisa yg gak penuh satu putaran adalah 3

// 4. Pelanggan bayar pakai uang 100000 untuk cucian seharga 63000. Cetak kembaliannya.

var uangPelanggan = 100000;
var totalHargaCucian = 65000;

let kembalian = uangPelanggan - totalHargaCucian;
console.log(kembalian);

// 5.Lo pasang harga 7000 per kg. Bulan depan mau naik 15 persen. Cetak harga baru per kg.
let hargaAwal = 7000;
let bulanDepan = 15;
let presentase = 100;

let hargaBaru = ((100 + bulanDepan) / presentase) * hargaAwal;
console.log(hargaBaru);

//kesimpulan: harga baru bulan depan jika niak 15% adalah 8050/ kg

// 6.Ada pelanggan langganan yang dapet diskon 20 persen.
//  Dia nyuci 6 kg dengan harga normal 7000 per kg.
// Cetak berapa yang dia bayar setelah diskon,
//  dan berapa rupiah yang dia hemat.

let diskon = 20 / 100;
let totalCucian = 6;
let hargaNormal = 7000;

let hargaDiskon = totalCucian * hargaNormal * diskon;
console.log(hargaDiskon);

// 7.Cucian masuk jam 9 pagi,
//  selesai 200 menit kemudian.
//  Cetak berapa jam dan berapa menit lamanya proses itu,
//  dalam dua angka terpisah.

let cucianMasuk = 9 * 60;
let cucianSelesai = 200;

let menit = cucianMasuk + cucianSelesai;
let jam = menit / 60;
let selisih = jam - 9;

console.log(menit);
console.log(jam);
console.log(selisih);

/*
Modal deterjen dan listrik untuk 1 kg cucian adalah 2500.
Lo jual 7000 per kg.
Hari ini lo cuci 40 kg. 
Cetak total pendapatan, total modal, dan keuntungan bersihnya.
*/

let modal = 2500;
let totalCuci = 40;
let harga = 7000;
let totalModal = modal * totalCuci;
let pendapatan = harga * totalCuci;
let keuntungan = pendapatan - totalModal;

console.log(totalModal);
console.log(pendapatan);
console.log(keuntungan);

/*
Pelanggan nyuci 5 kg seharga 7000 per kg,
kena diskon 10 persen, lalu ditambah ongkos antar 8000.
Cetak total akhir. Hati-hati urutan hitungnya,
ongkos antar nggak kena diskon.

*/

let cucianPelanggan = 5;
let seharga = 7000;
let diskonPelanggan = 10 / 100;
let ongkir = 8000;

let totalHargPelanggan = cucianPelanggan * seharga * diskonPelanggan + ongkir;
console.log(totalHargPelanggan);
