let conta = 0
let pessoas = 0
let porcentagem = 0

const contaInput = document.querySelector("#conta")
contaInput.addEventListener ("input", )

function receberValorConta (evento) {
   conta = Number(evento.target.value)
   calcular()
}

const pessoasInput = document.querySelector("#pessoas")
pessoasInput.addEventListener ("input", )

function receberQuantidadePessoas (evento) {
   const paragrafoErro = document.querySelector(".pessoas #erro")
   const divErro = document.querySelector(".pessoas .input-box")

   if(evento.target.value == "0") {
    paragrafoErro.styles.display = "block"
    divErro.setAttribute("id", "erro-div")
   } else {
    paragrafoErro.styles.display = "none"
    divErro.setAttribute("id", "")
    pessoas = Number (evento.target.value)
   }
   calcular()
}

const botoesGorjeta = document.querySelectorAll(".gorjeta input[type = 'button']")
botoesGorjeta.forEach(botao => {
    botao.addEventListener("click", receberPorcentagemBotao)
})

function receberPorcentagemBotao (evento) {
    botoesGorjeta.forEach(botao => {
        botao.classList.remove("botao-ativo")

        if(botao.value === evento.target.value) {
            botao.classList.add("botao-ativo")
        }
    })

    if(evento.target.value !== "") {
        porcentagem = parseFloat(evento.target.value) / 100
    } else {
        porcentagem = 0
    }

   calcular()
}

const gorjetaInput = document.querySelector("#outra")
gorjetaInput.addEventListener("input", receberPorcentagemBotao)

function calcular() {
    if(conta !== 0 && porcentagem !== 0 && pessoas !== 0) {
        const strongGorjetaTotal = document.querySelector (".gorjeta-total > strong")
        strongGorjetaTotal.innerHTML = `R$ ${(conta * gorjeta / pessoas).toFixed(2)}`

        const strongTotal = document.querySelector(".total > strong")
        strongTotal.innerHTML = (conta + (conta * porcentagem)) / pessoas
    }
}