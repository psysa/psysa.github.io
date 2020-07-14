function cardDisplay(id) {
    var numbers = ['one', 'two', 'three', 'four', 'five']
    cardColumns = document.getElementById('cardsColumns')
    if (cardColumns != null) {
        cardColumns.innerHTML = ''
        for (i = 0; i < gallery[numbers.indexOf(id)][id][0]['photos'].length; i++) {
            // console.log(gallery[numbers.indexOf(id)][id][0]['photos'])
            card = document.createElement('div')
            card.className = "card p-3"
            image = document.createElement('img')
            image.className = 'card-img'
            image.setAttribute('src', './assets/images/Gallery/' + id + '/' + gallery[numbers.indexOf(id)][id][0]['photos'][i]['photo'])
            overlay = document.createElement('div')
            overlay.className = 'overlay'
            textArea = document.createElement('div')
            textArea.className = 'text'
            textArea.textContent = gallery[numbers.indexOf(id)][id][0]['photos'][i]['place']
            dateArea = document.createElement('div')
            dateArea.className = 'card-footer date-area'
            dateValue = document.createElement('small')
            dateValue.className = 'text-muted'
            dateValue.textContent = gallery[numbers.indexOf(id)][id][0]['photos'][i]['date']
            dateArea.appendChild(dateValue)
            overlay.appendChild(textArea)
            overlay.appendChild(dateArea)
            card.appendChild(image)
            card.appendChild(overlay)
            card.addEventListener('click', function(e){
                console.log('tap one')
                console.log($(this).find('.overlay').css('opacity'))
                if($(this).find('.overlay').css('opacity') == 0){
                    console.log('comes here')
                    $(this).find('.overlay').css('opacity', '0.9');
                }else{
                    console.log('goes here')
                    $(this).find('.overlay').css('opacity', '0');
                }
                console.log($(this).find('.overlay').css('opacity'))
            })
            cardColumns.appendChild(card)
        }
        for (i = 0; i < gallery[numbers.indexOf(id)][id][0]['videos'].length; i++) {
            card = document.createElement('div')
            card.className = "card p-3"
            video = document.createElement('video')
            video.className = 'card-img'
            video.setAttribute('src', './assets/images/Gallery/' + id + '/' + gallery[numbers.indexOf(id)][id][0]['videos'][i]['video'])
            video.setAttribute('autoplay', 'true')
            video.setAttribute('loop', 'true')
            video.setAttribute('muted', 'true')
            overlay = document.createElement('div')
            overlay.className = 'overlay'
            overlay.style.opacity = '0.9'
            textArea = document.createElement('div')
            textArea.className = 'text'
            textArea.innerHTML = gallery[numbers.indexOf(id)][id][0]['videos'][i]['place']+ '<br><p style="font-family:Monospace;font-weight:400; padding-top:5%;margin-bottom:0;">Tap to play</p>'
            // textArea.textContent = 'Tap to play!!'
            dateArea = document.createElement('div')
            dateArea.className = 'card-footer date-area'
            dateValue = document.createElement('small')
            dateValue.className = 'text-muted'
            dateValue.textContent = gallery[numbers.indexOf(id)][id][0]['videos'][i]['date']
            dateArea.appendChild(dateValue)
            overlay.appendChild(textArea)
            overlay.appendChild(dateArea)
            card.appendChild(video)
            card.appendChild(overlay)
            video.pause()
            card.addEventListener('click', function(e){
                console.log('tap one')
                console.log($(this).find('.overlay').css('opacity'))
                if($(this).find('.overlay').css('opacity') == 0){
                    console.log('comes here')
                    $(this).find('.overlay').css('opacity', '0.9');
                    // textArea.textContent = gallery[numbers.indexOf(id)][id][0]['videos'][i]['place']
                    document.getElementsByTagName("video")[0].pause()
                }else{
                    console.log('goes here')
                    $(this).find('.overlay').css('opacity', '0');
                    // textArea.textContent = gallery[numbers.indexOf(id)][id][0]['videos'][i]['place']
                    document.getElementsByTagName("video")[0].play()
                }
                console.log($(this).find('.overlay').css('opacity'))
            })
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
        dot.style.backgroundColor = '#FBB040'
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
        dot.style.boxShadow = '0 0 0 5px #FBB040'
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