let playerX = true;
let arrFirst = [];
let arrSecond = [];
let arrThird = [];
let win = false;
let callOnceFirst = true, callOnceSecond = true, callOnceThird = true;


function getID(id) {
    const data = document.getElementById(id);

    var image = document.createElement("img");
    image.className = "image";

    chooseImage(image);
    writeArray(image, id);

    data.appendChild(image);
    rules();

    if (win && !playerX) {
        const winnerText = document.getElementById("winner");
        winnerText.textContent = "Congratulations! Player x wins!"
    } else if (win && playerX) {
        const winnerText = document.getElementById("winner");
        winnerText.textContent = "Congratulations! Player o wins!"
    }
}

function winHorizontal(arr) {
    let countX = 0, countO = 0;
    for (let i = 0; i < 3; i++) {
        console.log("1")
        if (arr[i] == "X" && arr[i] != undefined) {
            countX++;
        } else if (arr[i] == "O" && arr[i] != undefined) {
            countO++;
        }
    }
    if (countX == 3 || countO == 3) {
        win = true;
    }

}

function winVertical() {
    if (arrFirst.length >= 1 && arrSecond.length >= 1 && arrThird.length >= 1) {
        for (let i = 0; i < 3; i++) {
            console.log("2")
            if ((arrFirst[i] == "X" && arrSecond[i] == "X" && arrThird[i] == "X") || (arrFirst[i] == "O" && arrSecond[i] == "O" && arrThird[i] == "O")) {
                win = true;
                break;
            }
        }
    }
}

function winObliquely() {
    if (arrFirst.length >= 1 && arrSecond.length >= 1 && arrThird.length >= 1) {
        console.log("3")

        if ((arrFirst[0] == "X" && arrSecond[1] == "X" && arrThird[2] == "X") || (arrFirst[0] == "O" && arrSecond[1] == "O" && arrThird[2] == "O")) {
            win = true;
        } else if ((arrFirst[2] == "X" && arrSecond[1] == "X" && arrThird[0] == "X") || (arrFirst[2] == "O" && arrSecond[1] == "O" && arrThird[0] == "O")) {
            win = true;
        }
    }
}


function rules() {
    if (callOnceFirst && arrFirst.length == 3) {
        winHorizontal(arrFirst);
        callOnceFirst = false;
    }
    if (callOnceSecond && arrSecond.length == 3) {
        winHorizontal(arrSecond);
        callOnceSecond = false;
    }
    if (callOnceThird && arrThird.length == 3) {
        winHorizontal(arrThird);
        callOnceThird = false;
    }
    winVertical();
    winObliquely();

}

function writeArray(image, id) {
    if (id == 1 || id == 2 || id == 3) {
        arrFirst[id - 1] = image.id;
    } else if (id == 4 || id == 5 || id == 6) {
        arrSecond[id - 4] = image.id;
    } else {
        arrThird[id - 7] = image.id;
    }
}

function chooseImage(image) {
    if (playerX) {
        image.src = "X.png";
        image.id = "X";
        playerX = false;
    } else {
        image.src = "O.png";
        image.id = "O";
        playerX = true;
    }
}

function restartGame() {
    location.reload();
}
