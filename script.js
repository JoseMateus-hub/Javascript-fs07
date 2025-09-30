
// const temperatura = Number(prompt("Temperatura local atual"))

//  if(age >= 65){
//        alert("Você está na melhor idade")
//     } else if(age >= 18){
//        alert("Você é maior de idade")
//     } else if(age === 17){
//        alert("Você está banido.")
//     }
//  else {
//     alert("Você é menor de idade")
// }

// if(temperatura > 35){
//        alert("Calor extremo")
//     } else if(temperatura >= 25){
//        alert("Clima quente")
//     } else if(temperatura >= 15){
//        alert("Clima agradável")
//     } else if(temperatura >= 5){
//        alert("Clima frio")
//     } else {
//     alert("Frio intenso")
// }

// const color = "red";

// switch(color){
//   case "green":
//     alert("Go!");
//     break;
//     case "yellow":
//     alert("Atention!");
//     break;
//     case "red":
//     alert("Stop!");
//     break;
//     default:
//      alert("Invalid color");
// }
 
//  for(let i = 0; i <= 10; i++){
//     console.log(i);
//  }

//  let i = 0;

//  while(i <= 10){
//     if(i % 2 === 0){
//     console.log(i);
// };
// i++
// }

// const palavra = prompt("Digite uma palavra")

// for(let i  = 1; i <= 5; i++){
//     console.log(palavra);
// }

// const numero1 = Number(prompt("Digite dois numeros"))
// const numero2 = Number(prompt("Digite dois numeros"))

// if(numero1 > numero2){
//     alert(numero1, "é maior")
// } else{
//     alert(numero2, "é maior")
// }

// const numero = Number(prompt("Digite um numero"))

// if(numero > 0){
//     alert("Positivo")
// } else if(numero == 0){
//     alert("Neutro")
// } else{
//     alert("Negativo")
// }

// const letra = prompt("Digite uma letra")

// if(letra == "f" || letra == "F"){
//     alert("Feminino")
// }  else if(letra == "m" || letra == "M"){
//     alert("Masculino")
// } else {
//     alert("erro")
// }

// const lista = [0, 1, 2, 3, 4, 5]

// console.log(lista)

// const lista = [
//     [1, 2, 3],
//     ["Alex", "Levi", "Mateus"],
//     [true, false]
// ]

// console.log(lista[1][1]); ARRAY é UMA LISTA

//  const pessoa = {
//     nome: "Alex",
//     idade: 29,
//     altura: 1,75
// }


// const carro = {
//     marca: "Fiat",
//     modelo: "Uno",
//     ano: 1997
// }

// console.log(carro.ano);

// const lista = [
//     ["Uva", "Maçã"],

// [
//    {
//     nome: "Alex",
//     idade: 29
//    },
//    {
//      nome: "José",
//      idade: 46
//    },
//    {
//     nome: "Freitas",
//     idade: 56
//    }
// ],
// [0, 1, 2, 3]
// ];

// console.log(lista[1][2].nome);

const nomes = ["Alex", "Levi", "Hebston", "Paulo", "Yasmim", "Marcos", "Wesley", "Mateus"];

for(let index = 0; index < nomes.length; index++){
    if(nomes[index] === "Hebston"){
      console.log(nomes[index] + " é Mala!");
    }
} 

for(let index = 0; index < nomes.length; index++){
    console.log(nomes[index]);
}