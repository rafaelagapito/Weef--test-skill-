// Material Select Initialization
$(document).ready(function () {
    $('.mdb-select').materialSelect();
});




function getResult() {
    document.getElementById("form").style.display = "none";
    document.getElementById("carousel").style.display = "none";
    document.getElementById("result").style.display = "block";
}



var color = Chart.helpers.color;
var config = {
    type: 'radar',
    data: {
        labels: [
            ['Eating', 'Dinner'],
            ['Drinking', 'Water'], 'Sleeping', ['Designing', 'Graphics'], 'Coding', 'Cycling', 'Running'
        ],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: color(window.chartColors.red).alpha(0.2).rgbString(),
            borderColor: window.chartColors.red,
            pointBackgroundColor: window.chartColors.red,
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
            ]
        }, {
            label: 'My Second dataset',
            backgroundColor: color(window.chartColors.blue).alpha(0.2).rgbString(),
            borderColor: window.chartColors.blue,
            pointBackgroundColor: window.chartColors.blue,
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
            ]
        }]
    },
    options: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Radar Chart'
        },
        scale: {
            ticks: {
                beginAtZero: true
            }
        }
    }
};

window.onload = function () {
    window.myRadar = new Chart(document.getElementById('canvas'), config);
};

