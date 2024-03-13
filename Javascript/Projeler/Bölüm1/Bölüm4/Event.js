const ekle = document.querySelector('button');
ekle.addEventListener('click', () => {
    console.log('Eklendi!');
});

const secildi = document.querySelectorAll('li');

// secildi.forEach(eleman => {
//     eleman.addEventListener('click', e => {
//         console.log(e);
//         console.log('Seçildi!');
//         e.target.style.color = 'red';});
// })
secildi.forEach(eleman => {
    eleman.addEventListener('click', (e) => {
      e.target.remove();
    });
  });

const ul = document.querySelector('ul');
ul.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    e.target.remove();
  }
});


ekle.addEventListener('click', () => { 
    const li = document.createElement('li');
    li.textContent = 'Node.js';
    ul.append(li);})