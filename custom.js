var headerText = document.querySelector('.header__text')

var text = 'Web Programing Exercises'

for (let i = 0; i < text.length; i++) {
    let span = document.createElement('span')
    span.textContent = text[i];
    span.style.fontSize = '0px'
    headerText.appendChild(span)
}

// Get all span tags
var listSpan = document.querySelectorAll('.header__text span')
var index = 0
setInterval(() => {
    listSpan[index].style.fontSize = '70px'
    index++
    if (index == listSpan.length) {
        index = 0
        // Reset size of text
        resetFontSize()
    }
}, 300)

const resetFontSize = () => {
    Array.from(listSpan).forEach((span) => {
        span.style.fontSize = '0px'
    });
}
