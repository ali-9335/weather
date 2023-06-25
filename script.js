	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '0f80c7f174mshf8de865195401b7p16645fjsn3b1b5e0fc6cf',
			'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
		}
	};
	const getWeather = (city)=>{
		cityname.innerHTML=city
	
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
		.then(response => response.json())
		.then(response => {
			
		console.log(response)
					humidity.innerHTML = response.humidity
					max_temp.innerHTML = response.max_temp
					
					sunrise.innerHTML = response.sunrise
					sunset.innerHTML = response.sunset
					temp.innerHTML = response.temp
					wind_degrees.innerHTML = response.wind_degrees
					wind_speed.innerHTML = response.wind_speed
					feels_like.innerHTML = response.feels_like
	})
	
		.catch(err => console.error(err));
}
  submit.addEventListener("click",(e)=>{
	e.preventDefault()
	getWeather(city.value)
  })
  getWeather("Delhi")
	

		