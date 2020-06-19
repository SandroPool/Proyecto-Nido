let ctx = document.getElementById('myChart').getContext('2d');
let chart = new Chart(ctx, {
    type: 'doughnut',
    data : {
        labels: [
            'Premios',
            'Sedes',
            'niveles'
        ],
        datasets: [{
            data: [25, 3, 2],
            backgroundColor: [
                'rgb(28, 145, 255)',
                'rgb(255, 240, 28)',
                'rgb(255, 6, 81)'
              ],
        }],
    },
    options: {}
})
