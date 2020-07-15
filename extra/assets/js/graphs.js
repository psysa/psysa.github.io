function analyticsDisplay() {
    pillsAnalytics = document.getElementById('pills-analytics')
    accordion = pillsAnalytics.querySelector('#accordionAnalytics')
    accordion.innerHTML = ''
    numbers = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine']
    values = [['mostTalked', 'bar', 'rgb(218,165,32)'], ['mostEmoji', 'bar', 'rgb(218,165,32)'], ['somethingWrong', 'bar', 'rgb(218,165,32)'], ['mostMedia', 'bar', 'rgb(218,165,32)'], ['popularWords', 'bar', 'rgb(218,165,32)'], ['talkingDay', 'bar', 'rgb(218,165,32)'], ['talkingHrs', 'bar', 'rgb(218,165,32)'], ['talkingMonths', 'bar', 'rgb(218,165,32)'], ['semesterWise', 'pie', ['rgb(99, 110, 250)', 'rgb(239, 85, 59)', 'rgb(0, 204, 150)', 'rgb(171, 99, 250)', 'rgb(255, 161, 90)', 'rgb(25, 211, 243)', 'rgb(255, 102, 146)', 'rgb(182, 232, 128)']]]
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
        collapse.textContent = analysisContent[i]['heading']
        arrowDiv = document.createElement('div')
        arrowDiv.className = 'col-2 text-right'
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
        collapseSection.setAttribute('data-parent', '#accordionAnalytics')
        cardBody = document.createElement('div')
        cardBody.className = 'card-body'
        row = document.createElement('div')
        row.className = 'row'
        textCol = document.createElement('div')
        textCol.className = 'col-sm'
        textCol.textContent = analysisContent[i]['content']
        graphCol = document.createElement('div')
        graphCol.className = 'col-sm'
        canvasArea = document.createElement('canvas')
        canvasArea.setAttribute('id', values[i][0])
        canvasArea.setAttribute('width', '400')
        canvasArea.setAttribute('height', '400')
        plotGraph(values[i][0], values[i][1], values[i][2])
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

function plotGraph(graphName, type, color) {
    graphNameMap = {
        'mostTalked': 'who_talked_most',
        'mostEmoji': 'most_emoji',
        'somethingWrong': 'most_del_msg',
        'mostMedia': 'most_media',
        'popularWords': 'popular_words',
        'talkingDay': 'talking_day',
        'talkingHrs': 'talking_hrs',
        'talkingMonths': 'talking_months',
        'semesterWise': 'semwise_talk'
    }
    $.getJSON("./assets/js/graph_data/" + graphNameMap[graphName] + ".json", function (json) {
        var ctx = document.getElementById(graphName).getContext('2d');
        var myChart = new Chart(ctx, {
            type: type,
            data: {
                labels: _.keys(json),
                datasets: [{
                    label: '# of Messages',
                    data: _.values(json),
                    backgroundColor: color,
                    borderWidth: 0
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: false
                        }
                    }]
                }
            }
        });
    });
}