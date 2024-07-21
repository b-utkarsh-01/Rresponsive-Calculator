const disply = document.getElementById("disply");


function appedToDisply(input){
        disply.value += input; 
}

function calculet(){
    try {
        disply.value = eval(disply.value);
    } catch (error) {
        alert("ERROR...\nplease enter correct opretion");
    }
}

function clearD() {
    disply.value = "";
}