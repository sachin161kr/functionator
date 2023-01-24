let div = document.createElement("div");

//let audio = document.createElement("audio");

let myFunctionList;

let funList = [];

//let x;

document.addEventListener("DOMContentLoaded", () => {
  div.classList.add("box");

  div.innerText = "Press arrow key";
  div.style.fontSize = "15px";

  div.style.fontFamily = "cursive";

  div.style.color = "white";
  div.style.textAlign = "center";
  div.style.lineHeight = "150px";

  // audio.classList.add("audio");

  // audio.setAttribute("src", "/wd.mp3");

  // document.body.appendChild(audio);

  // x = document.querySelector(".audio");

  document.body.appendChild(div);

  myFunctionList = document.createElement("div");
  document.body.appendChild(myFunctionList);
});

document.addEventListener("keydown", (e) => {
  e.preventDefault();

  div.innerText = "Please Space";

  const code = e.keyCode;
  if (code == 38) {
    //moveUp();
    addFun("Up");
  } else if (code == 40) {
    //moveDown();
    addFun("Down");
  } else if (code == 39) {
    addFun("Right");
  } else if (code == 37) {
    addFun("Left");
  } else if (code == 13 || code == 32) {
    mover();
  }

  //console.log(randomColor());
});

function mover() {
  if (funList.length > 0) {
    div.style.background = randomColor();
    let curr = div.getBoundingClientRect();
    let e = funList.shift();
    let item = e.textContent.replace("+", "");
    console.log(item);
    div.innerHTML = "Moved " + item;
    myFunctionList.removeChild(e);

    if (item == "Left") {
      div.style.left = curr.left - curr.width / 2 + "px";
    }
    if (item == "Right") {
      div.style.left = curr.left + curr.width / 2 + "px";
    }
    if (item == "Up") {
      div.style.top = curr.top - curr.height / 2 + "px";
    }
    if (item == "Down") {
      div.style.top = curr.top + curr.height / 2 + "px";
    }

    setTimeout(mover, 100);
  }
}

function addFun(val) {
  let span = document.createElement("span");
  span.textContent = "+" + val;
  span.style.padding = "10px";
  span.style.border = "1px solid #ddd";
  span.style.color = "white";
  myFunctionList.appendChild(span);

  funList.push(span);

  span.addEventListener("mouseover", function () {
    this.style.backgroundColor = "red";
    this.style.color = "white";
  });

  span.addEventListener("click", function () {
    let currIndex = funList.indexOf(this);
    let tempRemove = funList.splice(currIndex, 1);
    myFunctionList.removeChild(this);
    // funList = funList.filter((e) => {
    //   e == this;
    // });
  });

  span.addEventListener("mouseout", function () {
    this.style.backgroundColor = "black";
    this.style.color = "white";
  });
  //console.log(funList);
}

function randomColor() {
  return "#" + Math.random().toString(16).substr(-6);
}

// function moveUp() {
//   console.log("Up");
//   let temp = div.offsetTop;
//   temp = temp - 30;
//   div.style.top = temp + "px";
// }

// function moveDown() {
//   console.log("Down");
//   let temp = div.offsetTop;
//   temp = temp + 30;
//   div.style.top = temp + "px";
// }

// function moveRight() {
//   console.log("Right");
//   let temp = div.offsetLeft;
//   temp = temp + 30;
//   div.style.left = temp + "px";
// }

// function moveLeft() {
//   console.log("Right");
//   let temp = div.offsetLeft;
//   temp = temp - 30;
//   div.style.left = temp + "px";
// }
