let input = document.getElementById("input");
let buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        let value = button.innerText;

        // AC → All Clear
        if (value === "AC") {
            input.value = "";
        }

        // DEL → One character delete
        else if (value === "DEL") {
            input.value = input.value.slice(0, -1);
        }

        // = → Calculate
        else if (value === "=") {
            try {
                input.value = eval(input.value);
            } catch {
                input.value = "Error";
            }
        }

        // ÷ ko / me convert karna
        else if (value === "÷") {
            input.value += "/";
        }

        // Baqi sab buttons
        else {
            input.value += value;
        }
    });
});
