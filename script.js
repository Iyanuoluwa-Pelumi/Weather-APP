const fetchBtn = document.querySelector('.fetch-btn');
const cityInput = document.querySelector('.city-name');

fetchBtn.addEventListener('click', async() => {
    const cityName = document.querySelector('.city-name').value.trim();
    const apiKey = '86c4d81d5c9a7108241f98962410c458'
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    if (!cityName) {
        alert('Enter a City Name');
        return;
    }

    document.querySelector('.result').textContent = 'Loading...'

    try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error(`Error: ${res.status}`);
        const data = await res.json();

        console.log(data)

        document.querySelector('.result').innerHTML = `
            <h2 class="cityName">${data.name}, ${data.sys.country}</h2>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p class="condition">Weather Condition: ${data.weather[0].description}.</p>
        `;
    } catch (err) {
        document.querySelector('.result').innerHTML = err.message;
    }

    cityInput.value = '';
})