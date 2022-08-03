// const boul1 = false
// const boul2 = true
// const boul3 = true

// // if (boul1) {
// //   alert('Entrei no if')
// // } else {
// //   alert('entrei no else')
// // }

// // if (boul2) {
// //   alert('Entrei no if')
// // } else {
// //   alert('entrei no else')
// // }

// if (boul1 === boul2) {
//   alert('1 é igual a 2')
// } else if (boul2 === boul3) {
//   alert('2 é igual a 3')
// } else if (boul3 === boul1) {
//   alert('1 é igual a 3')
// } else {
//   alert('Nenhuma condição é atendida')
// }

// const idade = 28
// if (idade >= 18 && idade < 65) {
//   alert('A pessoa pode tirar o título')
// } else if (idade >= 65 || (idade >= 16 && idade < 18)) {
//   alert('Voto Facultatito')
// } else {
//   alert('Não pode votar')
// }

const media = Number(prompt('Digite uma nota entre 0 a 10'))

if (media >= 5) {
  alert('O aluno foi aprovado')
} else if (media >= 3 && media < 5) {
  alert('O aluno está em recuperação')
} else if (media < 3) {
  alert('O aluno foi reprovado')
} else {
  alert('Dado Inválido')
}
