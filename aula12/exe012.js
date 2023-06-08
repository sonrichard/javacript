var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são ${hora} horas`)

var dia = agora.getDay()

switch(dia) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sextra')
        break
    case 6:
        console.log('Sabado')
        break
    default:
        console.log('[ERRO] Data invalida')
        break
}