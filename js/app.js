document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
});

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems);
});


let year = document.getElementById('fecha'),
    date = new Date()
year.innerHTML = date.getFullYear() + ' &COPY;  Copyright Todos los Derecho Reservados';
