function clicking(event) {
    // console.log(event)
    parent = document.querySelector('.display')
    operator = ['+', '-', '*', '%']
    //    console.log(parent.innerText)
    //    console.log(event.innerText)
    if (!(operator.includes(parent.innerText.slice(-1)) && operator.includes(event.innerText))) {
        parent.innerText = parent.innerText + event.innerText
        // console.log('operator repating')
    }
}
window.addEventListener('keypress', (event) => {
    operator = ['+', '-', '*', '%']
    key = event.key
    code = event.code
    if (code.includes('Digit') || operator.includes(key)) {
        parent = document.querySelector('.display')
        parent.innerText = parent.innerText + key
    }
    else {
        console.log('error')
    }
})
function eval1() {
    parent = document.querySelector('.display')
    output = document.querySelector('.output')
    data = parent.innerText
    var out = eval(data)
    console.log(out)
    output.innerText = out
}
