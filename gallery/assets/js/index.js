function cardDisplay(id) {
    cardColumns = document.getElementById('cardsColumns')
    if (cardColumns != null) {
        cardColumns.innerHTML = ''
        var pics = ['./assets/images/1.jpeg', './assets/images/2.jpeg', './assets/images/3.jpeg', '../yearbook/assets/images/kuri.jpg']
        for (i = 0; i < 20; i++) {
            card = document.createElement('div')
            card.className = "card p-3"
            image = document.createElement('img')
            image.className = 'card-img'
            image.setAttribute('src', gallery[0]['1'][0]['image_link'])
            overlay = document.createElement('div')
            overlay.className = 'overlay'
            textArea = document.createElement('div')
            textArea.className = 'text'
            textArea.textContent = gallery[0]['1'][0]['description']
            dateArea = document.createElement('div')
            dateArea.className = 'card-footer date-area'
            dateValue = document.createElement('small')
            dateValue.className = 'text-muted'
            dateValue.textContent = "24-June-2020"
            dateArea.appendChild(dateValue)
            overlay.appendChild(textArea)
            overlay.appendChild(dateArea)
            card.appendChild(image)
            card.appendChild(overlay)
            cardColumns.appendChild(card)
        }
    }
}

function clicked(id) {
    var numbers = ['one', 'two', 'three', 'four', 'five']
    if (window.matchMedia("(max-width: 991px)").matches) {
        for (i = numbers.indexOf(id); i < numbers.length; i++) {
            var dot = document.getElementById('dot' + numbers[i])
            dot.style.backgroundColor = 'transparent'
            dot.style.boxShadow = 'none'
        }
        for (i = 0; i < numbers.indexOf(id); i++) {
            var dot = document.getElementById('dot' + numbers[i])
            dot.style.backgroundColor = 'transparent'
            dot.style.boxShadow = 'none'
        }
        var dot = document.getElementById('dot' + id)
        dot.style.backgroundColor = 'goldenrod'
        cardDisplay(id)
    } else {
        for (i = numbers.indexOf(id); i < numbers.length; i++) {
            var dot = document.getElementById('dot' + numbers[i])
            dot.style.boxShadow = 'none'
            dot.style.backgroundColor = 'white'
        }
        for (i = 0; i < numbers.indexOf(id); i++) {
            var dot = document.getElementById('dot' + numbers[i])
            dot.style.boxShadow = 'none'
            dot.style.backgroundColor = 'white'
        }
        var dot = document.getElementById('dot' + id)
        dot.style.boxShadow = '0 0 0 5px goldenrod'
        cardDisplay(id)
    }
}

function drawLines() {
    var lineCanvas = document.getElementById('lineCanvas')
    var container = document.getElementsByClassName('container')
    if (lineCanvas == null) {
        var body = document.getElementsByTagName('body')
        var lineCanvas = document.createElement('div')
        lineCanvas.setAttribute('id', 'lineCanvas')
        body[0].appendChild(lineCanvas)
    } else {
        lineCanvas.innerHTML = ''
    }
    var numbers = ['one', 'two', 'three', 'four', 'five']
    var dot = document.getElementById('dot' + numbers[0])
    width = 0
    for (i = 1; i < 8; i += 2) {
        var line = document.createElement('div')
        line.className = 'line'
        line.style.top = container[0].offsetTop + (dot.offsetHeight / 2) + dot.offsetTop + 'px'
        line.style.left = container[0].offsetLeft + (dot.offsetLeft * i) + ((dot.offsetWidth / 2) * i) + 'px'
        line.style.width = (dot.offsetLeft * 2) + (dot.offsetHeight - 2) + 'px'
        lineCanvas.appendChild(line)
    }
    var dots = document.getElementsByClassName('dot')
    if (window.matchMedia("(max-width: 991px)").matches) {
        for (let i = 0; i < dots.length; i++) {
            dots[i].style.backgroundColor = 'transparent'
            dots[i].style.boxShadow = 'none'
        }
        clicked('one')
    } else {
        for (let i = 0; i < dots.length; i++) {
            dots[i].style.backgroundColor = 'white'
            dots[i].style.boxShadow = 'none'
        }
        clicked('one')
    }
}

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}