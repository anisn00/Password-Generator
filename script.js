const password_lenght = document.getElementById("length");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");

const generate = document.getElementById("generate");
const result = document.getElementById("result");
const copy = document.getElementById("copy");


function generatePassword(length, uppercase, lowercase, numbers, symbols){
    let chars = "";
    if(uppercase){
        chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if(lowercase){
        chars += "abcdefghijklmnopqrstuvwxyz";
    }
    if(numbers){
        chars += "0123456789";
    }
    if(symbols){
        chars += "!@#$%^&*()_+";
    }
    let password = "";
    for(let i = 0; i < length; i++){
        let random = Math.floor(Math.random() * chars.length);
        password += chars[random];
    }
    return password;
}
generate.onclick = function generate_password(){
    let password = generatePassword(Number(password_lenght.value), uppercase.checked, lowercase.checked, numbers.checked, symbols.checked);
    result.innerHTML = password;
}

function copy_password(result){
    navigator.clipboard.writeText(result).then(() => {
        alert("Text copied to clipboard!");
    }).catch((err) => {
        console.error("Failed to copy text: ", err);
    });
}


copy.onclick = function(){
    copy_password(result.innerHTML);
}