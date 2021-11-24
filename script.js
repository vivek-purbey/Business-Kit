document.getElementById('month').style.display = "flex";
document.getElementById('year').style.display = "none";

const swap_month = () => {
    document.getElementById('month').style.display = "flex";
    document.getElementById('year').style.display = "none";
};
const swap_year = () => {
    document.getElementById('month').style.display = "none";
    document.getElementById('year').style.display = "flex";
}
document.getElementById('bmonth').addEventListener('click', swap_month);
document.getElementById('byear').addEventListener('click', swap_year);