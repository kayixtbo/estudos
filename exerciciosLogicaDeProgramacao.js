// Tema 1 – Conceitos Básicos

var nome = "Kay"
console.log(nome)

let numero = 589
let dobro = numero*2
console.log(dobro)

let primeiroNumero = 568
let segundoNumero = 96
let soma = primeiroNumero + segundoNumero
console.log(soma)

let primeiro = 80
let antecessor = primeiro - 1
let sucessor = primeiro + 1
console.log(`o antecessor de ${primeiro} é ${antecessor} e o sucessor é ${sucessor}`)


let valor = 0
if (valor < 0) {
    console.log("número é negativo")
} 
else if(valor == 0){
    console.log("número neutro")
}
else{
    console.log("número positivo")
}

// Tema 2 – Variáveis e Tipos de Dados

let idade = 18
console.log(idade)

let numero1 = 0.5
let numero2 = 5.7
let media = (numero1 + numero2) / 2
console.log(media)


let anos = 25
let name = "julio"
let frase = `seu nome é ${name} e sua idade é ${anos}`
console.log(frase)

let valores = 89
let quadrado = valores*valores
console.log(quadrado)

let numeros = 569
if (numeros % 2 == 0) {
    console.log("o numero é par")
}
else{
    console.log("o numero é impar")
}

// Tema 3 – Operadores Aritméticos

let first = 40
let second = 6
console.log(first + second)
console.log(first - second)
console.log(first * second)
console.log(first / second)

let nu = 90
console.log( nu % 2)

let base = 87
let altura = 45
console.log( base * altura)

let salario = 2000
let aumento = 10 / 100 * salario
console.log(salario + aumento)

let um = 60
let dois = 15
let tres = 47
let m = (um + dois + tres) / 3
console.log(m)

// Tema 4 – Estruturas Condicionais (IF / ELSE)

let vari = 55
if (vari > 10) {
    console.log("é maior que 10")
}
else{
    console.log("é menor que 10")
}

let age = 15
if (age >= 18) {
    console.log("é maior de idade")
}
else{
    console.log("é menor de idade")
}

let nota1 = 4.3
let nota2 = 8.3
media = (nota1 + nota2) / 2
if (media >= 7) {
    console.log("aluno aprovado")
}
else{
console.log("aluno reprovado")
}

let number1 = -45 
if (number1 > 0) {
    console.log("numero é positivo")
}
else if (number1 == 0) {
    console.log("numero zero")
} else {
    console.log("numero negativo")
}

let num1 = 5
let num2 = 14
if (num1 > num2) {
    console.log(`${num1} é maior que ${num2}`)
}
else if (num1 == num2) {
    console.log("os numeros são iguais")
} else {
    console.log(`${num2} é maior que ${num1}`)
}

// Tema 5 – Condições Compostas e Aninhadas

let numb1 = 41
let numb2 = 23
let numb3 = 4
if (numb1 > numb2 && numb1 > numb3) {
    console.log(`o ${numb1} é maior que ${numb2} e ${numb3}`)
}
else if (numb2 > numb1 && numb2 > numb3) {
    console.log(`o ${numb2} é maior que ${numb1} e ${numb3}`)
    
} else {
    console.log(`o ${numb3} é maior que ${numb1} e ${numb2}`)
    
}

let ydade = 5
if (ydade >= 18) {
     console.log("adulto")
}
else if (ydade >= 12) {
    console.log("adolescente")
} else {
    console.log("criança")
}

let nota = 10
if (nota >= 9) {
    console.log("nota A")
}
else if (nota >= 7) {
    console.log("nota B")
}
else if (nota >= 5) {
    console.log("nota C")
}
else{
    console.log("nota D")
}