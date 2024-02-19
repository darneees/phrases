document.addEventListener('DOMContentLoaded', function() {
    const adviceElement = document.getElementById("advice");
    const changeAdviceBtn = document.getElementById("changeAdviceBtn");

    changeAdviceBtn.addEventListener('click', function() {
        adviceElement.classList.add('hidden');

        fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            const advice = data.slip.advice;
            setTimeout(() => {
                adviceElement.textContent = `" ${advice} "`;
                adviceElement.classList.remove('hidden');
            }, 250);
        })
        .catch(error => {
            console.error('Erro ao obter conselho', error);
            adviceElement.textContent = 'Houve um erro ao obter o conselho. Tente novamente mais tarde.';
        });
    });
});

// loader

setTimeout(function() {
    $('#code-loader').fadeToggle();
}, 2000);
