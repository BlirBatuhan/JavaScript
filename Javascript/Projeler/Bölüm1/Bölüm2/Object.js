let Öğrenci = {
    Ad : "Batuhan Bilir",
    Yaş : 21,
    Email : "bth.01srp@gmail.com",
    Sinif: 2,
    Dersler : ["Olasilik", "Differansiyel Denklemler", "Veri Yapıları"],
    Logİn(){
        console.log("Öğrenci Giriş Yaptı");
    },
    LogOut(){
        console.log("Öğrenci Çıkış Yaptı");
}};

console.log(Öğrenci.Ad);
console.log(Öğrenci.Logİn());

//Objdeki metodu kullanarak dersleri gosterme
