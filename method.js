/*
1.Lo buka cabang baru. Simpan nama laundry, alamat, dan harga per kg dalam variabel. Cetak jadi satu kalimat utuh: "Maisa Laundry di Ngawi, harga 7000 per kg."
*/

let namaLaundry = "Masia Laundry";
let alamat = "Ngawi";
let harga = 7000;

console.log(`${namaLaundry} di ${alamat}, harga Rp.${harga} per kg.`);
/*
2.Ada pelanggan yang namanya kecatat dengan spasi berantakan: " budi santoso ". Rapikan jadi "BUDI SANTOSO" dan cetak.
*/
let namaPelanggan = "budi santoso ";
namaPelanggan.trim();
console.log(namaPelanggan);
namaPelanggan = namaPelanggan.toUpperCase();
console.log(namaPelanggan);

// 3. Bikin struk untuk pelanggan bernama Andi yang nyuci 6 kg. Cetak dalam beberapa baris: nama, berat, harga per kg, dan total. Totalnya dihitung langsung, jangan diketik manual.
let hargaPerKg = 7000;
let berat = 6;
let nama = "Andi";

const struk = `nama: ${nama}, berat: ${berat} kg, harga per kg: ${hargaPerKg}, total harga: ${berat * hargaPerKg}`;
console.log(struk);

//Nomor HP pelanggan "081234567890". Buat versi tersamar untuk ditampilkan di struk: "0812****7890".
let nomor = "081234567890";
nomor.slice(0, 4);
let nomorSamaran = nomor.slice(0, 4);
nomor.slice(-4);
let nomorSamaran2 = nomor.slice(-4);

let gabungan = `${nomorSamaran}****${nomorSamaran2}`;
console.log(gabungan);
