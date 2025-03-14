let flag_equal = 0;
let flag_was_op = 0;

function overloadedInput(){
    if(document.getElementById("calc-display").innerHTML.length >= 17)
        return 1;
    return 0;
}

function clearcalc() {
    flag_was_op = 0;
    document.getElementById("calc-display").innerHTML = '0';
}

function displayNum(number){
    let num = number & 0xF;
    if(overloadedInput())
        return;
    flag_was_op = 0;
    if(flag_equal == 1) {
        flag_equal = 0;
        document.getElementById("calc-display").innerHTML = num;
        return;
    }
    if(document.getElementById("calc-display").innerHTML === '0'){
        document.getElementById("calc-display").innerHTML = num;
        return;
    }
    document.getElementById("calc-display").innerHTML += (number & 0xF);
}

function appendOp(operator){
    let tmp = document.getElementById("calc-display").innerHTML;
    if(flag_was_op == 1)
        return;
    if(overloadedInput())
         return;
    flag_was_op = 1;
    if(operator === '.'){
        flag_was_op = 0;
        flag_equal = 0;
        document.getElementById("calc-display").innerHTML += operator;
        return;    
    }
    flag_equal = 0;
    document.getElementById("calc-display").innerHTML += ' ';    
    document.getElementById("calc-display").innerHTML += operator + ' ';    
}

function evaluateCalc(){
    let str = document.getElementById("calc-display").innerHTML;
    let res = eval(str);
    document.getElementById("calc-display").innerHTML = res;
    flag_equal = 1;
    flag_was_op = 0;
}

function negateValue() {
    if(overloadedInput())
        return;
    flag_was_op = 1;
    document.getElementById("calc-display").innerHTML += ' ';    
    document.getElementById("calc-display").innerHTML += '*' + ' ' + '-1'; 
}