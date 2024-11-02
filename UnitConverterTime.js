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
    const inputValue = input.value;
    const timeOne = document.getElementById("1");
    const timeOneValue = timeOne.value;
    const timeTwo = document.getElementById("2");
    const timeTwoValue = timeTwo.value;
    let paragraph = document.getElementById("paragraph");
    if (timeOneValue === "ms1") {
        let halfway = inputValue/(3.6*10**6);
        paragraph.innerHTML = halfway;
    } else if (timeOneValue === "cs1") {
        let halfway = inputValue/(3.6*10**5);
        paragraph.innerHTML = halfway;
    } else if (timeOneValue === "ds1") {
        let halfway = inputValue/(3.6*10**4);
        paragraph.innerHTML = halfway;
    } else if (timeOneValue === "s1") {
        let halfway = inputValue/(3.6*10**3);
        paragraph.innerHTML = halfway;
    } else if (timeOneValue === "min1") {
        let halfway = inputValue/60;
        paragraph.innerHTML = halfway;
    } else if (timeOneValue === "h1") {
        let halfway = inputValue/1;
        paragraph.innerHTML = halfway;
    } else if (timeOneValue === "day1") {
        let halfway = inputValue*24;
        paragraph.innerHTML = halfway;
    } else if (timeOneValue === "week1") {
        let halfway = inputValue*168;
        paragraph.innerHTML = halfway;
    } else if (timeOneValue === "month1") {
        let halfway = inputValue*744;
        paragraph.innerHTML = halfway;
    } else if (timeOneValue === "year1") {
        let halfway = inputValue*8760;
        paragraph.innerHTML = halfway;
    }
    let halfwayResult = paragraph.innerHTML;
    if (timeTwoValue === "ms2") {
        let result = (halfwayResult*3.6*10**6).toFixed(2);
        paragraph.innerHTML = result+"ms";
    } else if (timeTwoValue === "cs2") {
        let result = (halfwayResult*3.6*10**5).toFixed(2);
        paragraph.innerHTML = result+"cs";
    } else if (timeTwoValue === "ds2") {
        let result = (halfwayResult*3.6*10**4).toFixed(2);
        paragraph.innerHTML = result+"ds";
    } else if (timeTwoValue === "s2") {
        let result = (halfwayResult*3.6*10**3).toFixed(2);
        paragraph.innerHTML = result+"s";
    } else if (timeTwoValue === "m2") {
        let result = (halfwayResult*60).toFixed(2);
        paragraph.innerHTML = result+"m";
    } else if (timeTwoValue === "h2") {
        let result = (halfwayResult*1).toFixed(2);
        paragraph.innerHTML = result+"h";
    } else if (timeTwoValue === "day2") {
        let result = (halfwayResult/24).toFixed(2);
        paragraph.innerHTML = result+"day(s)";
    } else if (timeTwoValue === "week2") {
        let result = (halfwayResult/168).toFixed(2);
        paragraph.innerHTML = result+"week(s)";
    } else if (timeTwoValue === "month2") {
        let result = (halfwayResult/744).toFixed(2);
        paragraph.innerHTML = result+"month(s)";
    } else if (timeTwoValue === "year2") {
        let result = (halfwayResult/8760).toFixed(2);
        paragraph.innerHTML = result+"year(s)";
    }
}