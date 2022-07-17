const buttonTask = document.getElementById('addButton')
const input = document.getElementById('input')
const res = document.getElementById('res')
const newWrapper = document.getElementsByClassName('.inputBox')

let tasks = [];

buttonTask.addEventListener('click', () => {
    console.log(input.value)

    res.innerHTML += ` </div>
    <div id="inputBox" class="input-box">
       <input type="checkbox" class="check">
       ${input.value}
   </div>  `
    
})

