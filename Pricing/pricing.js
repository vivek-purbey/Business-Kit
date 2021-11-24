let check = document.getElementById('check');
let month = document.getElementById('month');
let year = document.getElementById('year');
const month_year = () => {
    if (check.checked == false) {
        month.style.display = 'flex';
        year.style.display = 'none';
    }
    else if (check.checked == true) {
        month.style.display = 'none';
        year.style.display = 'flex';
    }
}
check.addEventListener('click', month_year);