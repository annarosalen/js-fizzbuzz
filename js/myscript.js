
var lista="";

// Scrivi un programma che stampi i numeri da 1 a 100,
for (var i=1; i<=100; i++){

    // ma per i multipli di 3 stampi “Fizz” al posto del numero
  if (i % 3 === 0 && i % 5 === 0){
    lista = lista + "<li>" + "FizzBuzz" + "</li>";
    console.log("FizzBuzz");

    // e per i multipli di 5 stampi “Buzz”.
  } else if (i % 5 === 0){
    lista = lista + "<li>" + "Buzz" + "</li>";
    console.log("Buzz");

    // Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”
  }else if (i % 3 === 0){
    lista = lista + "<li>" + "Fizz" + "</li>";
    console.log("Fizz");

  }else{
    lista=  lista + "<li>" + i + "</li>";
    console.log(i);
  }

}

document.getElementById('lista-numeri').innerHTML=lista;
