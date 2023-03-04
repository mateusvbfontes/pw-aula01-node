import PromptSync from "prompt-sync"
import chalk from "chalk"

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

// const nascimento = prompt("Digite o ano de nascimento ")

// const ano = new Date().getFullYear()

// if(ano - nascimento >= 18)
//     console.log(chalk.red("Já pode tirar sua CNH"))
// else
//     console.log("Não pode tirar sua CNH")

const first = Number(prompt(chalk.red("Digite o primeiro valor: ")))

const second = Number(prompt(chalk.red("Digite o segundo valor: ")))

const third = Number(prompt(chalk.red("Digite o terceiro valor: ")))

const fourth = Number(prompt(chalk.red("Digite o quarto valor: ")))

const fifth = Number(prompt(chalk.red("Digite o quinto valor: ")))

console.log(chalk.bgCyanBright.black("Calculando a média..."))

const media = (first + second + third + fourth + fifth) / 5

console.log(chalk.blue(`Média dos valores: ${media}`))



