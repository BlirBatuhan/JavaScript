// const hatalar = document.querySelectorAll('p');
// console.log(hatalar);

// hatalar.forEach(hata => {console.log(hata);})
//----------------------------------------------------------------
// const pEtiketi = document.querySelector('p');
// pEtiketi.innerText = "Batuhan Game Developer";
// console.log(pEtiketi.innerText);
//----------------------------------------------------------------
// const pEtiketleri = document.querySelectorAll('p');
// pEtiketleri.forEach(a => {console.log(a.innerText);});

const içerik = document.querySelector('.İçerik');
console.log(içerik.innerHTML);  
// içerik.innerHTML = "<h2>Node.js</h2>"
içerik.innerHTML += "<h2>Node.js</h2>"
const öğrenciler = ["ali","ayşe","leyla"];
öğrenciler.forEach(öğrenci => {
    içerik.innerHTML += `<p>${öğrenci}</p> `
})