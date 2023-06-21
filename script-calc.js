let dot = 0;
var var1 = [];
var operand = [];
var var2 = [];
var answer = "";
var math_it_up = {
    '+': function (x, y) { return +x + +y },
    '-': function (x, y) { return +x - +y },
    '/': function (x, y) { return +x / +y },
    '*': function (x, y) { return +x * +y },
    '%': function (x)    { return  +x/100  },
    '+/-': function (x)  { return  +x* -1  },
};
function clear(){
    var1.length = 0;
    var2.length = 0;
    operand.length = 0;
}

strRegex = new RegExp(/^[0-9]+$/i);


const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', function(){
    if(strRegex.test(button.innerText) && operand.length == 0 && dot==0)
    {      
         var1.push(button.innerText); 
         if(button.innerText== ".") {
            dot = 1;
         } 
         document.getElementById('display').innerHTML = var1.join("");

    
    }
    else if(strRegex.test(button.innerText) && operand.length != 0 && dot==0)
    {
        var2.push(button.innerText);
        if(button.innerText== ".") {
            dot = 1;
         } 
         document.getElementById('display').innerHTML = var2.join("");

    }
    else if(var1.length != 0 &&  button.className=="op")
    {
        console.log(button,this.className);
        if(operand.length==0)
        {
       operand.push(button.innerText);
       return operand[0];
        }
        else {
            operand[0] = button.innerText;
        }
    }
    else if(var1.length != 0 &&  button.className=="func")
    {
        operand[0] = button.innerText;
        answer = math_it_up[operand[0]](var1.join(""), var2.join(""));
        console.log(answer);
        console.log(var1, operand, var2);
        clear();
        var1 = Array.from(answer.toString());
        document.getElementById('display').innerHTML=answer.toString();
        
    }
    else if(button.id == "del")
    {
        console.log(button.id);
        clear();
        answer.length =0;
        document.getElementById('display').innerHTML="0";
    }
    if(var1.length!=0 && operand.length !=0 && button.innerText == "=")
    {
        answer = math_it_up[operand[0]](var1.join(""), var2.join(""));
        console.log(answer);
        console.log(var1, operand, var2);
        clear();
        var1 = Array.from(answer.toString());
        document.getElementById('display').innerHTML=answer.toString();
    }
}));


