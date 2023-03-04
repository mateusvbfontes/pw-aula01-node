import PromptSync from "prompt-sync"

const prompt  = PromptSync()

// Exemplo 
// const nome = prompt("Qual o seu nome? ")
// console.log(`Olá, ${nome}! `)

// const temp = Number(prompt("Digite a temperatura: "))
// if(temp > 38)
// {
//     console.log("Febre")
// } 
// else if (temp < 26)
// {
//     console.log("F")
// }
// else{
//     console.log("Tudo ok")
// }

// Ex1
// let salario = Number(prompt("Qual o seu salário?"))

// const porcentagem = Number(prompt("Digite a porcentagem de aumento: "))

// salario = salario + (salario * porcentagem / 100)

// console.log(`O salário com aumente é: ${salario}`)

//Ex2

const nascimento = prompt("Digite o ano de nascimento ")

const ano = new Date().getFullYear()

if(ano - nascimento >= 18)
    console.log("Já pode tirar sua CNH")
else
    console.log("Não pode tirar sua CNH")




