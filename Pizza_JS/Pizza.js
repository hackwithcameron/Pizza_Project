function getReceipt() {
    var text1 = "<h3>You Ordered:<h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for (var i=0; i<sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1+selectedSize+"<br>";
        }
    }
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    }
    else if (selectedSize === "Medium Pizza") {
        sizeTotal = 8;
    }
    else if (selectedSize === "Large Pizza") {
        sizeTotal = 10;
    }
    else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 14;
    }
    else if (selectedSize === "Family Sized Pizza") {
        sizeTotal = 18;
    }
    runningTotal = sizeTotal;
    console.log(selectedSize + " = $" + sizeTotal + ".00");
    console.log("size text1: " + text1);
    console.log("subtotal: $" + runningTotal + ".00");
    runningTotal += getVegetables()[0];
    text1 += getVegetables()[1];
    getMeat(runningTotal, text1);
}

function getVegetables() {
    var text1 = "";
    var vegTotal = 0;
    var selectedVeg = [];
    var vegArray = document.getElementsByClassName("vegetable");
    for (var i=0; i < vegArray.length; i++) {
        if (vegArray[i].checked) {
            selectedVeg.push(vegArray[i].value);
            console.log("selected vegetable item: (" + vegArray[i].value + ")");
            text1 = text1 + vegArray[i].value+"<br>";
        }
    }
    var vegCount = selectedVeg.length;
    if (vegCount > 2) {
        vegTotal = (vegCount - 2);
    }
    else {
        vegTotal = 0;
    }
    vegetableTotal = vegTotal;
    console.log("total selected vegetable items: " + vegCount);
    console.log(vegCount + " vegetable - 2 free vegetable = "+"$"+vegTotal+".00");
    console.log("vegetable text1: " +text1);
    console.log("Purchase Total: "+"$"+vegetableTotal+".00");
    return [vegetableTotal, text1];
}

function getMeat(runningTotal, text1) {
    var meatTotal = 0;
    var selectedMeat = [];
    var meatArray = document.getElementsByClassName("meats");
    for (var j=0; j < meatArray.length; j++) {
        if (meatArray[j].checked) {
            selectedMeat.push(meatArray[j].value);
            console.log("selected meat item: ("+meatArray[j].value+")");
            text1 = text1+meatArray[j].value+"<br>";
        }
    }
    var meatCount = selectedMeat.length;
    if (meatCount > 1) {
        meatTotal = (meatCount - 1);
    }
    else {
        meatTotal = 0;
    }
    runningTotal = (runningTotal + meatTotal);
    console.log("total selected meat items: " + meatCount);
    console.log(meatCount + " meat - 1 free meat = "+"$"+meatTotal+".00");
    console.log("meat text1: " +text1);
    console.log("Purchase Total: "+"$"+runningTotal+".00");
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" + runningTotal + ".00" + "</strong></h3>";
}