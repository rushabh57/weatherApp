const opations = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "2ba87c3335mshbe3002c15a92767p10d0a1jsnb10851cb892f",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const getWeather = (city) => {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    opations
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      cityName.innerHTML = city;

      cloud_pct.innerHTML = response.cloud_pct;
      temp.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
      wind_degrees.innerHTML = response.wind_degrees;
    });
  // .then((err) => console.error(err));
};

const submit = document.getElementById("submit");
const City = document.getElementById("City");
submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(City.value);
});
getWeather("Delhi");

// ================================
// Function For display Shanghai's weather
// ================================
function Shangai() {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Shangai",
    opations
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      document.getElementById("Shangai_cloud_pc").innerHTML =
        response.cloud_pct;
      document.getElementById("Shangai_temp").innerHTML = response.temp;
      document.getElementById("Shangai_feels_like").innerHTML =
        response.feels_like;
      document.getElementById("Shangai_humidity").innerHTML = response.humidity;
      document.getElementById("Shangai_min_temp").innerHTML = response.min_temp;
      document.getElementById("Shangai_max_temp").innerHTML = response.max_temp;
      document.getElementById("Shangai_wind_speed").innerHTML =
        response.wind_speed;
      document.getElementById("Shangai_sunrise").innerHTML = response.sunrise;
      document.getElementById("Shangai_sunset").innerHTML = response.sunset;
      document.getElementById("Shangai_wind_degrees").innerHTML =
        response.wind_degrees;
    })
    .catch((error) => {
      console.error(error);
    });
}

Shangai();
// Call Shangai() to fetch and display Shanghai's weather

// ================================
// Function For display Boston's weather
// ================================
function Boston() {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Boston",
    opations
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      document.getElementById("Boston_cloud_pc").innerHTML = response.cloud_pct;
      document.getElementById("Boston_temp").innerHTML = response.temp;
      document.getElementById("Boston_feels_like").innerHTML =
        response.feels_like;
      document.getElementById("Boston_humidity").innerHTML = response.humidity;
      document.getElementById("Boston_min_temp").innerHTML = response.min_temp;
      document.getElementById("Boston_max_temp").innerHTML = response.max_temp;
      document.getElementById("Boston_wind_speed").innerHTML =
        response.wind_speed;
      document.getElementById("Boston_sunrise").innerHTML = response.sunrise;
      document.getElementById("Boston_sunset").innerHTML = response.sunset;
      document.getElementById("Boston_wind_degrees").innerHTML =
        response.wind_degrees;
    })
    .catch((error) => {
      console.error(error);
    });
}

Boston();
// Call Boston() to fetch and display Shanghai's weather

// ================================
// Function For display Lucknow's weather
// ================================
function Lucknow() {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow",
    opations
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      document.getElementById("Lucknow_cloud_pc").innerHTML =
        response.cloud_pct;
      document.getElementById("Lucknow_temp").innerHTML = response.temp;
      document.getElementById("Lucknow_feels_like").innerHTML =
        response.feels_like;
      document.getElementById("Lucknow_humidity").innerHTML = response.humidity;
      document.getElementById("Lucknow_min_temp").innerHTML = response.min_temp;
      document.getElementById("Lucknow_max_temp").innerHTML = response.max_temp;
      document.getElementById("Lucknow_wind_speed").innerHTML =
        response.wind_speed;
      document.getElementById("Lucknow_sunrise").innerHTML = response.sunrise;
      document.getElementById("Lucknow_sunset").innerHTML = response.sunset;
      document.getElementById("Lucknow_wind_degrees").innerHTML =
        response.wind_degrees;
    })
    .catch((error) => {
      console.error(error);
    });
}

Lucknow();
// Call Lucknow() to fetch and display Shanghai's weather

// ================================
// Function For display mumbai's weather
// ================================
function Mumbai() {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai",
    opations
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      document.getElementById("Mumbai_cloud_pc").innerHTML = response.cloud_pct;
      document.getElementById("Mumbai_temp").innerHTML = response.temp;
      document.getElementById("Mumbai_feels_like").innerHTML =
        response.feels_like;
      document.getElementById("Mumbai_humidity").innerHTML = response.humidity;
      document.getElementById("Mumbai_min_temp").innerHTML = response.min_temp;
      document.getElementById("Mumbai_max_temp").innerHTML = response.max_temp;
      document.getElementById("Mumbai_wind_speed").innerHTML =
        response.wind_speed;
      document.getElementById("Mumbai_sunrise").innerHTML = response.sunrise;
      document.getElementById("Mumbai_sunset").innerHTML = response.sunset;
      document.getElementById("Mumbai_wind_degrees").innerHTML =
        response.wind_degrees;
    })
    .catch((error) => {
      console.error(error);
    });
}

Mumbai();
// Call  mumbai() to fetch and display Shanghai's weather

// ================================
// Function For display Ahmedabad's weather
// ================================
function Ahmedabad() {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai",
    opations
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      document.getElementById("Ahmedabad_cloud_pc").innerHTML =
        response.cloud_pct;
      document.getElementById("Ahmedabad_temp").innerHTML = response.temp;
      document.getElementById("Ahmedabad_feels_like").innerHTML =
        response.feels_like;
      document.getElementById("Ahmedabad_humidity").innerHTML =
        response.humidity;
      document.getElementById("Ahmedabad_min_temp").innerHTML =
        response.min_temp;
      document.getElementById("Ahmedabad_max_temp").innerHTML =
        response.max_temp;
      document.getElementById("Ahmedabad_wind_speed").innerHTML =
        response.wind_speed;
      document.getElementById("Ahmedabad_sunrise").innerHTML = response.sunrise;
      document.getElementById("Ahmedabad_sunset").innerHTML = response.sunset;
      document.getElementById("Ahmedabad_wind_degrees").innerHTML =
        response.wind_degrees;
    })
    .catch((error) => {
      console.error(error);
    });
}

Ahmedabad();
// Call  Ahmedabad() to fetch and display Shanghai's weather

// ================================
// Function For display Surat's weather
// ================================
function Surat() {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Surat",
    opations
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      document.getElementById("Surat_cloud_pc").innerHTML = response.cloud_pct;
      document.getElementById("Surat_temp").innerHTML = response.temp;
      document.getElementById("Surat_feels_like").innerHTML =
        response.feels_like;
      document.getElementById("Surat_humidity").innerHTML = response.humidity;
      document.getElementById("Surat_min_temp").innerHTML = response.min_temp;
      document.getElementById("Surat_max_temp").innerHTML = response.max_temp;
      document.getElementById("Surat_wind_speed").innerHTML =
        response.wind_speed;
      document.getElementById("Surat_sunrise").innerHTML = response.sunrise;
      document.getElementById("Surat_sunset").innerHTML = response.sunset;
      document.getElementById("Surat_wind_degrees").innerHTML =
        response.wind_degrees;
    })
    .catch((error) => {
      console.error(error);
    });
}

Surat();
// Call  Surat() to fetch and display Shanghai's weather
