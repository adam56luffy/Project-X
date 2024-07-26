const bar = document.getElementById("bar")
const nav = document.getElementById('nav')
const clos = document.getElementById('close')

if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('activ')
        console.log(nav)
    })
} 

if(clos){
    clos.addEventListener('click',()=>{
        nav.classList.remove('activ')
    })
}

var removebtn = document.getElementsByClassName('dng')
for (var i = 0; i < removebtn.length; i++) {
   var btn = removebtn[i]
   btn.addEventListener('click',function(e){
    var div = e.target.parentElement.parentElement
    div.remove()
   })
}

var inputbtn = document.getElementsByClassName("qt")
in
console.log(inputbtn)
if(inputbtn.value>0){
  inputbtn.value=0
}
for (var i = 0; i < inputbtn.length; i++) {
  var btn1 = inputbtn[i]
  btn1.addEventListener('click',function(e){
  })
}