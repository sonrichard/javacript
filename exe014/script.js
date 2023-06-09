function verrificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] por favor preencha os dados corretamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        if (fsex[0].checked) {
            var genero = 'Homem'
        } else if (fsex[1].checked) {
            var genero = 'Mulher'
        }
        res.innerHTML = `Detectamos ${genero} com ${idade}`
    }
}