const atualizadorDoContadorRegressivo = (tempo) => {
    let segundosRestante = tempo;

    const interval = setInterval(() => {
        console.log (segundosRestante)
        if (segundosRestante === 0){
            clearInterval(interval);
        }else{
            segundosRestante--;
        }
    },1000);
    }

    const iniciarContador = (tempo) => atualizadorDoContadorRegressivo(tempo)

// Iniciando o contador regressivo com o tempo de 5 segundos

iniciarContador(5)