//add
let add = document.getElementById('add')

//remove
let remove = document.getElementById('remove')

//multiphication
let multiphication = document.getElementById('multiphication')

//division
let division = document.getElementById('division')
//number
let number = document.getElementById('number')
let Inteeger = 0

add.addEventListener('click',addFunction)
remove.addEventListener('click',removeFunction)
multiphication.addEventListener('click',multiphicationFunction)
division.addEventListener('click',divisionFunction)

function addFunction(){
    Inteeger += 1
    number.innerHTML = Inteeger
}

function removeFunction(){
    Inteeger -=1
    number.innerHTML = Inteeger
    
}

function multiphicationFunction(){
    Inteeger *=2
    number.innerHTML = Inteeger
    
}

function divisionFunction(){
    Inteeger /=2
    number.innerHTML = Inteeger
    
}