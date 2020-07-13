function analyticsDisplay() {
    accordion = document.getElementById('accordion')
    accordion.innerHTML = ''
    numbers = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight']
    values = [['mostTalked', 'bar'], ['mostEmoji', 'bar'], ['somethingWrong', 'bar'], ['mostMedia', 'bar'], ['popularWords', 'bar'], ['talkingDay', 'bar'], ['talkingHrs', 'bar'], ['talkingMonths', 'bar']]
    for (i = 0; i < numbers.length; i++) {
        card = document.createElement('card')
        card.className = 'card'
        cardHeader = document.createElement('div')
        cardHeader.className = 'card-header'
        cardHeader.setAttribute('id', 'heading' + numbers[i])
        heading = document.createElement('h5')
        heading.className = 'mb-0 text-left'
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
        collapse.textContent = values[i][0]
        darrow = document.createElement('img')
        darrow.setAttribute('id', 'darrow')
        darrow.setAttribute('src', './assets/images/darrow.png')
        heading.appendChild(collapse)
        heading.appendChild(darrow)
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
        row = document.createElement('div')
        row.className = 'row'
        textCol = document.createElement('div')
        textCol.className = 'col-sm'
        textCol.textContent = values[i][0]
        graphCol = document.createElement('div')
        graphCol.className = 'col-sm'
        canvasArea = document.createElement('canvas')
        canvasArea.setAttribute('id', values[i][0])
        canvasArea.setAttribute('width', '400')
        canvasArea.setAttribute('height', '400')
        plotGraph(values[i][0], values[i][1])
        graphCol.appendChild(canvasArea)
        row.appendChild(textCol)
        row.appendChild(graphCol)
        cardBody.appendChild(row)
        collapseSection.appendChild(cardBody)
        card.appendChild(cardHeader)
        card.appendChild(collapseSection)
        accordion.appendChild(card)
        // if (i >= 0 && i <= (numbers.length - 1)) {
        //     hr = document.createElement('hr')
        //     accordion.appendChild(hr)
        // }
    }
}

function plotGraph(graphName, type) {
    graphNameMap = {
        'mostTalked': 'who_talked_most',
        'mostEmoji': 'most_emoji',
        'somethingWrong': 'most_del_msg',
        'mostMedia': 'most_media',
        'popularWords': 'popular_words',
        'talkingDay': 'talking_day',
        'talkingHrs': 'talking_hrs',
        'talkingMonths': 'talking_months'
    }
    $.getJSON("./assets/js/graph_data/" + graphNameMap[graphName] + ".json", function (json) {
        var ctx = document.getElementById(graphName).getContext('2d');
        var myChart = new Chart(ctx, {
            type: type,
            data: {
                labels: _.keys(json),
                datasets: [{
                    label: '# of Votes',
                    data: _.values(json),
                    backgroundColor: 'rgb(218,165,32)',
                    borderColor: 'rgb(218,165,32)',
                    borderWidth: 0
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    });
}