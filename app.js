const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
    e.preventDefault();
    
    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    // check answers 
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score += 25;
        }
    });

    // SHOW RESULT ON PAGE

    scrollTo(0,0);

    result.querySelector('span').textContent = `${score}%`;
    result.classList.remove('d-none');


    // ADDING ANIMATION
    let output = 0;

    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        if(output === score){
            clearInterval(timer);
        } else {
            output++;
        }
    }, 10);

});

// setTimeout() function is used when we wan to do only one thing once

// setInterval() function when we want something to repeat itself and it requires else statement in order to set parameters for stopping it

