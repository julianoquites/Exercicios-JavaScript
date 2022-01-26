let num = [5, 8, 2, 9, 3]
num.push(7)
num.sort()
console.log(`Nosso vetor é o ${num}. Ele tem ${num.length} posições. O valor da primeira posição é ${num[0]}.`)
let pos = num.indexOf(8)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}