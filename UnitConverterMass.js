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
    const massOne = document.getElementById("1");
    const massOneValue = massOne.value;
    const massTwo = document.getElementById("2");
    const massTwoValue = massTwo.value;
    let paragraph = document.getElementById("paragraph");
    if (massOneValue === "pg1") {
        let halfway = inputValue*1;
        paragraph.innerHTML = halfway;
    } else if (massOneValue === "ng1") {
        let halfway = inputValue*1000;
        paragraph.innerHTML = halfway;
    } else if (massOneValue === "μg1") {
        let halfway = inputValue*1000000;
        paragraph.innerHTML = halfway;
    } else if (massOneValue === "mg1") {
        let halfway = inputValue*1000000000;
        paragraph.innerHTML = halfway;
    } else if (massOneValue === "cg1") {
        let halfway = inputValue*10000000000;
        paragraph.innerHTML = halfway;
    } else if (massOneValue === "dg1") {
        let halfway = inputValue*100000000000;
        paragraph.innerHTML = halfway;
    } else if (massOneValue === "g1") {
        let halfway = inputValue*1000000000000;
        paragraph.innerHTML = halfway;
    } else if (massOneValue === "dag1") {
        let halfway = inputValue*10000000000000;
        paragraph.innerHTML = halfway;
    } else if (massOneValue === "hg1") {
        let halfway = inputValue*100000000000000;
        paragraph.innerHTML = halfway;
    } else if (massOneValue === "kg1") {
        let halfway = inputValue*1000000000000000;
        paragraph.innerHTML = halfway;
    } else if (massOneValue === "Mg1") {
        let halfway = inputValue*1000000000000000000;
        paragraph.innerHTML = halfway;
    }
    let halfwayResult = paragraph.innerHTML;
    if (massTwoValue === "pg2") {
        let result = halfwayResult/1;
        paragraph.innerHTML = result+"pg";
    } else if (massTwoValue === "ng2") {
        let result = halfwayResult/1000;
        paragraph.innerHTML = result+"ng";
    } else if (massTwoValue === "μg2") {
        let result = halfwayResult/1000000;
        paragraph.innerHTML = result+"μg";
    } else if (massTwoValue === "mg2") {
        let result = halfwayResult/1000000000;
        paragraph.innerHTML = result+"mg";
    } else if (massTwoValue === "cg2") {
        let result = halfwayResult/10000000000;
        paragraph.innerHTML = result+"cg";
    } else if (massTwoValue === "dg2") {
        let result = halfwayResult/100000000000;
        paragraph.innerHTML = result+"dg";
    } else if (massTwoValue === "g2") {
        let result = halfwayResult/1000000000000;
        paragraph.innerHTML = result+"g";
    } else if (massTwoValue === "dag2") {
        let result = halfwayResult/10000000000000;
        paragraph.innerHTML = result+"dag";
    } else if (massTwoValue === "hg2") {
        let result = halfwayResult/100000000000000;
        paragraph.innerHTML = result+"hg";
    } else if (massTwoValue === "kg2") {
        let result = halfwayResult/1000000000000000;
        paragraph.innerHTML = result+"kg";
    } else if (massTwoValue === "Mg2") {
        let result = halfwayResult/1000000000000000000;
        paragraph.innerHTML = result+"Mg";
    }
}