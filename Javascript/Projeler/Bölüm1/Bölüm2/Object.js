let Öğrenci = {
    Ad : "Batuhan Bilir",
    Yaş : 21,
    Email : "bth.01srp@gmail.com",
    Sinif: 2,
    Dersler : [{isim: "Olasılık",puan :90},
            {isim: "Veri Yapıları",puan :70},
            {isim: "Differansiyel Denklemler",puan :75}],
    Logİn(){
        console.log("Öğrenci Giriş Yaptı");
    },
    LogOut(){
        console.log("Öğrenci Çıkış Yaptı");},
    printLesson(){
        this.Dersler.forEach(ders => {console.log(ders.isim,ders.puan);});
    }
};
// console.log(Öğrenci.Ad);
// console.log(Öğrenci.Logİn());

//Objdeki metodu kullanarak dersleri gosterme
console.log(Öğrenci.printLesson());
