function convert() {
const input = document.getElementById("input");
const inputValue = input.value;
const lengthOne = document.getElementById("1");
const lengthOneValue = lengthOne.value;
const lengthTwo = document.getElementById("2");
const lengthTwoValue = lengthTwo.value;
let paragraph = document.getElementById("paragraph");
if (lengthOneValue === "mm1") {
    let halfway = inputValue*1;
    paragraph.innerHTML = halfway;
} else if (lengthOneValue === "cm1") {
    let halfway = inputValue*10;
    paragraph.innerHTML = halfway;
} else if (lengthOneValue === "dm1") {
    let halfway = inputValue*100;
    paragraph.innerHTML = halfway;
} else if (lengthOneValue === "m1") {
    let halfway = inputValue*1000;
    paragraph.innerHTML = halfway;
} else if (lengthOneValue === "dam1") {
    let halfway = inputValue*10000;
    paragraph.innerHTML = halfway;
} else if (lengthOneValue === "hm1") {
    let halfway = inputValue*100000;
    paragraph.innerHTML = halfway;
} else if (lengthOneValue === "km1") {
    let halfway = inputValue*1000000;
    paragraph.innerHTML = halfway;
}
let halfwayResult = paragraph.innerHTML;
if (lengthTwoValue === "mm2") {
    let result = halfwayResult/1;
    paragraph.innerHTML = result+"mm";
} else if (lengthTwoValue === "cm2") {
    let result = halfwayResult/10;
    paragraph.innerHTML = result+"cm";
} else if (lengthTwoValue === "dm2") {
    let result = halfwayResult/100;
    paragraph.innerHTML = result+"dm";
} else if (lengthTwoValue === "m2") {
    let result = halfwayResult/1000;
    paragraph.innerHTML = result+"m";
} else if (lengthTwoValue === "dam2") {
    let result = halfwayResult/10000;
    paragraph.innerHTML = result+"dam";
} else if (lengthTwoValue === "hm2") {
    let result = halfwayResult/100000;
    paragraph.innerHTML = result+"hm";
} else if (lengthTwoValue === "km2") {
    let result = halfwayResult/1000000;
    paragraph.innerHTML = result+"km";
}
}
function changeTheme() {
    let CSSlink = document.querySelector("#stylesheet");
    if (CSSlink.href.includes("UnitConverter.css")) {
        CSSlink.href = "UnitConverter2.css";
    } else {
        CSSlink.href = "UnitConverter.css";
    }
}
