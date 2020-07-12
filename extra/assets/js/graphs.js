function mostTalked() {
    $.getJSON("./assets/js/graph_data/who_talked_most.json", function(json){
        var ctx = document.getElementById('mostTalked').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
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

function mediaLord() {
    $.getJSON("./assets/js/graph_data/most_media.json", function(json){
        var ctx = document.getElementById('mediaLord').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
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