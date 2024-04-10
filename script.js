

var print = document.getElementById("print");
var flag = 1;

function fun_click() {
    var btn1,btn2,btn3,btn4,btn5,btn6,btn7,btn8,btn9;
    btn1 = document.getElementById("b1").value;
    btn2 = document.getElementById("b2").value;
    btn3 = document.getElementById("b3").value;
    btn4 = document.getElementById("b4").value;
    btn5 = document.getElementById("b5").value;
    btn6 = document.getElementById("b6").value;
    btn7 = document.getElementById("b7").value;
    btn8 = document.getElementById("b8").value;
    btn9 = document.getElementById("b9").value;
    
    var b1, b2, b3, b4, b5, b6, b7, b8, b9;
    b1 = document.getElementById("b1");
    b2 = document.getElementById("b2");
    b3 = document.getElementById("b3");
    b4 = document.getElementById("b4");
    b5 = document.getElementById("b5");
    b6 = document.getElementById("b6");
    b7 = document.getElementById("b7");
    b8 = document.getElementById("b8");
    b9 = document.getElementById("b9");

    b1.style.backgroundColor = "white";
    b2.style.backgroundColor = "white";
    b3.style.backgroundColor = "white";
    b4.style.backgroundColor = "white";
    b5.style.backgroundColor = "white";
    b6.style.backgroundColor = "white";
    b7.style.backgroundColor = "white";
    b8.style.backgroundColor = "white";
    b9.style.backgroundColor = "white";
    

    if ((btn1 == 'x' || btn1 == 'X') && (btn2 == 'x' || btn2 == 'X') && (btn3 == 'x' || btn3 == 'X')) {
        print.innerHTML = "Player x is win..!";
        b4.disabled = true;
        b5.disabled = true;
        b6.disabled = true;
        b7.disabled = true;
        b8.disabled = true;
        b9.disabled = true;
        b1.style.backgroundColor = "green";
        b2.style.backgroundColor = "green";
        b3.style.backgroundColor = "green";
        console.log("yeh");
    }
    else if ((btn1 == 'x' || btn1 == 'X') && (btn5 == 'x' || btn5 == 'X') && (btn9 == 'x' || btn9 == 'X')) {
        print.innerHTML = "Player x is win..!";
        b4.disabled = true;
        b2.disabled = true;
        b6.disabled = true;
        b7.disabled = true;
        b8.disabled = true;
        b3.disabled = true;
        b1.style.backgroundColor = "green";
        b5.style.backgroundColor = "green";
        b9.style.backgroundColor = "green";
        console.log("yeh");
    }
    else if ((btn2 == 'x' || btn2 == 'X') && (btn5 == 'x' || btn5 == 'X') && (btn8 == 'x' || btn8 == 'X')) {
        print.innerHTML = "Player x is win..!";
        b4.disabled = true;
        b1.disabled = true;
        b6.disabled = true;
        b7.disabled = true;
        b9.disabled = true;
        b3.disabled = true;
        b2.style.backgroundColor = "green";
        b5.style.backgroundColor = "green";
        b8.style.backgroundColor = "green";
        console.log("yeh");
    }
    else if ((btn3 == 'x' || btn3 == 'X') && (btn5 == 'x' || btn5 == 'X') && (btn7 == 'x' || btn7 == 'X')) {
        print.innerHTML = "Player x is win..!";
        b4.disabled = true;
        b1.disabled = true;
        b6.disabled = true;
        b8.disabled = true;
        b9.disabled = true;
        b2.disabled = true;
        b3.style.backgroundColor = "green";
        b5.style.backgroundColor = "green";
        b7.style.backgroundColor = "green";
        console.log("yeh");
    }
    else if ((btn4 == 'x' || btn4 == 'X') && (btn5 == 'x' || btn5 == 'X') && (btn6 == 'x' || btn6 == 'X')) {
        print.innerHTML = "Player x is win..!";
        b2.disabled = true;
        b1.disabled = true;
        b8.disabled = true;
        b7.disabled = true;
        b9.disabled = true;
        b3.disabled = true;
        b4.style.backgroundColor = "green";
        b5.style.backgroundColor = "green";
        b6.style.backgroundColor = "green";
        console.log("yeh");
    }
    else if ((btn7 == 'x' || btn7 == 'X') && (btn8 == 'x' || btn8 == 'X') && (btn9 == 'x' || btn9 == 'X')) {
        print.innerHTML = "Player x is win..!";
        b1.disabled = true;
        b2.disabled = true;
        b3.disabled = true;
        b4.disabled = true;
        b6.disabled = true;
        b5.disabled = true;
        b7.style.backgroundColor = "green";
        b8.style.backgroundColor = "green";
        b9.style.backgroundColor = "green";
        console.log("yeh");
    }
    else if ((btn1 == 'x' || btn1 == 'X') && (btn4 == 'x' || btn4 == 'X') && (btn7 == 'x' || btn7 == 'X')) {
        print.innerHTML = "Player x is win..!";
        b2.disabled = true;
        b5.disabled = true;
        b6.disabled = true;
        b8.disabled = true;
        b9.disabled = true;
        b3.disabled = true;
        b1.style.backgroundColor = "green";
        b4.style.backgroundColor = "green";
        b7.style.backgroundColor = "green";
        console.log("yeh");
    }
    else if ((btn3 == 'x' || btn3 == 'X') && (btn6 == 'x' || btn6 == 'X') && (btn9 == 'x' || btn9 == 'X')) {
        print.innerHTML = "Player x is win..!";
        b4.disabled = true;
        b1.disabled = true;
        b8.disabled = true;
        b7.disabled = true;
        b5.disabled = true;
        b2.disabled = true;
        b3.style.backgroundColor = "green";
        b6.style.backgroundColor = "green";
        b9.style.backgroundColor = "green";
        console.log("yeh");
    }
      //start from O player Logic
    if ((btn1 == 'o' || btn1 == 'O') && (btn2 == 'o' || btn2 == 'O') && (btn3 == 'O' || btn3 == 'o')) {
        print.innerHTML = "Player O is win..!";
        b4.disabled = true;
        b5.disabled = true;
        b6.disabled = true;
        b7.disabled = true;
        b8.disabled = true;
        b9.disabled = true;
        b1.style.backgroundColor = "green";
        b2.style.backgroundColor = "green";
        b3.style.backgroundColor = "green";
        console.log("yeh");
    }
    else if ((btn1 == 'o' || btn1 == 'O') && (btn5 == 'o' || btn5 == 'O') && (btn9 == 'o' || btn9 == 'O')) {
        print.innerHTML = "Player O is win..!";
        b4.disabled = true;
        b2.disabled = true;
        b6.disabled = true;
        b7.disabled = true;
        b8.disabled = true;
        b3.disabled = true;
        b1.style.backgroundColor = "green";
        b5.style.backgroundColor = "green";
        b9.style.backgroundColor = "green";
        console.log("yeh");
    }
    else if ((btn2 == 'o' || btn2 == 'O') && (btn5 == 'o' || btn5 == 'O') && (btn8 == 'o' || btn8 == 'O')) {
        print.innerHTML = "Player O is win..!";
        b4.disabled = true;
        b1.disabled = true;
        b6.disabled = true;
        b7.disabled = true;
        b9.disabled = true;
        b3.disabled = true;
        b2.style.backgroundColor = "green";
        b5.style.backgroundColor = "green";
        b8.style.backgroundColor = "green";
        console.log("yeh");
    }
    else if ((btn3 == 'o' || btn3 == 'O') && (btn5 == 'o' || btn5 == 'O') && (btn7 == 'o' || btn7 == 'O')) {
        print.innerHTML = "Player O is win..!";
        b4.disabled = true;
        b1.disabled = true;
        b6.disabled = true;
        b8.disabled = true;
        b9.disabled = true;
        b2.disabled = true;
        b3.style.backgroundColor = "green";
        b5.style.backgroundColor = "green";
        b7.style.backgroundColor = "green";
        console.log("yeh");
    }
    else if ((btn4 == 'O' || btn4 == 'o') && (btn5 == 'O' || btn5 == 'o') && (btn6 == 'o' || btn6 == 'O')) {
        print.innerHTML = "Player O is win..!";
        b2.disabled = true;
        b1.disabled = true;
        b8.disabled = true;
        b7.disabled = true;
        b9.disabled = true;
        b3.disabled = true;
        b4.style.backgroundColor = "green";
        b5.style.backgroundColor = "green";
        b6.style.backgroundColor = "green";
        console.log("yeh");
    }
    else if ((btn7 == 'o' || btn7 == 'O') && (btn8 == 'o' || btn8 == 'O') && (btn9 == 'o' || btn9 == 'O')) {
        print.innerHTML = "Player O is win..!";
        b1.disabled = true;
        b2.disabled = true;
        b3.disabled = true;
        b4.disabled = true;
        b6.disabled = true;
        b5.disabled = true;
        b7.style.backgroundColor = "green";
        b8.style.backgroundColor = "green";
        b9.style.backgroundColor = "green";
        console.log("yeh");
    }
    else if ((btn1 == 'o' || btn1 == 'O') && (btn4 == 'o' || btn4 == 'O') && (btn7 == 'o' || btn7 == 'O')) {
        print.innerHTML = "Player O is win..!";
        b2.disabled = true;
        b5.disabled = true;
        b6.disabled = true;
        b8.disabled = true;
        b9.disabled = true;
        b3.disabled = true;
        b1.style.backgroundColor = "green";
        b4.style.backgroundColor = "green";
        b7.style.backgroundColor = "green";
        console.log("yeh");
    }
    else if ((btn3 == 'o' || btn3 == 'O') && (btn6 == 'o' || btn6 == 'O') && (btn9 == 'o' || btn9 == 'O')) {
        print.innerHTML = "Player O is win..!";
        b4.disabled = true;
        b1.disabled = true;
        b8.disabled = true;
        b7.disabled = true;
        b5.disabled = true;
        b2.disabled = true;
        b3.style.backgroundColor = "green";
        b6.style.backgroundColor = "green";
        b9.style.backgroundColor = "green";
        console.log("yeh");
    }
    else if ((btn1 == 'X' || btn1 == 'O') && (btn2 == 'X' || btn2 == 'O') && (btn3 == 'X' || btn3 == 'O') && 
            (btn4 == 'X' || btn4 == 'O') && (btn5 == 'X' || btn5 == 'O') && (btn6 == 'X' || btn6 == 'O') && 
            (btn7 == 'X' || btn7 == 'O') && (btn8 == 'X' || btn8 == 'O') && (btn9 == 'X' || btn9 == 'O') ) {

                print.innerHTML = "Match Tie";
                let a = confirm("This game reset..!")
                if (a == true) {
                    reset();
                }
    }
    else{
        if (flag == 1) {
            print.innerHTML = "Player \'O\' trun";
            // flag=0
            
        }else{
            print.innerHTML = "Player \'X\' trun";
            // flag =1;
        }
    }
 
}

