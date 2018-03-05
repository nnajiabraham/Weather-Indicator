
        var x = document.getElementById("weather-data");
    
        function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition);
            } else { 
                x.innerHTML = "Geolocation is not supported by this browser.";
                console.log(x.innerHTML);
            }
        }

        function showPosition(position) {
            weather(position.coords.latitude, position.coords.longitude);
        }
        
        function weather(lat, long){
            var s = document.createElement("script");
            s.type = 'text/javascript';
            s.src = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat +
            "&lon=" + long + "&APPID=355b07f9a8db4b89db7ad2234be0e6b8&units=metric&callback=my_callback";
            document.body.appendChild(s);
        }

        function my_callback(weatherData){
            
            x.innerHTML = `It is ${weatherData.main.temp}&#8451; with ${weatherData.weather[0].description}`;
        }  

        window.onload = getLocation; 