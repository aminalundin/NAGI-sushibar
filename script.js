function displayMenu() {
    const menu = document.querySelector(".mobile-menu");

    menu.classList.toggle("active");
}

const today = new Date().toISOString().split("T")[0];
document.getElementById("date").setAttribute("min", today);

const timeSelect = document.getElementById("time");
for (let hour = 17; hour <= 23; hour++) {
    const option = document.createElement("option");
    option.value = `${hour}:00`;
    option.textContent = `${hour}:00`;
    timeSelect.appendChild(option);
}

document.getElementById("book").addEventListener("click", function () {
    const selectedDate = document.getElementById("date").value;
    const selectedTime = timeSelect.value;
    const selectedPeople = document.getElementById("people").value;

    if (!selectedDate) {
        alert("Please select a date.");
        return;
    }

    alert(`Booking confirmed for ${selectedDate} at ${selectedTime} for ${selectedPeople} people!`);
});