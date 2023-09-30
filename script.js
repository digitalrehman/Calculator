let string = "";
let btn = document.querySelectorAll(".button");
Array.from(btn).forEach((button)=>{
    button.addEventListener("click",(e)=>{
        if (e.target.innerHTML == '=') {
            string = eval(string)
            document.getElementById("input").value = string;

        }else if(e.target.innerHTML == 'AC') {
            string= ""
            document.getElementById("input").value = string;
        } else{
            string = string + e.target.innerHTML;
            document.getElementById("input").value = string;
        }
    })
})