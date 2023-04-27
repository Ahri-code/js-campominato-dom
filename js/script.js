// --- VARIABLES ---

let button;
let difficulty_sel;
let i;
let max;
let div;
let p;
let text
let rad;
let ver = "false";
let res;
let x;
let bomb = [];

// --- DIV ---



// --- CLICK ---

button = document.getElementById("play");
button.addEventListener("click", start);

// --- FUNCTIONS ---

function start() {
    if (ver == "true") {
        document.getElementById("grid").innerHTML = ""
        ver = "false";
    }
    
    if (ver == "false") {
        difficulty_sel = document.getElementById("difficulty").value;
        if (difficulty_sel == 'easy') {
            easy();
        }
        else if (difficulty_sel == 'normal') {
            normal();
        }
        else if (difficulty_sel == 'hard') {
            hard();
        }
        ver = "true";
    }
}

// --- Element creation ---

function add(radq, counter) {
    div = document.createElement("div");
    div.classList.add("square");
    div.style.width = "calc(70vh / "+ radq +")";
    div.style.height = "calc(70vh / "+ radq +")";
    div.style.border = "1px solid black";
    div.style.display = "flex";
    div.style.justifyContent = "center"
    div.style.alignItems = "center"
    
    p = document.createElement("p");
    text = document.createTextNode(counter);
    p.appendChild(text);
    div.appendChild(p);

    document.getElementById("grid").appendChild(div);
}

function bomb_creation(tot, counter) {
    do {
        x = Math.floor(Math.random()* 100 + 1);
    } while (x > max);
    bomb.push(x);
}

// --- Difficulties ---

function easy() {
    max = 100;
    rad = Math.sqrt(max);
    for(i = 1; i <= max; i++) {
        add(rad, i);
    };
    for(i = 0; i < 16; i++) {
        bomb_creation(max, i);
    }
    console.log(bomb);
}

function normal() {
    max = 81;
    rad = Math.sqrt(max);
    for(i = 1; i <= max; i++) {
        add(rad, i);
    };
}

function hard() {
    max = 49;
    rad = Math.sqrt(max);
    for(i = 1; i <= max; i++) {
        add(rad, i);
    };
}