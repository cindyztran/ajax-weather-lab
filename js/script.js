    
    let weatherData;

    const $weatherFor = $('#weatherFor');
    const $temperature = $('#temperature');
    const $feelsLike = $('#feelsLike');
    const $weatherDescription = $('#weatherDescription')
  
    function render() {
        $weatherFor.text(weatherData['name']);
        $temperature.text(Math.round(weatherData['main']['temp'])).append('°F');
        $feelsLike.text(Math.round(weatherData['main']['feels_like'])).append('°F');
        $weatherDescription.text(weatherData['weather'][0]['description']);


    };

    function handleGetData(event) {
        event.preventDefault();
        const $searchCity = $('input#search').val();
    
        $.ajax ({
            url: `https://api.openweathermap.org/data/2.5/weather?q=${$searchCity}&units=imperial&APPID=96179a5fe80fda98d6fccc841db6e2bc`
        })
        .then(
            function(data) {
                weatherData = data;
                render();
                
    
            }, 
            function(error) {
                console.log('bad request: ', error)
            }
        );
    }

    $('form').on('submit', handleGetData);