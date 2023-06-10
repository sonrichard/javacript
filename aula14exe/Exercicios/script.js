
function carregar() {
    var data = new Date()
    var hora = data.getHours()
    var res = document.getElementById('msg')
    res.innerHTML = `São ${hora} horas`
    if (6 > hora > 12) {
        res.innerHTML += ' Bom dia'
    } else if (12 > hora < 18) {
        res.innerHTML += ' Boa tarde'
    }
}
