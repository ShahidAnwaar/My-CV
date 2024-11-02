var myTitle = "hahid Anwaar";
var selectedTitleElement = document.getElementsByClassName("title")[0];

var i = 0;
function addingTitle() {
    if (i < myTitle.length) {
        selectedTitleElement.textContent += myTitle.charAt(i);
        i++;
    } else {
        selectedTitleElement.textContent = "S";
        i = 0;
    }
    setTimeout(addingTitle, 300);
}
addingTitle();


document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
    var myName = document.getElementsByName("firstName")[0].value + " " + document.getElementsByName("lastName")[0].value;

    document.getElementById("modalMessage").innerText = myName + ", your form has been submitted successfully!";
    document.getElementById("myModal").style.display = "flex";
})

function closeModal() {
    document.getElementById("myModal").style.display = "none";
    document.getElementById("contact-form").reset();
}
document.querySelector(".close").addEventListener("click", closeModal);

