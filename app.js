let todoTextInput = document.getElementById("todo-text")
let btn1 = document.getElementById("button1")
let btn2 = document.getElementById("button2")
let btn3 = document.getElementById("button3")
let btn4 = document.getElementById("button4")
let btn5 = document.getElementById("button5")
let btn6 = document.getElementById("button6")
let btn7 = document.getElementById("button7")
let btn8 = document.getElementById("button8")
let btn9 = document.getElementById("button9")
let btn0 = document.getElementById("button0")
let btnb = document.getElementById("buttonb")
let btnk = document.getElementById("buttonk")
let btna = document.getElementById("buttona")
let btnt = document.getElementById("buttont")
let btnq = document.getElementById("buttonq")
let btnc = document.getElementById("buttonc")
let btn00 = document.getElementById("button00")
btn1.onclick = () => {
    todoTextInput.value = todoTextInput.value + '1'
}
btn2.onclick = () => {
    todoTextInput.value = todoTextInput.value + '2'
}
btn3.onclick = () => {
    todoTextInput.value = todoTextInput.value + '3'
}
btn4.onclick = () => {
    todoTextInput.value = todoTextInput.value + '4'
}
btn5.onclick = () => {
    todoTextInput.value = todoTextInput.value + '5'
}
btn6.onclick = () => {
    todoTextInput.value = todoTextInput.value + '6'
}
btn7.onclick = () => {
    todoTextInput.value = todoTextInput.value + '7'
}
btn8.onclick = () => {
    todoTextInput.value = todoTextInput.value + '8'
}
btn9.onclick = () => {
    todoTextInput.value = todoTextInput.value + '9'
}
btn0.onclick = () => {
    todoTextInput.value = todoTextInput.value + '0'
}
btn00.onclick = () => {
    todoTextInput.value = todoTextInput.value + '00'
}
btnb.onclick = () => {
    todoTextInput.value = todoTextInput.value + '/'
}
btnk.onclick = () => {
    todoTextInput.value = todoTextInput.value + '*'
}
btna.onclick = () => {
    todoTextInput.value = todoTextInput.value + '-'
}
btnq.onclick = () => {
    todoTextInput.value = todoTextInput.value + '+'
}
btnc.onclick = () => {
    todoTextInput.value = ''
}
btnt.onclick = () => {
   todoTextInput.value = eval(todoTextInput.value)
}