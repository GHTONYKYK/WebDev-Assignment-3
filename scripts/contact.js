// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

let submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  let mainElement = document.querySelector("main");
  mainElement.innerHTML =
    "<h2 style='margin-bottom: 27rem; font-size: 1.25rem;'>Thank you for your message!</h2>";
});
