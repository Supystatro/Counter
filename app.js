let count = 0;

const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')

btns.forEach(function(btn) {
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList
        if(styles.contains('decrease')){
            count--;
        }
        else if(styles.contains('increase')){
            count++;
        }
        else if(styles.contains('reset')){
            count = 0;
        }
        else if(styles.contains('increase10')){
            count = count + 10;
        }
        else if(styles.contains('increase100')){
            count = count + 100;
        }
        else if(styles.contains('increase1000')){
            count = count + 1000;
        }
        if(styles.contains('increase10000')){
            count = count + 10000;
        }
        if(styles.contains('increase100000')){
            count = count + 100000;
        }
        if(styles.contains('increase1000000')){
            count = count + 1000000;
        }
        if(styles.contains('increase10000000')){
            count = count + 10000000;
        }
        if(styles.contains('increase100000000')){
            count = count + 100000000;
        }
        if(styles.contains('decrease10')){
            count = count - 10;
        }
        if(styles.contains('decrease100')){
            count = count - 100;
        }
        if(styles.contains('decrease1000')){
            count = count - 1000;
        }
        if(styles.contains('decrease10000')){
            count = count - 10000;
        }
        if(styles.contains('decrease100000')){
            count = count - 100000;
        }
        if(styles.contains('decrease1000000')){
            count = count - 1000000;
        }
        if(styles.contains('decrease10000000')){
            count = count - 10000000;
        }
        if(styles.contains('decrease100000000')){
            count = count - 100000000;
        }
        if (count > 0) {
            value.style.color = "green";
        }
        else if (count < 0) {
            value.style.color = "red";
        }
        else {
            value.style.color = "var(--clr-white)";
        }
        value.textContent = count;
    });})