var controle_de_imagem = 2

var audio = document.createElement('audio')

function mudar_imagem() {

    var comando = document.body.querySelector("h1#texto")

    var imagem = document.body.querySelector("img#img")

    if (controle_de_imagem == 1) {

        comando.innerHTML = "Toque na imagem"

        imagem.src = "img/face-01.jpg"

        controle_de_imagem = 2

    } else if (controle_de_imagem == 2) {

        imagem.src = "img/face-02.png"

        controle_de_imagem = 3

        comando.innerHTML = "Toque novamente"

    } else if (controle_de_imagem == 3) {

        comando.innerHTML = "Niaaaaaa"

        imagem.src = "img/face-03.jpg"

        controle_de_imagem = 1

        audio.setAttribute('src', 'audio_anime.mp3')

        audio.setAttribute('autoplay', 'true')
    }

}