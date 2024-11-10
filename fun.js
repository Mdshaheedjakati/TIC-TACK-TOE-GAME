document.addEventListener("DOMContentLoaded", () => {
    let boxes = document.querySelectorAll(".box");
    let turnO = true;
    let gamebt = document.querySelector("#bt");
    let msgContainer = document.querySelector(".msg-container");
    let msg = document.querySelector("#msg");
    let reset = document.querySelector("#btn");

    const winpat = [
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [1, 4, 7],
        [2, 4, 6],
        [2, 5, 8],
        [3, 4, 5],
        [6, 7, 8]
    ];

    const resetgame = () => {
        turnO = true;
        enable();
        msgContainer.classList.add("hide");
        msg.innerText = ""; // Clear the winner message
    };

    const disable = () => {
        for (let box of boxes) {
            box.disabled = true;
        }
    };

    const enable = () => {
        for (let box of boxes) {
            box.disabled = false;
            box.innerText = ""; // Clear all boxes
        }
    };

    boxes.forEach((box) => {
        box.addEventListener("click", () => {
            if (turnO) {
                box.innerText = "O";
                turnO = false;
            } else {
                box.innerText = "X";
                turnO = true;
            }
            box.disabled = true;
            checkwinner();
        });
    });

    const showwiner = (winner) => {
        msg.innerHTML = `Congratulations, the winner is ${winner}`;
        msgContainer.classList.remove("hide");
        disable();
    };

    const checkwinner = () => {
        for (let pattern of winpat) {
            let pos1 = boxes[pattern[0]].innerText;
            let pos2 = boxes[pattern[1]].innerText;
            let pos3 = boxes[pattern[2]].innerText;

            if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
                if (pos1 === pos2 && pos2 === pos3) {
                    showwiner(pos1);
                    return;
                }
            }
        }
    };

    // Event listeners for reset buttons
    gamebt.addEventListener("click", resetgame); // New Game button
    reset.addEventListener("click", resetgame);  // Reset button
});
