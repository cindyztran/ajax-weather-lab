    
    let weatherData;

    const $weatherFor = $('#weatherFor');
    const $temperature = $('#temperature');
    const $feelsLike = $('#feelsLike');
    
    const $getWeather = $('#getWeather');

    function render() {
        $weatherFor.text = (data["sys"]["name"]);
            $temperature.text =(data["main"]["temp"]);
            $feelsLike = $(data["main"]["feels_like"]);
    }
    function handleGetData() {
        event.preventDefault();
    }

    let $input = $('input[type=text]').val();

    $.ajax ({
        url: 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=96179a5fe80fda98d6fccc841db6e2bc&units=imperial'
    })
    .then(
        function(data) {
            //if successful
            weatherData = data;
            render();
            

        }, 
        function(error) {
            console.log("bad request: ", error)
        }
    );
