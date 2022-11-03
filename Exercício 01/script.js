let numberOne = Number(prompt("Digite o primeiro número"))
let numberTwo = Number(prompt("Digite o segundo número"))

const sum = numberOne + numberTwo
const sub = numberOne - numberTwo
const mult = numberOne * numberTwo
const div = numberOne / numberTwo
const rest = numberOne % numberTwo

alert("A soma dos números é " + sum)
alert("A subtração dos números é " + sub)
alert("A multiplicação dos números é " + mult)
alert("A divisão dos números é " + div.toFixed(2))
alert("O resto da divisão dos números é " + rest.toFixed(2))

if (sum % 2 == 0) {
    alert("A soma dos números é par")
} else {
    alert("A soma dos números é ímpar")
}

if (numberOne == numberTwo) {
    alert("Os números informados são iguais")
} else {
    alert("Os números informados são diferentes")
}
