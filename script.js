// script.js

document.addEventListener("DOMContentLoaded", () => {
    const orderTypeSelect = document.getElementById("orderType");
    const customDetailsContainer = document.getElementById("customDetailsContainer");
  
    orderTypeSelect.addEventListener("change", function() {
      if (this.value === "commission") {
        addCustomField(this.value);
      } if (this.value === "existing") {
        addCustomField();
      } else {
        removeCustomField();
      }
    });
  
    function addCustomField(value) {

        if(value == "commission"){
            console.log("hey")
            // Make the textarea required if it's a custom request
            //customDetailsTextarea.required = true;

        } else {
            console.log("heya")
        }
      // Check if the field already exists to prevent duplicates
    //   if (!document.getElementById("customDetailsContainer")) {
    //     console.log("hey")
    //     // Create label
    //     const label = document.createElement("label");
    //     label.setAttribute("for", "customDetails");
    //     label.textContent = "Describe Your Custom Request:";
  
    //     // Create textarea
    //     const textarea = document.createElement("textarea");
    //     textarea.name = "commissionDetails";
    //     textarea.id = "commissionDetails";
    //     textarea.rows = 4;
    //     textarea.required = true; // Make it required if necessary
  
    //     // Append elements to the container
    //     customDetailsContainer.appendChild(label);
    //     customDetailsContainer.appendChild(textarea);
    //   }
    }
  
    function removeCustomField() {
      // Remove the custom details if they exist
      while (customDetailsContainer.firstChild) {
        customDetailsContainer.removeChild(customDetailsContainer.firstChild);
      }
    }
  });
  