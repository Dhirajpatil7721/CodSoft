const dark = document.querySelector('#dark');
const light = document.querySelector('#light');
const body= document.querySelector('body');
const element= document.querySelector('*');

dark.addEventListener('click',function(){
body.style.backgroundColor="black";
element.style.color="white";
})

light.addEventListener('click',function(){
    body.style.backgroundColor="white"
    element.style.color="black"
})

let string = ""; // Change "String" to "string" to avoid conflicts with the String object

let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == "=") {
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == "Clear"){
            string = "";
            document.querySelector('input').value = string;
        }
        else {
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })

})
