document.addEventListener("DOMContentLoaded", (event) => {
    const inputContainer = document.getElementById("input-container");
    const addInputButton = document.getElementById("add-input");
    const getValuesButton = document.getElementById("get-values");
  
    addInputButton.addEventListener("click", addInputField);
    getValuesButton.addEventListener("click", getInputValues);
  
    function addInputField() {
      const newInput = document.createElement("input");
      newInput.type = "text";
      newInput.className =
        "dynamic-input w-100 border border-danger rounded shadow p-2 my-2";
      inputContainer.appendChild(newInput);
    }
  
    function getInputValues() {
      const inputFields = document.querySelectorAll(".dynamic-input");
      const valuesArray = Array.from(inputFields).map((input) => input.value);
      console.log(valuesArray); 
    }
  });
  