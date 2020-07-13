function awardsDisplay() {
    pillsAwards = document.getElementById('pills-awards')
    cardColumns = pillsAwards.querySelector('#cardsColumns')
    if (cardColumns != null) {
        cardColumns.innerHTML = ''
        for (i = 0; i < 20; i++) {
            for (i = 0; i < 20; i++) {
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
                cardImageOverlay.setAttribute('src', '../yearbook/assets/images/kuri.jpg')
                overlay.appendChild(cardImageOverlay)
                cardBody = document.createElement('div')
                cardBody.className = 'card-body'
                cardBody.style.color = 'white'
                cardTitle = document.createElement('h5')
                cardTitle.className = 'card-title'
                cardTitle.textContent = 'Best Kundithalayan'
                cardText = document.createElement('p')
                cardText.className = 'card-text'
                cardText.textContent = 'Kuriakose Eldho'
                cardBody.appendChild(cardTitle)
                cardBody.appendChild(cardText)
                card.appendChild(overlay)
                card.appendChild(image)
                card.appendChild(cardBody)
                cardColumns.appendChild(card)
            }
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