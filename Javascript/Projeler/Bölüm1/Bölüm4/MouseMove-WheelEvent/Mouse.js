const kutu = document.querySelector('.kutu');
kutu.addEventListener('mousemove', e => { 
    // console.log(e);
    kutu.textContent = `X'in koordinatı ${e.offsetX},Y'nin koordinatı ${e.offsetY}`;
})