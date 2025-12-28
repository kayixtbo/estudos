
// exercicio 2 -> '==' compara apenas valores, '===' compara valor e tipo
console.log(1=="1") // retorna true, pois os valores de ambos são iguais
console.log(1==="1") // retorna false, pois os valores são iguais, mas os tipos são diferentes
console.log(typeof "ehqiwe" === "string") // retorna true, pois o tipo do valor é string

// exercicio 3
// let div3 = document.getElementById('exe3')
// let button = document.getElementById('bexe3')

// button.onclick = ()=>{
//     let p = document.createElement('p')
//     p.textContent = "Texto criado"
//     div3.appendChild(p)
// }

// exercicio 8
console.log(typeof 10)
console.log(typeof (10).toString())
console.log(typeof "10")
console.log(typeof Number("10"))

// exercicio 9
// let inner = document.getElementById('inner')
// let content = document.getElementById('content')
// let button9 = document.getElementById('bexe9')

// button9.onclick = ()=>{
//     content.textContent = "<h1>titulo criado</h1>"
//     inner.innerHTML = "<h1>titulo criado</h1>"
// }
const felinos = ['gatos', 'onças', 'guepardos', 'leões'];
const elimina = felinos.pop()
console.log(felinos);
felinos.push('leopardos');
console.log(felinos);
felinos.unshift('gato-maracaja');
console.log(felinos);
felinos.splice(1,0,'sussuarana');
console.log(felinos);






