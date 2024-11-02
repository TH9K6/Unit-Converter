function changeTheme() {
    let CSSlink = document.querySelector("#stylesheet");
    if (CSSlink.href.includes("UnitConverter.css")) {
        CSSlink.href = "UnitConverter2.css";
    } else {
        CSSlink.href = "UnitConverter.css";
    }
}
function convert() {
    const input = document.getElementById("input");
    const inputValue = parseInt(input.value);
    const temperatureOne = document.getElementById("1");
    const temperatureOneValue = temperatureOne.value;
    const temperatureTwo = document.getElementById("2");
    const temperatureTwoValue = temperatureTwo.value;
    let paragraph = document.getElementById("paragraph");
    if (temperatureOneValue === "C1") {
        let halfway = inputValue + 273.15;
        paragraph.innerHTML = halfway;
    } else if (temperatureOneValue === "F1") {
        let halfway = (inputValue-32)*(5/9)+273.15;
        paragraph.innerHTML = halfway;
    } else if (temperatureOneValue === "K1") {
        let halfway = inputValue*1;
        paragraph.innerHTML = halfway;
    }
    let halfwayResult = paragraph.innerHTML;
    if (temperatureTwoValue === "C2") {
        let result = (halfwayResult-273.15).toFixed(2);
        paragraph.innerHTML = result+"°C";
    } else if (temperatureTwoValue === "F2") {
        let result = ((inputValue-273.15)*(9/5)+32).toFixed(2);
        paragraph.innerHTML = result+"°F";
    } else if (temperatureTwoValue === "K2") {
        let result = (halfwayResult*1).toFixed(2);
        paragraph.innerHTML = result+"°K";
    }
}