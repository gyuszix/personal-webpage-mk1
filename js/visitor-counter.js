//visitor-counter

let visits = localStorage.getItem('visitCount');

if (visits === null) {
    visits = 1;
} else {
    visits = parseInt(visits) + 1;
}

localStorage.setItem('visitCount', visits);

document.getElementById('visitor-counter').textContent = `You have visited this webpage with this device and this browser ${visits} time(s).`;