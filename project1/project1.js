// Calling the onload function 
window.onload = () =>{
    main()
}

function main(){
    // Get the reference 
const changeBtn = document.getElementById('change-btn')
const body = document.getElementById('root')

changeBtn.addEventListener('click',function(){
const bgColor = colorgenerator()
body.style.backgroundColor = bgColor
})
}

// Make a function to generate rgb color code 
function colorgenerator(){
  const red =  Math.floor(Math.random()*255)
  const green =  Math.floor(Math.random()*255)
  const blue =  Math.floor(Math.random()*255)

return `rgb(${red},${green},${blue})`

}


