function SortAlphabetically(){
    const input = document.getElementById('ab').value;
    const span = document.getElementById('xz');
    let res = '';
    const result = input.split('').sort().join('');
    span.innerText = result;
}