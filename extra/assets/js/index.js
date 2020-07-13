function awardsDisplay() {
    pillsAwards = document.getElementById('pills-awards')
    cardColumns = pillsAwards.querySelector('#cardsColumns')
    if (cardColumns != null) {
        cardColumns.innerHTML = ''
        for (i = 0; i < 20; i++) {
            card = document.createElement('div')
            card.className = "card p-3"
            imageContainer = document.createElement('div')
            imageContainer.className = "text-center"
            imageContainer.setAttribute("id", "imageContainer")
            row = document.createElement('div')
            row.className = "row"
            imageCircleDiv = document.createElement('div')
            imageCircleDiv.className = "col-auto"
            imageCircleDiv.setAttribute("id", "imageCircleDiv")
            image = document.createElement('img')
            image.setAttribute("src", "../yearbook/assets/images/kuri.jpg")
            imageCircleDiv.appendChild(image)
            nameField = document.createElement('div')
            nameField.setAttribute("id", "nameField")
            fullName = document.createElement('h4')
            fullName.className = "text-right"
            fullName.setAttribute("id", "fullName")
            fullName.textContent = "Kuriakose Eldho"
            awardName = document.createElement('h6')
            awardName.className = 'text-right'
            awardName.setAttribute("id", "awardName")
            awardName.textContent = 'Best Kundithalayan'
            nameField.appendChild(fullName)
            nameField.appendChild(awardName)
            row.appendChild(nameField)
            row.appendChild(imageCircleDiv)
            imageContainer.appendChild(row)
            card.appendChild(imageContainer)
            cardColumns.appendChild(card)
        }
    }
}

function questionsDisplay() {
    questionPills = document.getElementById('pills-questions')
    cardColumns = questionPills.querySelector('#cardsContainer')
    if (cardColumns != null) {
        cardColumns.innerHTML = ''
        for (i = 0; i < 20; i++) {
            card = document.createElement('div')
            card.className = "card"
            cardHeader = document.createElement('card-header')
            cardHeader.className = 'card-header'
            cardHeader.textContent = "Quote"
            cardBody = document.createElement('card-body')
            cardBody.className = 'card-body'
            blockQuote = document.createElement('blockquote')
            blockQuote.className = 'blockquote mb-0'
            quote = document.createElement('p')
            quote.textContent = "somequote"
            blockQuote.appendChild(quote)
            cardBody.appendChild(blockQuote)
            card.appendChild(cardHeader)
            card.appendChild(cardBody)
            cardColumns.appendChild(card)
        }
    }
}

function memesDisplay() {
    pillMemes = document.getElementById('pills-memes')
    cardColumns = pillMemes.querySelector('#cardsColumns')
    if (cardColumns != null) {
        cardColumns.innerHTML = ''
        for (i = 0; i < 20; i++) {
            card = document.createElement('div')
            card.className = "card p-3"
            image = document.createElement('img')
            image.className = 'card-img'
            image.setAttribute('src', '../yearbook/assets/images/kuri.jpg')
            card.appendChild(image)
            cardColumns.appendChild(card)
        }
    }
}