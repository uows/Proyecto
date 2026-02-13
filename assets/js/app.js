function showScreen(screenId) {
    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });
    document.getElementById(screenId).classList.add("active");
}

document.getElementById("appointmentForm")
.addEventListener("submit", function(e){
    e.preventDefault();
    document.getElementById("modal").style.display = "flex";
    this.reset();
});


document.getElementById("closeModalBtn")
.addEventListener("click", closeModal);

function closeModal(){
    document.getElementById("modal").style.display = "none";
}