function reset() {
    location.reload();
    var btn1,btn2,btn3,btn4,btn5,btn6,btn7,btn8,btn9;
    btn1 = document.getElementById("b1").value=' ';
    btn2 = document.getElementById("b2").value=' ';
    btn3 = document.getElementById("b3").value=' ';
    btn4 = document.getElementById("b4").value=' ';
    btn5 = document.getElementById("b5").value=' ';
    btn6 = document.getElementById("b6").value=' ';
    btn7 = document.getElementById("b7").value=' ';
    btn8 = document.getElementById("b8").value=' ';
    btn9 = document.getElementById("b9").value=' ';
}

function f1() {
    var print = document.getElementById("print");
    if (flag == 1) {
        b1.value = "X";
        b1.disabled = true;
        flag = 0;
    } else {
        b1.value = "O";
        b1.disabled = true;
        flag = 1;
    }
}

function f2() {
    if (flag == 1) {
        b2.value = "X";
        b2.disabled = true;
        flag = 0;
    } else {
        b2.value = "O";
        b2.disabled = true;
        flag = 1;
    }
}
function f3() {
    if (flag == 1) {
        b3.value = "X";
        b3.disabled = true;
        flag = 0;
    } else {
        b3.value = "O";
        b3.disabled = true;
        flag = 1;
    }
}
function f4() {
    if (flag == 1) {
        b4.value = "X";
        b4.disabled = true;
        flag = 0;
    } else {
        b4.value = "O";
        b4.disabled = true;
        flag = 1;
    }
}
function f5() {
    if (flag == 1) {
        b5.value = "X";
        b5.disabled = true;
        flag = 0;
    } else {
        b5.value = "O";
        b5.disabled = true;
        flag = 1;
    }
}
function f6() {
    if (flag == 1) {
        b6.value = "X";
        b6.disabled = true;
        flag = 0;
    } else {
        b6.value = "O";
        b6.disabled = true;
        flag = 1;
    }
}
function f7() {
    if (flag == 1) {
        b7.value = "X";
        b7.disabled = true;
        flag = 0;
    } else {
        b7.value = "O";
        b7.disabled = true;
        flag = 1;
    }
}
function f8() {
    if (flag == 1) {
        b8.value = "X";
        b8.disabled = true;
        flag = 0;
    } else {
        b8.disabled = true;
        b8.value = "O";
        flag = 1;
    }
}
function f9() {
    if (flag == 1) {
        b9.value = "X";
        b9.disabled = true;
        flag = 0;
    } else {
        b9.value = "O";
        b9.disabled = true;
        flag = 1;
    }
}