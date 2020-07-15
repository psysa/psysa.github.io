function awardsDisplay() {
    pillsAwards = document.getElementById('pills-awards')
    cardColumns = pillsAwards.querySelector('#cardsColumns')
    if (cardColumns != null) {
        cardColumns.innerHTML = ''
        for (i = 0; i < awards.length; i++) {
            card = document.createElement('div')
            card.className = "card p-3"
            image = document.createElement('div')
            image.className = 'image'
            cardImage = document.createElement('img')
            cardImage.className = 'card-img'
            cardImage.setAttribute('src', './assets/images/wreath.png')
            image.appendChild(cardImage)
            overlay = document.createElement('div')
            overlay.className = 'overlay'
            cardImageOverlay = document.createElement('img')
            cardImageOverlay.className = 'card-img'
            cardImageOverlay.setAttribute('src', '../yearbook/assets/images/display_pictures/' + awards[i]['rollno'] + '.jpg')
            overlay.appendChild(cardImageOverlay)
            cardBody = document.createElement('div')
            cardBody.className = 'card-body'
            cardBody.style.color = 'white'
            cardTitle = document.createElement('h5')
            cardTitle.className = 'card-title'
            cardTitle.textContent = awards[i]['award']
            cardText = document.createElement('p')
            cardText.className = 'card-text'
            cardText.textContent = awards[i]['winner']
            cardBody.appendChild(cardTitle)
            cardBody.appendChild(cardText)
            card.appendChild(overlay)
            card.appendChild(image)
            card.appendChild(cardBody)
            cardColumns.appendChild(card)
        }
    }
}

function questionsDisplay() {
    questionPills = document.getElementById('pills-questions')
    cardColumns = questionPills.querySelector('#cardsColumns')
    if (cardColumns != null) {
        cardColumns.innerHTML = ''
        for (i = 0; i < questions.length; i++) {
            card = document.createElement('div')
            card.className = "card"
            cardHeader = document.createElement('h5')
            cardHeader.className = 'card-header'
            cardHeader.textContent = questions[i]['question']
            cardHeader.style.fontWeight = '600'
            cardBody = document.createElement('card-body')
            cardBody.className = 'card-body'
            listGroup = document.createElement('ul')
            listGroup.className = 'list-group list-group-flush'
            listGroup.style.backgroundColor = 'transparent'
            listGroup.style.fontWeight = '400'
            for (j = 0; j < questions[i]['answers'].length; j++) {
                listItem = document.createElement('li')
                listItem.className = 'list-group-item'
                listItem.textContent = questions[i]['answers'][j]['answer']
                listItem.style.backgroundColor = 'transparent'
                listGroup.appendChild(listItem)
            }
            cardBody.appendChild(listGroup)
            card.appendChild(cardHeader)
            card.appendChild(cardBody)
            cardColumns.appendChild(card)
        }
    }

    pillsQuestions = document.getElementById('pills-questions')
    accordion = pillsQuestions.querySelector('#accordion')
    accordion.innerHTML = ''
    numbers = ['One', 'Two', 'Three', 'Four', 'Five']
    for (i = 0; i < numbers.length; i++) {
        card = document.createElement('card')
        card.className = 'card'
        cardHeader = document.createElement('div')
        cardHeader.className = 'card-header'
        cardHeader.setAttribute('id', 'heading' + numbers[i])
        heading = document.createElement('h5')
        heading.className = 'mb-0'
        headerRow = document.createElement('div')
        headerRow.className = 'row justify-content-between'
        titleDiv = document.createElement('div')
        titleDiv.className = 'col text-left'
        collapse = document.createElement('button')
        if (i == 0) {
            collapse.className = 'btn'
        } else {
            collapse.className = 'btn collapsed'
        }
        cardHeader.setAttribute('data-toggle', 'collapse')
        cardHeader.setAttribute('data-target', '#collapse' + numbers[i])
        if (i == 0) {
            cardHeader.setAttribute('aria-expanded', 'true')
        } else {
            cardHeader.setAttribute('aria-expanded', 'false')
        }
        cardHeader.setAttribute('aria-controls', 'collapse' + numbers[i])
        collapse.style.fontWeight = '600'
        collapse.textContent = questions[i]['question']
        arrowDiv = document.createElement('div')
        arrowDiv.className = 'col-2 text-right arrow-div'
        darrow = document.createElement('img')
        darrow.setAttribute('id', 'darrow')
        darrow.setAttribute('src', './assets/images/darrow.png')
        darrow.className = 'col-auto text-right'
        arrowDiv.appendChild(darrow)
        titleDiv.appendChild(collapse)
        headerRow.appendChild(titleDiv)
        headerRow.appendChild(arrowDiv)
        heading.appendChild(headerRow)
        cardHeader.appendChild(heading)
        collapseSection = document.createElement('div')
        if (i == 0) {
            collapseSection.className = 'collapse show'
        } else {
            collapseSection.className = 'collapse'
        }
        collapseSection.setAttribute('id', 'collapse' + numbers[i])
        collapseSection.setAttribute('aria-labelledby', 'heading' + numbers[i])
        collapseSection.setAttribute('data-parent', '#accordion')
        cardBody = document.createElement('div')
        cardBody.className = 'card-body'
        listGroup = document.createElement('ul')
        listGroup.className = 'list-group list-group-flush'
        listGroup.style.backgroundColor = 'transparent'
        listGroup.style.fontWeight = '400'
        for (j = 0; j < questions[i]['answers'].length; j++) {
            listItem = document.createElement('li')
            listItem.className = 'list-group-item'
            listItem.textContent = questions[i]['answers'][j]['answer']
            listItem.style.backgroundColor = 'transparent'
            listGroup.appendChild(listItem)
        }
        cardBody.appendChild(listGroup)
        collapseSection.appendChild(cardBody)
        card.appendChild(cardHeader)
        card.appendChild(collapseSection)
        accordion.appendChild(card)
    }
}

function memesDisplay() {
    pillMemes = document.getElementById('pills-memes')
    cardColumns = pillMemes.querySelector('#cardsColumns')
    if (cardColumns != null) {
        cardColumns.innerHTML = ''
        for (i = 0; i < memes[0]['memes'].length; i++) {
            card = document.createElement('div')
            card.className = "card p-3"
            image = document.createElement('img')
            image.className = 'card-img'
            image.setAttribute('src', './assets/images/Memes/' + memes[0]['memes'][i]['meme'])
            card.appendChild(image)
            cardColumns.appendChild(card)
        }
    }
}