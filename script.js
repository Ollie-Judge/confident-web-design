const showCode = (parentElement) => {
  let parentElementDiv = document.getElementById(parentElement);
  let exampleElement = document.querySelector("#" + parentElement + ".example");

  if (parentElementDiv.className === "section open") {
    let codeBlock = exampleElement.querySelector(".example-code");
    exampleElement.removeChild(codeBlock);
    document.querySelector("#" + parentElement + ".code-show-button").value =
      "Show code";
    parentElementDiv.classList.remove("open");
  } else {
    let text = exampleElement.innerHTML;
    let code = document.createTextNode(text);
    let codeElement = document.createElement("div");
    codeElement.appendChild(code);
    codeElement.className = "exampleCode";
    exampleElement.appendChild(codeElement);
    document.querySelector("#" + parentElement + ".example");
  }
};
