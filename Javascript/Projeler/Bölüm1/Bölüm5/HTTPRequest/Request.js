const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
    if(request.readyState ===4 && request.status ===200){
        console.log(request.responseText);
    }
    else if(request.readyState ===4){
        console.log("Cevap Bulunamadı");
    }
});

request.open('GET','https://jsonplaceholder.typicode.com/todos');
request.send();