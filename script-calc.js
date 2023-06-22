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
    dot = 0;
}

strRegex = new RegExp(/^[0-9.]+$/i);




const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', function uiButton(){
    if(strRegex.test(button.innerText) && operand.length == 0)
    {      
        if(button.innerText == "." && !var1.includes('.') && dot == 0 ) {
            var1.push(button.innerText); 
            dot = 1;
         } 
         else if(button.innerText != ".")
         {
            var1.push(button.innerText); 
         }
         document.getElementById('display').innerHTML = var1.join("");

    
    }
    else if(strRegex.test(button.innerText) && operand.length != 0)
    {
        if(button.innerText== "." && !var2.includes('.') && dot == 0) {
            var2.push(button.innerText); 
            dot = 1;
         } 
         else if(button.innerText != ".")
         {
            var2.push(button.innerText); 
         }
         document.getElementById('display').innerHTML = var2.join("");

    }
    else if(var1.length != 0 &&  button.className=="op" && var2.length == 0)
    {
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
        var1 = Array.from(answer.toString()).slice(0,9);
        document.getElementById('display').innerHTML = var1.join("");
        
    }
    else if(button.id == "del")
    {
        console.log(button.id);
        clear();
        answer.length =0;
        document.getElementById('display').innerHTML="0";
    }
    else if(var1.length!=0 && operand.length !=0 && var2.length!= 0 && button.innerText == "=" || button.className == "op")
    {
        console.log("main function executed");
        if(operand[0] == "/" && var2.length == 1 && var2[0] == "0"){
            document.getElementById('display').innerHTML = "nope";
            return;
        }
        answer = math_it_up[operand[0]](var1.join(""), var2.join(""));
        console.log(answer);
        console.log(var1, operand, var2);
        clear();
        var1 = Array.from(answer.toString()).slice(0,9);
        operand[0] = button.innerText;
        document.getElementById('display').innerHTML=var1.join("");
    }
}));
window.addEventListener("keydown", function (event) {
console.log(event.key);});



