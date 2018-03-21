var dice = 0;
var dicesCount = 0;
var diceNumber;
var sixesCount = 0 ;
var dicesArray = [];

function checkThreeSixes() {
    if (dicesCount === 3) {
        diceNumber = 0;
        dicesArray.splice(0,dicesArray.length);
        reset();
        alert('3 sixes in a row you lose a turn');

    }
}

function checkForSix() {
    if (sixesCount !== 3 && diceNumber === 6) {
        sixesCount++;
        dicesCount++;
        roll();
        // dicesArray.push(diceNumber);
    }
    else if (sixesCount === 3) {
        checkThreeSixes();
    }
}

function reset() {
    dicesCount = 0;
    diceNumber = 0;
}


function roll() {
    if(dicesArray[dicesArray.length-1] !== 6) {
        dicesArray.splice(0,dicesArray.length);
        reset();
    }
    diceNumber = Math.floor(Math.random() * 6) + 1;
    console.log(diceNumber);
    dicesArray.push(diceNumber);
    checkForSix();
    moveCoinOptions();
}

function dicesOptions() {

}

function moveCoinOptions() {

    $("#diceOptions").html("");
    for(var i=0; i<dicesArray.length; i++) {
        $("#diceOptions").append("<label class=\"radio-inline\">\n" +
            "<input type=\"radio\" name=\"diceNumber\" value='"+dicesArray[i]+"'>\n" + dicesArray[i] +
            "</label>\n");
    }

    $("#myModal").modal();

}

function moveCoin() {
    var diceVal = $("input[name='diceNumber']:checked").val();
    console.log("diceVal",diceVal);
    var index = dicesArray.indexOf(diceVal);
    var elem = document.getElementById("animate1");
    var pos = 0;
    var x = $("#animate1").position();
    pos = x.left;
    var move = pos;
    // pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
        console.log("pos",pos);
        console.log("dicepos",diceVal);
        if (pos === move + diceVal*40 ) {
            clearInterval(id);
        } else {
            pos++;
            //   elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
    dicesArray.splice(index, 1);

 }