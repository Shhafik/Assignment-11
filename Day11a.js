function ReverseString(){
    const input = document.getElementById('ab');
    const span = document.getElementById('xz');
    let val = input.value;
    let res = "";
    for(let i=val.length-1;i>=0;i--) {
        res+=val.charAt(i);
    }
    span.innerText = res;
}