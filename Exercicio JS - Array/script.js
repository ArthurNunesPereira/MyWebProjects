let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

// Estamos informando nos parâmetros que essa função irá receber um "n" = número, e um "l" = lista
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) { // Se o "l.index" ou seja o número for diferente de -1 ou seja ele existe no Array, retornará true
        return true
    } else {
        return false
    }
}


function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value)) // Faz um push no Array adicionando o valor da variavel num
        let item = document.createElement('option')
        item.innerText = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert("Número inválido, ou ja encontrado na lista.")
    }
    num.value = ''
    num.focus()
}


function anaArray() {
    if (valores.length == 0) {
        window.alert("[ERROR] Por favor insira um valor!")
    } else {
        let tot = valores.length
        let max = Math.max.apply(null, valores)
        let min = Math.min.apply(null, valores)
        let soma = 0
        let media = 0
        for (let c = 0; c < valores.length; c++) {
            soma += valores[c]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>O Array possui ${tot} elementos. </p>`
        res.innerHTML += `<p>O maior valor do Array é: ${max}. </p>`
        res.innerHTML += `<p>O menor valor do Array é: ${min}. </p>`
        res.innerHTML += `<p>A soma dos valores do Array é: ${soma}. </p>`
        res.innerHTML += `<p>A média dos valores do Array é: ${media}. </p>`
    }
}