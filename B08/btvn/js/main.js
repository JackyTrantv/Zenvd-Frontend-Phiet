const numberBox = document.getElementById("number_box");
const result = document.getElementById("result_display");

const MAX = 100;
const MIN = 1;
let index = MIN;
let attemptCount = 0;
const MAX_ATTEMPTS = 3;
let gameStarted = false;
let specialNumber = null;

// function
function createButtonNumber(number) {
    numberBox.innerHTML = "";
    index = MIN;

    const frag = document.createDocumentFragment();
    for (let i = MIN; i <= number; i++) {
        const btn = document.createElement("button");
        btn.className = "btn number_item";
        btn.dataset.index = i;
        btn.innerText = i;
        frag.appendChild(btn);
    }
    numberBox.appendChild(frag);
}

function randomSpecialNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function playGame(e) {
    if (!gameStarted) return;

    const numberItem = e.target.closest(".number_item");

    if (!numberItem) return;
    if (numberItem.classList.contains("disabled")) return;

    const numberIndex = Number(numberItem.dataset.index);

    numberItem.classList.add("selected");
    attemptCount++;

    if (numberIndex < specialNumber) {
        document.querySelectorAll(".number_item").forEach((btn) => {
            const index = Number(btn.dataset.index);
            if (index < numberIndex) {
                btn.classList.add("disabled");
            }
        });
        result.innerText = `Lần ${attemptCount}: SAI (số bạn chọn nhỏ hơn số bí mật)\n`;
    } else if (numberIndex > specialNumber) {
        document.querySelectorAll(".number_item").forEach((btn) => {
            const index = Number(btn.dataset.index);
            if (index > numberIndex) {
                btn.classList.add("disabled");
            }
        });
        result.innerText = `Lần ${attemptCount}: SAI (Số bạn chọn lớn hơn số bí mật)\n`;
    } else {
        numberItem.classList.add("corrected");
        result.innerText = `Lần ${attemptCount}: Bạn đã chọn ĐÚNG\n`;
    }

    if (numberIndex !== specialNumber) {
        hideOneLife();
    }

    if (attemptCount >= MAX_ATTEMPTS || numberIndex === specialNumber) {
        document
            .querySelectorAll(".number_item")
            .forEach((btn) => btn.classList.add("disabled"));
        result.innerText += `\nTrò chơi kết thúc!`;
    }
}

function hideOneLife() {
    const lives = document.querySelectorAll(".life:not(.hidden)");
    if (lives.length > 0) {
        lives[lives.length - 1].classList.add("hidden"); // ẩn nút cuối cùng còn lại
    }
}

function RemoveHiddenClass() {
    const lives = document.querySelectorAll(".life.hidden");

    if (!lives.length) return;
    lives.forEach((btn) => btn.classList.remove("hidden"));
}

function startGame() {
    if (gameStarted) return;
    gameStarted = true;
    attemptCount = 0;
    result.innerText = "Bắt đầu trò chơi";
    specialNumber = randomSpecialNumber(MIN, MAX);
    createButtonNumber(MAX);
    numberBox.addEventListener("click", playGame);
    console.log("Số bí mật:", specialNumber); //log để test
}

function resetGame() {
    gameStarted = false;
    attemptCount = 0;
    Init();
    RemoveHiddenClass();
}

function saveGame() {
    if (!gameStarted) {
        alert("Chưa bắt đầu trò chơi!");
        return;
    }

    const data = {
        specialNumber,
        attemptCount,
        time: new Date().toLocaleString(),
    };

    localStorage.setItem("game_save", JSON.stringify(data));
    alert("Đã lưu trò chơi!");
}

function Init() {
    result.innerText = "Nhấn Start để bắt đầu";
    numberBox.innerHTML = "";
    index = MIN;
    createButtonNumber(MAX);
}

function ActionGame(str) {
    switch (str) {
        case "Start":
            startGame();
            break;
        case "Reset":
            resetGame();
            break;
        case "Save":
            saveGame();
            break;
    }
}

Init();
