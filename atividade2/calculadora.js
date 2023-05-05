import PromptSync from "prompt-sync";

// const print = console.log
const prompt = PromptSync()

const qtde = prompt("Quantas números farão parte da conta? ")
const op = prompt("Qual operação será usada? (+ - / *) ")
let num = 1
switch(op) {
    case '+':
        num=num-1
        for(let i=1; i<=qtde; i++){
            let valor = prompt(`Digite o valor do ${i}º número: `)
            num = num+Number(valor)
        }
        console.log(`O resultado da conta é ${num}`)
        break;
    case '-':
        let valor = prompt(`Digite o valor do 1º número: `)
        num=Number(valor)
        for(let i=2; i<=qtde; i++){
            let valor = prompt(`Digite o valor do ${i}º número: `)
            num-=Number(valor)
        }
        console.log(`O resultado da conta é ${num}`)
        break;
    case '/':
        let valor2 = prompt(`Digite o valor do 1º número: `)
        num=Number(valor2)
        for(let i=2; i<=qtde; i++){
            let valor2 = prompt(`Digite o valor do ${i}º número: `)
            num = num/Number(valor2)
        }
        console.log(`O resultado da conta é ${num}`)
        break;
    case '*':
        for(let i=1; i<=qtde; i++){
            let valor = prompt(`Digite o valor do ${i}º número: `)
            num = num*Number(valor)
        }
        console.log(`O resultado da conta é ${num}`)
        break;
        default:
            console.log(`Opção invalida`);
    }

