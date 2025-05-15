const colorArr=[
    "#2C3E50",
  "#34495E",
  "#2C2C2C",
  "#616A6B",
  "#4A235A",
  "#2F4F4F",
  "#0E4B5A",
  "#36454F",
  "#2C3E50",
  "#800020",
]

const hexCode=document.querySelector("#hexCode");
const body=document.querySelector("body")
const button=document.querySelector("#btn")

function getRandomIndex(){
    const randomIndex=Math.floor(colorArr.length * Math.random())
    return randomIndex
}

function backgroundChanger(){
    const randomColor=colorArr[getRandomIndex()]
    body.style.backgroundColor=randomColor;
    hexCode.innerText=randomColor;
}

button.onclick=backgroundChanger