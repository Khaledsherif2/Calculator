function update(div) {
  let Content = div.innerHTML;
  const inputField = document.getElementById('text');
  
  if(Content == "÷") {
    Content = "/";
    inputField.value += Content;
  }
  else if(Content == "×") {
    Content = "*";
    inputField.value += Content;
  }
  else {
    inputField.value += Content;
  }
};

function del() {
  document.getElementById('text').value = document.getElementById('text').value.substring(0,document.getElementById('text').value.length-1);
};

function reset() {
  document.getElementById('text').value = '';
};

function calc() {
  document.getElementById('text').value = eval(document.getElementById('text').value);
}


// function for themes

const theme1=document.getElementById("one")
const theme2=document.getElementById("two")
const theme3=document.getElementById("three")
const containerTheme=document.querySelector(".calc")

theme2.addEventListener("click",function(){
containerTheme.classList.add("light-teme")
containerTheme.classList.remove("contrast-teme")
})

theme3.addEventListener("click",function(){
  containerTheme.classList.add("contrast-teme")
  containerTheme.classList.remove("light-teme")
})

theme1.addEventListener("click",function(){
  containerTheme.classList.remove("light-teme")
  containerTheme.classList.remove("contrast-teme")
})



        