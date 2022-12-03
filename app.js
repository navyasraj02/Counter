let count = 0;

const value = document.querySelector('.value');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains('increase')) {
            count++;
        }
        else if (styles.contains('decrease')) {
            count--;
        }
        else {
            count = 0;
        }
        valueColor();
        value.textContent = count;
    })
})

function valueColor() {
    if (count > 0) {
        value.style.color = '#A62349';
    }
    else if (count == 0) {
        value.style.color = '#EDEDED';
    }
    else {
        value.style.color = '#0E5E6F';
    }
}