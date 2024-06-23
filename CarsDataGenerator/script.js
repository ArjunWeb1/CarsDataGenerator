document.addEventListener('DOMContentLoaded', () => {
    let cars = [];

    // Fetch the JSON data
    fetch('cars_data.json')
        .then(response => response.json())
        .then(data => {
            cars = data;
        })
        .catch(error => console.error('Error fetching the JSON data:', error));

    document.getElementById('searchByName').addEventListener('click', () => {
        const searchQuery = document.getElementById('search').value.toLowerCase();
        const carDetailsDiv = document.getElementById('car_details');
        carDetailsDiv.innerHTML = ''; // Clear previous results

        const car = cars.find(c => c.name.toLowerCase() === searchQuery);

        if (car) {
            const carInfo = `
                <div class="car">
                    <h1>Name: ${car.name}</h1>
                    <img src="${car.imageUrl}" alt="${car.name}" class="car-image">
                    <h2>Model: ${car.Model}</h2>
                    <h2>Price: ${car.Price}</h2>
                    <h2>Speed: ${car.Speed}</h2>
                </div>
            `;
            carDetailsDiv.innerHTML = carInfo;
        } else {
            carDetailsDiv.innerHTML = '<p>Car not found</p>';
        }
    });
});
