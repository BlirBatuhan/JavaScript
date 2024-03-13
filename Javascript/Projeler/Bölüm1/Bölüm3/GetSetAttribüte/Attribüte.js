const link = document.querySelector('a');
console.log(link.getAttribute('href'));
link.setAttribute('href','http://www.boztraining.com');
link.textContent = "Boz training";

const deneme = document.querySelector('p');
deneme.setAttribute('style','color: #663399 ;');
