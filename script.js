function carregar(){
    var texto = document.getElementById('hora')
    var img = document.getElementById('imagem')
    var momento = new Date()
    var time = momento.getHours()
    var minutos = new Date()
    var min = minutos.getMinutes()
    texto.innerText = `Agora são ${time} horas e ${min} minutos`

    if(time == 0){
        img.src = 'imagens/noite.jpg'
        texto.innerText = `Agora é meia noite e ${min} minutos`
        document.body.style.background = '#515154'
        //MEIA NOITE
    }

    else if(time == 1){
        img.src = 'imagens/noite.jpg'
        texto.innerText = `Agora é uma hora da madrugada e ${min} minutos`
        document.body.style.background = '#515154'
        //UMA HORA
    }

    else if(time>1 && time<=5){
        img.src = 'imagens/noite.jpg'
        texto.innerText = `Agora são ${time} horas da madrugada e ${min} minutos`
        document.body.style.background = '#515154'
        //DEMAIS HORAS MADRUGADA
    }

    else if(time == 12){
        img.src = 'imagens/dia.jpg'
        texto.innerText = `Agora é meio dia e ${min} minutos`
        document.body.style.background = '#e2cd9f'
        //MEIO DIA
    }

    else if (time>5 && time<=11){
        img.src = 'imagens/dia.jpg'
        texto.innerText = `Agora são ${time} horas da manhã e ${min} minutos`
        document.body.style.background = '#e2cd9f'
        //qualquer horário de dia
    }

    else if(time>=13 && time<=18){
        img.src = 'imagens/tarde.jpg'
        texto.innerText = `Agora são ${time} horas e ${min} minutos`
        document.body.style.background = '#b9846f'
        //qualquer horário de tarde
    }

    else{
        img.src = 'imagens/noite.jpg'
        texto.innerText = `Agora são ${time} horas da noite e ${min} minutos`
        document.body.style.background = '#515154'
        //qualquer horário da noite
    }
}