let msgEl = document.getElementById('msg');
let incBtn = document.getElementById('increase');
let decBtn = document.getElementById('decrease');
let num = document.getElementById('number');
let sum = 0;

incBtn.addEventListener('click', handleAdd);
decBtn.addEventListener('click', handleSub);

function handleAdd(){
    sum += parseInt(num.value);
    render();
};

function handleSub(){
    sum -= parseInt(num.value);
    render();
};

function render(){
  msgEl.textContent = sum;
  if(sum < 0){
    msgEl.style.color = "red";
  }
};

render();