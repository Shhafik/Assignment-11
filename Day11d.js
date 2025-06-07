function generatePassword() {
    const length = document.getElementById('sh').value;
    const includeChars = document.getElementById('is');
    const includeNums = document.getElementById('re');
    let characters='';
    if(includeChars){
        characters+='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+=-[]{};:,.<>?';
    }
    if(includeNums){
        characters+='0123456789';
    }
    let password = '';
    for (let i=0;i<length;i++){
        password+= characters.charAt(Math.floor(Math.random()*characters.length));
    }
    document.getElementById('xz').value= password;
    document.getElementById('af').textContent= length;
}
function copyPassword(){
    const passwordField = document.getElementById('xz');
    passwordField.select();
}

