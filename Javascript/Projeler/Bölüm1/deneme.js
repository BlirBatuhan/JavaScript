const adSoyad = ["batu","hatice","beyza"];
let i = 0;

// for (let i = 0; i < adSoyad.length; i++) {
//     console.log(adSoyad[i]);}
  
//Do while
while (i < adSoyad.length)
{
    console.log(adSoyad[i]);
    i++;
}
do {
    console.log(i);
    i++;
}
while (i<5)
const yeniŞifre = "887";

//İf ve else kullanımı 
if (yeniŞifre.length >8)
{
    console.log("Yeni Şifreniz Güçlü");
}
else {
    console.log("Yeni şifreniz zayıf");
}

//Function
function isimGetir(){
    console.log("isminiz?");
}

isimGetir();

const isimSoyisimGetir = function(ad,soyad){
    console.log(`Adi ve Soyad ${ad} ${soyad}`);}

isimSoyisimGetir("Batuhan","Bilir"); 

//Arrow Function

function kareAlani(kenar){
    alan = kenar**2;
    return alan;
}

var sonuc = kareAlani(6);

console.log(sonuc);

//Arrow Functıon
const fatura = (ürün,vergi) => {
    let toplam = 0;
    for (let i = 0; i < ürün.length; i++) {
        toplam += ürün[i] + ürün[i] * vergi;}
        return toplam;
        }

var sonuc = fatura([30,40,70],0.25);
console.log(sonuc);
