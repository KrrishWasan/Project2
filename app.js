const flightList = document.getElementById('flight-list');
const loadingIndicator = document.getElementById('loading');
let page = 1; // For pagination
let isLoading = false;

document.getElementById('search-form').addEventListener('submit', (e) => {
    e.preventDefault();
    page = 1; // Reset page number
    flightList.innerHTML = ''; // Clear previous results
    loadFlights();
});

// Load flights based on search criteria
function loadFlights() {
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const date = document.getElementById('date').value;

    if (isLoading) return;

    isLoading = true;
    loadingIndicator.style.display = 'block';

    // Simulate an API call
    setTimeout(() => {
        for (let i = 0; i < 10; i++) { // Load 10 flights each time
            const flightItem = document.createElement('div');
            flightItem.className = 'flight-item';
            flightItem.innerHTML = `
                <strong>Flight ${page * 10 + i + 1}</strong><br>
                From: ${from}<br>
                To: ${to}<br>
                Date: ${date}<br>
                Price: $${Math.floor(Math.random() * 500) + 100}
            `;
            flightList.appendChild(flightItem);
        }
        isLoading = false;
        loadingIndicator.style.display = 'none';
        page++;
    }, 1000);
}

// Infinite scroll
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        loadFlights();
    }
});
