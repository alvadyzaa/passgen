const passwordInput = document.getElementById('password');
const lengthInput = document.getElementById('length');
const uppercaseInput = document.getElementById('uppercase');
const lowercaseInput = document.getElementById('lowercase');
const numbersInput = document.getElementById('numbers');
const symbolsInput = document.getElementById('symbols');
const spacesInput = document.getElementById('spaces');
const duplicateInput = document.getElementById('duplicate');
const generateBtn = document.getElementById('generateBtn');
const copyBtn = document.getElementById('copyBtn');

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";
const space = " ";

function generatePassword() {
    let characters = "";
    let password = "";

    if (uppercaseInput.checked) characters += uppercase;
    if (lowercaseInput.checked) characters += lowercase;
    if (numbersInput.checked) characters += numbers;
    if (symbolsInput.checked) characters += symbols;
    if (spacesInput.checked) characters += space;

    if (characters === "") {
        alert("Please select at least one option!");
        return;
    }

    const length = lengthInput.value;

    if (duplicateInput.checked) {
        let charArray = characters.split('');
        if (charArray.length < length) {
            alert("Can't generate password: not enough unique characters!");
            return;
        }
        
        while (password.length < length) {
            const randomIndex = Math.floor(Math.random() * charArray.length);
            password += charArray[randomIndex];
            charArray.splice(randomIndex, 1);
        }
    } else {
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            password += characters[randomIndex];
        }
    }

    passwordInput.value = password;
}

function copyPassword() {
    if (!passwordInput.value) return;
    
    navigator.clipboard.writeText(passwordInput.value).then(() => {
        const copyBtn = document.getElementById('copyBtn');
        const tooltip = copyBtn.querySelector('.tooltip');
        
        copyBtn.classList.add('success');
        tooltip.textContent = 'Copied!';
        
        setTimeout(() => {
            copyBtn.classList.remove('success');
            tooltip.textContent = 'Copy';
        }, 2000);
    });
}

generateBtn.addEventListener('click', generatePassword);
copyBtn.addEventListener('click', copyPassword); 