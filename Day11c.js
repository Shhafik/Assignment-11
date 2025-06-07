function Multiply(){
    const input1 = document.getElementById('ab');
    const input2 = document.getElementById('bc');
    const span = document.getElementById('cd');
    const res = input1.value*input2.value;
    span.innerText = res;
}
function Divide(){
    const input1 = document.getElementById('ab');
    const input2 = document.getElementById('bc');
    const span = document.getElementById('cd');
    const res = input1.value/input2.value;
    span.innerText = res;
}