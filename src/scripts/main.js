document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('form-sorteador').addEventListener('submit', function(evento) {
        evento.preventDefault();
        let numeroMax = document.getElementById('numero-max').value;
        numeroMax = parseInt(numeroMax);

        let numeroAleatorio = Math.random() * numeroMax;
        numeroAleatorio = Math.floor(numeroAleatorio + 1); //o + 1 é poara nao dar numero 0 e o math.floor é para deixar numero inteiros

        document.getElementById('numero-sorteado').innerText = numeroAleatorio;
        document.querySelector('.resultado').style.display ='block'

    })
    
})