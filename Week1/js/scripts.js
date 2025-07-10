function changeText() {
    var textsArray = ["What do you call a deer with no eye? \nNo eye deer, Ha, Ha, Ha", "What did a late tomato say to other tomatoes?\nI will ketchup, Ha, Ha, Ha.", "What do you call a bee from America?\nA USB", "Text 4", "Text 5"];
    var number = getRandomNumberBetween(0, textsArray.length - 1);
    console.log("Index: ", number);
    document.getElementById("heading").innerHTML = textsArray[number];
}

function getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max-min+1) +min);
}
