let input = document.querySelector 
("cnpj")
input.addEventListener("keypress", () =>
{
    let inputlenght = input.value.length
    if(inputlenght==2 || inputlenght==5){
        input.value+="."
    }
    else if (inputlenght==8){
        input.value+="/"
    }
})
