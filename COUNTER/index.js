let count = 0;
let btns = document.querySelectorAll('.btn');
let value = document.querySelector('#value');
let header = document.querySelector('h1');

header.style.color = '#37ba34';

btns.forEach( function(btn){
    btn.addEventListener('click', (e) => {
        // console.log(e.currentTarget.classList);
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease')){
            count--;
        }
        else if (styles.contains('increase')){
            count++;
        }
        else {
            count = 0;
        }
        if  (count > 0){
            value.style.color = 'lightgreen';
        }
        if  (count < 0){
            value.style.color = 'red';
        }
        if  (count === 0){
            value.style.color = 'skyblue';
        }
        value.textContent = count;
    })
});
