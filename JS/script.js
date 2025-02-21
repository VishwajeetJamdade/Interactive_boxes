function selectOption(option) {
    document.getElementById('unit1').checked = option === 1;
    document.getElementById('unit2').checked = option === 2;
    document.getElementById('unit3').checked = option === 3;

    let activeBox = document.getElementsByClassName("box");

    for (let i = 0; i < activeBox.length; i++) {
        activeBox[i].classList.remove("active");
        let rowDiv = activeBox[i].querySelector(".row"); 
        if (rowDiv) rowDiv.style.display = "none"; // Hide row for all
    }

    if (option >= 1 && option <= 3) {
        activeBox[option - 1].classList.add("active");
        let selectedRow = activeBox[option - 1].querySelector(".row");
        if (selectedRow) selectedRow.style.display = "flex";
    }

    let totalPrice = document.getElementById('totalPrice');

    if (option === 1) {
        totalPrice.innerHTML = "₹10.00 INR";
    } else if (option === 2) {
        totalPrice.innerHTML = "₹18.00 INR";
    } else if (option === 3) {
        totalPrice.innerHTML = "₹24.00 INR";
    }
}
document.addEventListener("DOMContentLoaded", function () {
    selectOption(2);
});