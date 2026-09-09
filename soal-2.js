// 5. Mesin muat 8 kg. Pelanggan bawa 12 kg.
// Cetak berapa putaran yang dibutuhkan,
// dibulatkan ke atas,
// karena sisa 4 kg tetep butuh satu putaran penuh.
// Jangan pakai perulangan, pakai perhitungan dan pembulatan.

let muatMesin = 8;
let cucianPelanggan = 12;

let putaran = cucianPelanggan / muatMesin;
console.log(`jika dibulatkan maka ${putaran} menjadi 2`);

// 6. Tarif dasar 7000 per kg,
// tapi ada minimum charge 20000.
// Kalau total hitungan di bawah itu,
// pelanggan tetap bayar 20000.
// Uji dengan 2 kg dan dengan 6 kg.

let tarifDasar = 7000;
let minCharge = 20000;
let totalA = 2 * tarifDasar;
let totalB = 6 * tarifDasar;

if (totalA <= minCharge) {
  console.log("Bayar 20000");
} else if (totalB <= minCharge);
{
  console.log(`maka bayar ${totalB}`);
}

// 7. Diskon bertingkat,
// tapi tidak boleh menumpuk.
// Belanja di atas 100 ribu dapat 15 persen,
// di atas 50 ribu dapat 10 persen,
// di bawah itu tidak dapat.
// Uji dengan 45000, 78000, dan 150000.
// Pastikan yang 150000 cuma kena 15 persen,
// bukan 15 tambah 10.

let diskonA = 15 / 100;
let diskonB = 10 / 100;

let uang = 78000;

if (uang > 100000) {
  console.log(`harga setelah diskon ${uang - uang * diskonA}`);
} else if (uang > 50000) {
  console.log(`harga setelah diskon ${uang - uang * diskonB}`);
} else {
  console.log("gak dapet diskon");
}

// 8. Harga per kg tergantung layanan: reguler 7000, express 12000,
// kilat 20000. Tambahan aturan: layanan kilat menolak cucian di atas 5 kg karena mesin tidak sanggup.
// Buat program yang menerima jenis layanan dan berat, lalu cetak total harga atau pesan penolakan.

let hargaReguler = 7000;
let hargaExpress = 12000;
let hargaKilat = 20000;

let beratCucian = 0;
let jenisLayanan = null;

let totalHarga = 0;

if (jenisLayanan == "kilat" && beratCucian > 5) {
  totalHarga = beratCucian * hargaKilat;
  console.log(`Ora iso bos mesin e jebol`);
} else if (jenisLayanan == "reguler") {
  totalHarga = beratCucian * hargaReguler;
  console.log(`Jenis Layanan: ${jenisLayanan} total harga: ${totalHarga}`);
} else if (jenisLayanan == "express") {
  totalHarga = beratCucian * hargaExpress;
  console.log(`Jenis Layanan: ${jenisLayanan} total harga: ${totalHarga}`);
} else {
  console.log("Dancok ii sido laundry ra su");
}

// 9. Ongkos antar 8000,
// tapi gratis kalau total belanja sudah di atas 100 ribu.
// Diskon 10 persen berlaku untuk cucian di atas 8 kg,
// dan diskon itu hanya dihitung dari harga cucian,
// tidak termasuk ongkos antar.
// Hitung total akhir untuk pelanggan yang nyuci 10 kg layanan reguler dengan antar.
//  Urutan hitungnya harus benar.
