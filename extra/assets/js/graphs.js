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
        heading.className = 'mb-0'
        collapse = document.createElement('button')
        collapse.className = 'btn'
        collapse.setAttribute('data-toggle', 'collapse')
        collapse.setAttribute('data-target', '#collapse' + numbers[i])
        collapse.setAttribute('aria-expanded', 'true')
        collapse.setAttribute('aria-controls', 'collapse' + numbers[i])
        collapse.textContent = values[i][0]
        heading.appendChild(collapse)
        cardHeader.appendChild(heading)
        collapseSection = document.createElement('div')
        collapseSection.className = 'collapse show'
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