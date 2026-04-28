const menu = 20;

switch(menu){
    case 1:
        console.log("Exercício 1 selecionado. executando...\n");
        ex1 (); //Verificar se número é positivo
        break;

    case 2: 
    console.log("Exercicio 2 selecionado. Executando...\n");
    ex2(); //Número par ou ímpar
    break;

     case 3: 
    console.log("Exercicio 3 selecionado. Executando...\n");
    ex3(); //Boas-vindas por turno
    break;

     case 4: 
    console.log("Exercicio 4 selecionado. Executando...\n");
    ex4(); //Maior de dois números
    break;

      case 5: 
    console.log("Exercicio 5 selecionado. Executando...\n");
    ex5(); //Uso do operador ternário
    break;

    case 6: 
    console.log("Exercicio 6 selecionado. Executando...\n");
    ex6(); //Menu simples com switch
    break;

    case 7: 
    console.log("Exercicio 7 selecionado. Executando...\n");
    ex7(); //Contador de 1 a 5 com while
    break;

     case 8: 
    console.log("Exercicio 8 selecionado. Executando...\n");
    ex8(); //Contagem regressiva com do...while
    break;

     case 9: 
    console.log("Exercicio 9 selecionado. Executando...\n");
    ex9(); //Imprimir de 1 a 10 com for
    break;

    case 10: 
    console.log("Exercicio 10 selecionado. Executando...\n");
    ex10(); //Somar números de 1 a 10
    break;

    case 11: 
    console.log("Exercicio 11 selecionado. Executando...\n");
    ex11(); //Imprimir elementos de um array com for
    break;

    case 12:
    console.log("Exercicio 12 selecionado. Executando...\n");
    ex12(); //Usar for...of com array
    break;

     case 13:
    console.log("Exercicio 13 selecionado. Executando...\n");
    ex13(); //Usar for...in com objeto
    break;

     case 14:
    console.log("Exercicio 14 selecionado. Executando...\n");
    ex14(); //Parar contagem com break
    break;

     case 15:
    console.log("Exercicio 15 selecionado. Executando...\n");
    ex15(); //Pular número com continue
    break;

     case 16:
    console.log("Exercicio 16 selecionado. Executando...\n");
    ex16(); 
    break;

    case 17:
    console.log("Exercicio 17 selecionado. Executando...\n");
    ex17(); 
    break;

    case 18:
    console.log("Exercicio 18 selecionado. Executando...\n");
    ex18(); 
    break;

    case 19:
    console.log("Exercicio 19 selecionado. Executando...\n");
    ex19(); 
    break;
    
    case 20:
    console.log("Exercicio 20 selecionado. Executando...\n");
    ex20(); 
    break;

    
}





function ex1(){
   const numero = -2;
   
   const positivo = numero > 0
   ? "Positivo"
   : "Negativo";

   console.log(positivo);
}

function ex2(){
  const numero = 2;
  
  const par = numero % 2 == 0
  ? "Par"
  : "ímpar";

  console.log(par);
}

function ex3(){
    const turno = "M" ;

      if (turno === "M") {
        console.log("Bom dia");
    } else if (turno === "T") {
        console.log("Boa tarde");
    } else if (turno === "N") {
        console.log("Boa noite");
    } else {
        console.log("Turno inválido");
    }
}

function ex4(){
    const n1 = 20;
    const n2 = 10;

    if(n1 > n2){
        console.log(n1)
    }else{
        console.log(n2);
    }
}

function ex5(){
  const numero = 2;
   
   const positivo = numero > 0
   ? "Positivo"
   : "Negativo";

   console.log(positivo);
}

function ex6(){
const opcoes = 2;

 switch(opcoes){
    case 1: 
    console.log("Início"); break;
    case 2: 
    console.log("Sobre"); break;
    case 3:
    console.log("Sair"); break;
 }

}

 function ex7(){
    let i = 1;
    while (i <= 5) {
        console.log(i);
        i++
 }

}

function ex8(){
    let i = 5;
    do {
        console.log(i);
        i--
 }while (i >= 1) 

}

function ex9(){
    for (let i = 1; i<= 10; i++){
        console.log(i);
    }

}

function ex10(){
    let soma = 0;
    for(let i = 1; i <= 10; i++){
        soma+= i;
    }
    console.log(soma);
}

function ex11(){
 const array = ["sol", "lua", "estrela"];

 for(let i = 0; i < array.length; i++){
    console.log(array[i]);
 }
}

function ex12(){
    const frutas = ["Morango", "Melancia", "Kiwi"];
    for (let fruit of frutas){
        console.log(`fruta: ${fruit}`);
    }
}

function ex13(){
     const usuario = {
        nome: "Isabella", 
        idade: 16,
        curso: "Desenvolvimento de Sistemas"
    };

    for (let chave in usuario){
        console.log(`${chave}: ${usuario[chave]}`);
    }
}

function ex14(){
    for(let i = 1; i<= 10; i++){
        if(i === 6) break;
        console.log(i);
    }
}

function ex15(){
      for(let i = 1; i<= 10; i++){
        if(i === 7) continue;
        console.log(i);
    }
}

//EXERCÍCIOS MÉDIOS
function ex16(){
    const nota = 8;

    if(nota < 6 ) 
        console.log("Reprovado");
    else if(nota < 8)
        console.log("Recuperação");
    else
        console.log("Aprovado");
}

function ex17(){
    const numero = 2;

    for(let i = 1; i<= 10; i++){
        console.log(`${numero} x ${i} = ${numero * i }`);
    }
}

function ex18(){
    const arr = [1, "a", 2, true, 3, 4, 5];
    let count = 0;

    for (let v of arr) {
        if (typeof v === "number") count++;
    }

    console.log(count);
}



//EXERCÍCIOS DIFÍCEIS
function ex19(){
    const palavra = "socos";

    const reversa = palavra.split("").reverse().join("");

    if (palavra === reversa) {
        console.log("Palíndromo");
    } else {
        console.log("Não é palíndromo");
    }
}

function ex20(){
    let opc = 2;

    while (opc !== 3) {
        switch (opc) {
            case 1:
                console.log("Opção 1");
                break;
            case 2:
                console.log("Opção 2");
                break;
            case 3:
                console.log("Sair");
                break;
        }
    }

    console.log("Menu encerrado");
}