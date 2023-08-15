function handleForm(event) {
  event.preventDefault();
  // query all checked form values
  const userSelections = document.querySelectorAll("input[name=g-item]:checked");
  // create array from userSelections result
  const userSelectionsArray = Array.from(userSelections);
  // append results to the webpage
  const resultsHeading = document.createElement("h2");
  resultsHeading.append("You need the following items");
  document.body.append(resultsHeading);

  userSelectionsArray.forEach(function(element) {
    const paragraph = document.createElement("p");
    paragraph.append(element.value);
    document.body.append(paragraph);
  });
}


window.addEventListener("load", function () {
  this.document.querySelector("form#g-list").addEventListener("submit", handleForm);
});