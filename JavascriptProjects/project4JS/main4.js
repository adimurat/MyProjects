const upperChars = "QWERTYUIOPASDFGHJKLZXCVBNM";
const smallChars = "qwertyuiopasdfghjklzxcvbnm";
const numberChars = "0123456789";
const symbolChars = "!@$%&_";
const allChars = upperChars + smallChars + numberChars + symbolChars;


const input = document.querySelector(".inpt");
const btn2 = document.getElementById('copy_btn');
const btn1 = document.getElementById('generate_btn');


btn1.addEventListener('click', () => {
    input.value = generate(12);
    
})

btn2.addEventListener('click', () => {
    input.select();
    navigator.clipboard.writeText(input.value);
})

const random = () => {
    return Math.floor(Math.random() * allChars.length);
}

const generate = (passwordLength) => {
    let newPassword = '';
    for(let i = 0; i < passwordLength; i++){
        let randomPassword = allChars[random()];
        newPassword += randomPassword;
    }
    return newPassword;
}

