const weatherIcons = {
  sun: '<svg viewBox="0 0 48 48" fill="none"><g class="icon-sun-rays icon-sun-centered" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M24 5v4m0 30v4M5 24h4m30 0h4M10.6 10.6l2.8 2.8m21.2 21.2 2.8 2.8m0-26.8-2.8 2.8M13.4 34.6l-2.8 2.8"/></g><circle cx="24" cy="24" r="8" stroke="currentColor" stroke-width="2"/></svg>',
  partly: '<svg viewBox="0 0 48 48" fill="none"><g class="icon-sun-rays icon-sun-corner" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M30 5v4m12 11h-4m-4.5-6.5 2.8-2.8"/></g><circle cx="30" cy="20" r="7" stroke="currentColor" stroke-width="2"/><path class="icon-cloud" d="M12 37h22a8 8 0 0 0 .3-16 11 11 0 0 0-21.4 2.2A7 7 0 0 0 12 37Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  cloud: '<svg viewBox="0 0 48 48" fill="none"><path class="icon-cloud" d="M12 36h24a9 9 0 0 0 .4-18 12 12 0 0 0-22.8 2.4A7.5 7.5 0 0 0 12 36Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 41h24" stroke="currentColor" stroke-opacity=".35" stroke-width="1.5" stroke-linecap="round"/></svg>',
  fog: '<svg viewBox="0 0 48 48" fill="none"><path class="icon-cloud" d="M12 28h24a8.5 8.5 0 0 0 .4-17 12 12 0 0 0-22.8 2.4A7.5 7.5 0 0 0 12 28Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><g class="icon-mist" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M8 34h32M12 40h24"/></g></svg>',
  drizzle: '<svg viewBox="0 0 48 48" fill="none"><path class="icon-cloud" d="M12 29h24a8.5 8.5 0 0 0 .4-17 12 12 0 0 0-22.8 2.4A7.5 7.5 0 0 0 12 29Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><g class="icon-rain" fill="currentColor"><circle cx="16" cy="36" r="1.5"/><circle cx="24" cy="39" r="1.5"/><circle cx="32" cy="36" r="1.5"/></g></svg>',
  rain: '<svg viewBox="0 0 48 48" fill="none"><path class="icon-cloud" d="M12 28h24a8.5 8.5 0 0 0 .4-17 12 12 0 0 0-22.8 2.4A7.5 7.5 0 0 0 12 28Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><g class="icon-rain" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="m16 33-2 4m12-4-2 4m12-4-2 4"/></g></svg>',
  snow: '<svg viewBox="0 0 48 48" fill="none"><path class="icon-cloud" d="M12 28h24a8.5 8.5 0 0 0 .4-17 12 12 0 0 0-22.8 2.4A7.5 7.5 0 0 0 12 28Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><g class="icon-snow" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M16 33v8m-3.5-6 7 4m0-4-7 4m11-6v8m-3.5-6 7 4m0-4-7 4m11-6v8m-3.5-6 7 4m0-4-7 4"/></g></svg>',
  sleet: '<svg viewBox="0 0 48 48" fill="none"><path class="icon-cloud" d="M12 28h24a8.5 8.5 0 0 0 .4-17 12 12 0 0 0-22.8 2.4A7.5 7.5 0 0 0 12 28Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path class="icon-rain" d="m17 33-2 4m20-4-2 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><g class="icon-snow" fill="currentColor"><circle cx="24" cy="35" r="2"/><circle cx="24" cy="40" r="1.3"/></g></svg>',
  thunder: '<svg viewBox="0 0 48 48" fill="none"><path class="icon-cloud" d="M12 28h24a8.5 8.5 0 0 0 .4-17 12 12 0 0 0-22.8 2.4A7.5 7.5 0 0 0 12 28Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path class="icon-lightning" d="m26 28-9 12h8l-1 7 10-14h-8l2-5Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>',
  hail: '<svg viewBox="0 0 48 48" fill="none"><path class="icon-cloud" d="M12 28h24a8.5 8.5 0 0 0 .4-17 12 12 0 0 0-22.8 2.4A7.5 7.5 0 0 0 12 28Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path class="icon-lightning" d="m26 28-9 12h8l-1 7 10-14h-8l2-5Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><g class="icon-snow" fill="currentColor"><circle cx="35" cy="36" r="1.5"/><circle cx="32" cy="42" r="1.2"/></g></svg>'
};

const weatherDescriptions = {
  0: ["Ясно", "sun"],
  1: ["Преимущественно ясно", "sun"],
  2: ["Переменная облачность", "partly"],
  3: ["Облачно", "cloud"],
  45: ["Туман", "fog"],
  48: ["Изморозь и туман", "fog"],
  51: ["Слабая морось", "drizzle"],
  53: ["Морось", "drizzle"],
  55: ["Сильная морось", "drizzle"],
  56: ["Ледяная морось", "sleet"],
  57: ["Сильная ледяная морось", "sleet"],
  61: ["Небольшой дождь", "rain"],
  63: ["Дождь", "rain"],
  65: ["Сильный дождь", "rain"],
  66: ["Ледяной дождь", "sleet"],
  67: ["Сильный ледяной дождь", "sleet"],
  71: ["Небольшой снег", "snow"],
  73: ["Снег", "snow"],
  75: ["Сильный снег", "snow"],
  77: ["Снежная крупа", "sleet"],
  80: ["Кратковременный дождь", "rain"],
  81: ["Ливень", "rain"],
  82: ["Сильный ливень", "rain"],
  85: ["Снегопад", "snow"],
  86: ["Сильный снегопад", "snow"],
  95: ["Гроза", "thunder"],
  96: ["Гроза с градом", "hail"],
  99: ["Сильная гроза с градом", "hail"]
};
const weekDays = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
const windDirections = ["северный", "северо-восточный", "восточный", "юго-восточный", "южный", "юго-западный", "западный", "северо-западный"];
const defaultCity = {
  name: "Москва",
  country: "Россия",
  latitude: 55.7558,
  longitude: 37.6173,
  timezone: "Europe/Moscow"
};
const weatherEndpoint = "https://api.open-meteo.com/v1/forecast";
const geocodingEndpoint = "https://geocoding-api.open-meteo.com/v1/search";
const favoritesStorageKey = "atmos.favoriteCities";

const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#city-search");
const suggestions = document.querySelector("#city-suggestions");
const feedback = document.querySelector("#search-feedback");
const refreshButton = document.querySelector("#refresh-button");
const statusMessage = document.querySelector("#update-status");
const weekList = document.querySelector("#week-list");
const hourlyTrack = document.querySelector("#hourly-track");
const chartWrap = document.querySelector("#chart-wrap");
const favoriteToggle = document.querySelector("#favorite-toggle");
const favoriteList = document.querySelector("#favorite-list");
const favoritesEmpty = document.querySelector("#favorites-empty");
const forecastTabs = [...document.querySelectorAll(".forecast-tab")];
const forecastPanels = [...document.querySelectorAll('[role="tabpanel"]')];
let selectedCity = defaultCity;
let weather = null;
let selectedUnit = "c";
let selectedDayIndex = 0;
let weatherRequestId = 0;
let searchTimer = 0;
let searchController = null;
let cityResults = [];
let searchResultQuery = "";
let favoriteCities = loadFavoriteCities();

function normalizedName(value) {
  return value.trim().toLocaleLowerCase().replaceAll("ё", "е").replaceAll(/[\s-]+/g, " ");
}

function cityKey(city) {
  return `${city.latitude.toFixed(3)},${city.longitude.toFixed(3)}`;
}

function loadFavoriteCities() {
  try {
    const stored = localStorage.getItem(favoritesStorageKey);
    if (!stored) return [];
    const parsed = JSON.parse(stored);
    if (!Array.isArray(parsed)) throw new TypeError("Список избранного должен быть массивом.");
    return parsed.filter((city) =>
      city &&
      typeof city.name === "string" &&
      typeof city.country === "string" &&
      Number.isFinite(city.latitude) &&
      Number.isFinite(city.longitude)
    ).map((city) => ({
      name: city.name,
      country: city.country,
      admin1: typeof city.admin1 === "string" ? city.admin1 : "",
      latitude: city.latitude,
      longitude: city.longitude,
      timezone: typeof city.timezone === "string" ? city.timezone : "UTC"
    }));
  } catch (error) {
    console.error("Не удалось прочитать избранные города:", error);
    return [];
  }
}

function saveFavoriteCities() {
  try {
    localStorage.setItem(favoritesStorageKey, JSON.stringify(favoriteCities));
    return true;
  } catch (error) {
    console.error("Не удалось сохранить избранные города:", error);
    setStatus("Избранное не сохранено на этом устройстве.");
    showFeedback("Не удалось сохранить избранные города в браузере.");
    return false;
  }
}

function updateFavoriteToggle() {
  const isFavorite = favoriteCities.some((city) => cityKey(city) === cityKey(selectedCity));
  favoriteToggle.classList.toggle("is-favorite", isFavorite);
  favoriteToggle.setAttribute("aria-pressed", String(isFavorite));
  favoriteToggle.setAttribute("aria-label", isFavorite ? "Удалить город из избранного" : "Добавить город в избранное");
  favoriteToggle.title = isFavorite ? "Удалить из избранного" : "Добавить в избранное";
}

function renderFavorites() {
  const fragment = document.createDocumentFragment();
  favoriteCities.forEach((city) => {
    const isSelected = cityKey(city) === cityKey(selectedCity);
    const item = document.createElement("article");
    item.className = `favorite-card${isSelected ? " is-selected" : ""}`;

    const selectButton = document.createElement("button");
    selectButton.type = "button";
    selectButton.className = "favorite-city";
    selectButton.setAttribute("aria-label", `Показать погоду: ${city.name}, ${city.country}`);
    selectButton.setAttribute("aria-current", String(isSelected));
    const icon = document.createElement("span");
    icon.className = "favorite-city-pin";
    icon.setAttribute("aria-hidden", "true");
    icon.innerHTML = '<svg viewBox="0 0 24 24" fill="none"><path d="M19 10.1c0 5-7 11-7 11s-7-6-7-11a7 7 0 1 1 14 0Z" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="10" r="2.3" stroke="currentColor" stroke-width="1.6"/></svg>';
    const text = document.createElement("span");
    text.className = "favorite-city-copy";
    const name = document.createElement("span");
    name.className = "favorite-city-name";
    name.textContent = city.name;
    const details = document.createElement("small");
    details.textContent = [city.admin1, city.country].filter(Boolean).join(", ");
    text.append(name, details);
    selectButton.append(icon, text);
    selectButton.addEventListener("click", () => loadWeather(city));

    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.className = "favorite-remove";
    removeButton.setAttribute("aria-label", `Удалить город ${city.name} из избранного`);
    removeButton.title = "Удалить из избранного";
    removeButton.innerHTML = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m7 7 10 10M17 7 7 17" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>';
    removeButton.addEventListener("click", () => removeFavorite(city));

    item.append(selectButton, removeButton);
    fragment.append(item);
  });
  favoriteList.replaceChildren(fragment);
  favoritesEmpty.hidden = favoriteCities.length > 0;
  updateFavoriteToggle();
}

function toggleFavorite() {
  const key = cityKey(selectedCity);
  const index = favoriteCities.findIndex((city) => cityKey(city) === key);
  if (index >= 0) {
    favoriteCities.splice(index, 1);
  } else {
    favoriteCities.push({
      name: selectedCity.name,
      country: selectedCity.country,
      admin1: selectedCity.admin1 || "",
      latitude: selectedCity.latitude,
      longitude: selectedCity.longitude,
      timezone: selectedCity.timezone
    });
  }
  saveFavoriteCities();
  renderFavorites();
}

function removeFavorite(city) {
  favoriteCities = favoriteCities.filter((item) => cityKey(item) !== cityKey(city));
  saveFavoriteCities();
  renderFavorites();
}

function convertTemperature(value) {
  if (!Number.isFinite(value)) return null;
  return selectedUnit === "f" ? (value * 9) / 5 + 32 : value;
}

function temperature(value) {
  const converted = convertTemperature(value);
  return converted === null ? "—" : `${Math.round(converted)}°`;
}

function number(value, digits = 0) {
  return Number.isFinite(value)
    ? value.toLocaleString("ru-RU", { maximumFractionDigits: digits })
    : "—";
}

function weatherForCode(code) {
  return weatherDescriptions[code] || ["Погодные условия не определены", "cloud"];
}

function directionForDegrees(degrees) {
  if (!Number.isFinite(degrees)) return "—";
  return windDirections[Math.round(degrees / 45) % windDirections.length];
}

function showFeedback(message) {
  feedback.textContent = message;
  feedback.hidden = false;
}

function clearFeedback() {
  feedback.textContent = "";
  feedback.hidden = true;
  searchInput.removeAttribute("aria-invalid");
}

function setStatus(message, loading = false) {
  statusMessage.classList.toggle("is-loading", loading);
  statusMessage.replaceChildren();
  const dot = document.createElement("span");
  dot.className = "status-dot";
  dot.setAttribute("aria-hidden", "true");
  statusMessage.append(dot, document.createTextNode(` ${message}`));
}

function localClock(date, timeZone, options) {
  return new Intl.DateTimeFormat("ru-RU", { timeZone, ...options }).format(date);
}

function renderDate() {
  document.querySelector("#date-line").textContent = localClock(new Date(), selectedCity.timezone, {
    weekday: "long",
    day: "numeric",
    month: "long"
  });
}

function renderCurrentWeather() {
  const current = weather?.current;
  document.querySelector("#city-name").textContent = selectedCity.name;
  document.querySelector(".location-country").textContent = selectedCity.country;
  document.querySelector("#current-unit").textContent = selectedUnit === "f" ? "°F" : "°C";
  if (!current) {
    document.querySelector("#current-temperature").textContent = "—";
    document.querySelector("#current-condition").textContent = "Нет данных о погоде";
    const currentIcon = document.querySelector("#current-icon");
    currentIcon.replaceChildren();
    delete currentIcon.dataset.weatherIcon;
    document.querySelector("#feels-like").textContent = "—";
    for (const id of ["humidity", "wind", "wind-direction", "pressure", "visibility"]) {
      document.querySelector(`#${id}`).textContent = "—";
    }
    return;
  }

  const [condition, icon] = weatherForCode(current.weather_code);
  document.querySelector("#current-temperature").textContent = number(convertTemperature(current.temperature_2m));
  document.querySelector("#current-condition").textContent = condition;
  const currentIcon = document.querySelector("#current-icon");
  currentIcon.dataset.weatherIcon = icon;
  currentIcon.innerHTML = weatherIcons[icon];
  document.querySelector("#feels-like").textContent = temperature(current.apparent_temperature);
  document.querySelector("#humidity").textContent = number(current.relative_humidity_2m);
  document.querySelector("#wind").textContent = number(current.wind_speed_10m, 1);
  document.querySelector("#wind-direction").textContent = directionForDegrees(current.wind_direction_10m);
  const pressure = current.surface_pressure ?? current.pressure_msl;
  document.querySelector("#pressure").textContent = number(Number.isFinite(pressure) ? pressure / 1.33322 : null);
  document.querySelector("#visibility").textContent = number(
    Number.isFinite(current.visibility) ? current.visibility / 1000 : null,
    1
  );
}

function renderHourly() {
  if (!weather) {
    hourlyTrack.replaceChildren();
    return;
  }
  const { hourly, current } = weather;
  const currentHour = current.time.slice(0, 13);
  let startIndex = hourly.time.findIndex((time) => time.slice(0, 13) === currentHour);
  if (startIndex < 0) startIndex = hourly.time.findIndex((time) => time >= current.time);
  if (startIndex < 0) startIndex = 0;

  hourlyTrack.innerHTML = Array.from({ length: 24 }, (_, offset) => {
    const index = startIndex + offset;
    if (index >= hourly.time.length) return "";
    const [condition, icon] = weatherForCode(hourly.weather_code[index]);
    const rain = hourly.precipitation_probability[index];
    return `<article class="hour-card${offset === 0 ? " is-day-start" : ""}" title="${condition}">
      <span class="hour-time">${offset === 0 ? "Сейчас" : hourly.time[index].slice(11, 16)}</span>
      <span class="hour-weather weather-icon" data-weather-icon="${icon}" aria-hidden="true">${weatherIcons[icon]}</span>
      <span class="hour-temp">${temperature(hourly.temperature_2m[index])}</span>
      <span class="hour-rain">${Number.isFinite(rain) ? `Осадки ${number(rain)}%` : "Осадки —"}</span>
      <span class="hour-wind">Ветер ${number(hourly.wind_speed_10m[index], 1)} м/с</span>
    </article>`;
  }).join("");
}

function localDayName(dateString) {
  const [year, month, day] = dateString.split("-").map(Number);
  return weekDays[new Date(Date.UTC(year, month - 1, day)).getUTCDay()];
}

function dailyForecast() {
  if (!weather) return [];
  const { daily } = weather;
  return daily.time.map((date, index) => {
    const [condition, icon] = weatherForCode(daily.weather_code[index]);
    return {
      date,
      dayName: index === 0 ? "Сегодня" : localDayName(date),
      high: daily.temperature_2m_max[index],
      low: daily.temperature_2m_min[index],
      condition,
      icon,
      rain: daily.precipitation_probability_max[index],
      wind: daily.wind_speed_10m_max[index]
    };
  });
}

function dayDetails(day) {
  const rain = Number.isFinite(day.rain) ? `осадки ${number(day.rain)}%` : "осадки —";
  return `${day.dayName}: ${day.condition}, ${temperature(day.high)} / ${temperature(day.low)}, ${rain}, ветер ${number(day.wind, 1)} м/с`;
}

function renderWeekly() {
  const days = dailyForecast();
  weekList.innerHTML = days.map((day, index) => `<div class="day-row${index === selectedDayIndex ? " is-selected" : ""}" data-day-index="${index}" role="button" tabindex="0" aria-label="${dayDetails(day)}">
    <span class="day-name${index === 0 ? " today" : ""}">${day.dayName}</span>
    <span class="day-weather"><span class="weather-icon" data-weather-icon="${day.icon}" aria-hidden="true">${weatherIcons[day.icon]}</span><span class="day-condition">${day.condition}</span></span>
    <span class="day-temps"><span class="day-high">${temperature(day.high)}</span><span class="day-low">${temperature(day.low)}</span></span>
    <span class="day-rain">${Number.isFinite(day.rain) ? `Осадки ${number(day.rain)}%` : "Осадки —"}<br>Ветер ${number(day.wind, 1)} м/с</span>
  </div>`).join("");
  renderChart(days);
}

function renderChart(days) {
  if (!days.length) {
    chartWrap.replaceChildren();
    document.querySelector(".chart-caption").textContent = "Нет данных для графика";
    return;
  }
  const width = 460;
  const height = 170;
  const left = 35;
  const right = 435;
  const top = 24;
  const bottom = 135;
  const values = days.map((day) => convertTemperature(day.high));
  const min = Math.min(...values) - 3;
  const max = Math.max(...values) + 3;
  const x = (index) => left + (index * (right - left)) / (values.length - 1);
  const y = (value) => bottom - ((value - min) / (max - min || 1)) * (bottom - top);
  const points = values.map((value, index) => `${x(index)},${y(value)}`);
  const line = points.join(" ");
  const area = `${x(0)},${bottom} ${line} ${x(values.length - 1)},${bottom}`;
  const grid = [0, 1, 2].map((index) => {
    const gridY = top + (index * (bottom - top)) / 2;
    const label = max - (index * (max - min)) / 2;
    return `<line class="chart-grid" x1="${left}" y1="${gridY}" x2="${right}" y2="${gridY}"/><text class="chart-label" x="0" y="${gridY + 3}">${Math.round(label)}°</text>`;
  }).join("");
  const marks = values.map((value, index) => `<circle class="chart-point" data-day-index="${index}" cx="${x(index)}" cy="${y(value)}" r="3.5" tabindex="0" role="button" aria-pressed="${index === selectedDayIndex}" aria-label="${dayDetails(days[index])}"/><text class="chart-temp" x="${x(index)}" y="${y(value) - 11}" text-anchor="middle">${Math.round(value)}°</text><text class="chart-label" x="${x(index)}" y="157" text-anchor="middle">${index === 0 ? "Сег." : localDayName(days[index].date)}</text>`).join("");

  chartWrap.innerHTML = `<svg viewBox="0 0 ${width} ${height}" role="group" aria-label="Интерактивный график максимальной температуры на ближайшие семь дней">
    <defs><linearGradient id="chart-fill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#8fc9ed" stop-opacity=".2"/><stop offset="100%" stop-color="#8fc9ed" stop-opacity="0"/></linearGradient></defs>
    ${grid}<polygon class="chart-area" points="${area}"/><polyline class="chart-line" points="${line}"/>${marks}
  </svg>`;
  document.querySelector(".chart-caption").textContent = dayDetails(days[selectedDayIndex] || days[0]);
}

function render() {
  renderDate();
  renderCurrentWeather();
  renderFavorites();
  renderHourly();
  renderWeekly();
}

function weatherUrl(city) {
  const params = new URLSearchParams({
    latitude: String(city.latitude),
    longitude: String(city.longitude),
    current: "temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,pressure_msl,surface_pressure,wind_speed_10m,wind_direction_10m,visibility",
    hourly: "temperature_2m,precipitation_probability,weather_code,wind_speed_10m,wind_direction_10m",
    daily: "weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,wind_speed_10m_max,wind_direction_10m_dominant",
    temperature_unit: "celsius",
    wind_speed_unit: "ms",
    precipitation_unit: "mm",
    timezone: "auto",
    forecast_days: "7"
  });
  return `${weatherEndpoint}?${params}`;
}

async function loadWeather(city = selectedCity) {
  const requestId = ++weatherRequestId;
  const cityChanged = selectedCity.latitude !== city.latitude || selectedCity.longitude !== city.longitude;
  selectedCity = city;
  if (cityChanged) {
    weather = null;
    selectedDayIndex = 0;
  }
  refreshButton.disabled = true;
  refreshButton.classList.add("is-loading");
  clearFeedback();
  setStatus(`Загружаем погоду для города «${city.name}»…`, true);
  if (cityChanged) render();
  try {
    const response = await fetch(weatherUrl(city));
    if (!response.ok) throw new Error(`Open-Meteo: HTTP ${response.status}`);
    const result = await response.json();
    if (!result.current || !result.hourly || !result.daily || !Array.isArray(result.hourly.time) || !Array.isArray(result.daily.time)) {
      throw new Error("Open-Meteo вернул неполные данные прогноза.");
    }
    if (requestId !== weatherRequestId) return;
    weather = result;
    selectedCity.timezone = result.timezone || selectedCity.timezone;
    selectedDayIndex = 0;
    render();
    const observedAt = result.current.time;
    setStatus(`Актуально на ${observedAt.slice(11, 16)} · ${result.timezone || selectedCity.timezone}`);
  } catch (error) {
    if (requestId !== weatherRequestId) return;
    console.error("Не удалось загрузить прогноз Open-Meteo:", error);
    render();
    const message = "Не удалось загрузить погоду. Проверьте подключение к интернету и попробуйте обновить данные.";
    setStatus(message);
    showFeedback(message);
  } finally {
    if (requestId === weatherRequestId) {
      refreshButton.disabled = false;
      refreshButton.classList.remove("is-loading");
    }
  }
}

function closeSuggestions() {
  suggestions.hidden = true;
  searchInput.setAttribute("aria-expanded", "false");
}

function showSuggestionsMessage(message) {
  suggestions.replaceChildren();
  const item = document.createElement("div");
  item.className = "city-suggestion-message";
  item.textContent = message;
  suggestions.append(item);
  suggestions.hidden = false;
  searchInput.setAttribute("aria-expanded", "true");
}

function renderSuggestions(cities) {
  cityResults = cities;
  suggestions.replaceChildren();
  if (!cities.length) {
    showSuggestionsMessage("Город не найден. Попробуйте другое название.");
    return;
  }
  cities.forEach((city, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "city-suggestion";
    button.id = `city-suggestion-${index}`;
    button.setAttribute("role", "option");
    const title = document.createElement("span");
    title.textContent = city.name;
    const details = document.createElement("small");
    details.textContent = [city.admin1, city.country].filter(Boolean).join(", ");
    button.append(title, details);
    button.addEventListener("click", () => {
      closeSuggestions();
      clearFeedback();
      searchInput.value = "";
      loadWeather(city);
    });
    suggestions.append(button);
  });
  suggestions.hidden = false;
  searchInput.setAttribute("aria-expanded", "true");
}

async function searchCities(query) {
  searchResultQuery = normalizedName(query);
  searchController?.abort();
  searchController = new AbortController();
  const controller = searchController;
  showSuggestionsMessage("Ищем города…");
  const languages = /[а-яё]/i.test(query) ? ["ru", "en"] : ["en", "ru"];
  try {
    const results = await Promise.allSettled(languages.map(async (language) => {
      const params = new URLSearchParams({ name: query, count: "8", language, format: "json" });
      const response = await fetch(`${geocodingEndpoint}?${params}`, { signal: controller.signal });
      if (!response.ok) throw new Error(`Open-Meteo Geocoding: HTTP ${response.status}`);
      const data = await response.json();
      return data.results || [];
    }));
    if (controller.signal.aborted) return [];
    const successful = results.filter((result) => result.status === "fulfilled");
    if (!successful.length) throw results[0].reason;
    const found = successful.flatMap((result) => result.value);
    const uniqueCities = new Map();
    found.forEach((city) => {
      const key = `${city.latitude.toFixed(3)},${city.longitude.toFixed(3)}`;
      const existing = uniqueCities.get(key);
      if (!existing || (languages[0] === "ru" && !existing.name)) {
        uniqueCities.set(key, {
          name: city.name,
          country: city.country || "",
          admin1: city.admin1 || "",
          latitude: city.latitude,
          longitude: city.longitude,
          timezone: city.timezone || "UTC"
        });
      }
    });
    const cities = [...uniqueCities.values()].sort((first, second) => {
      const normalizedQuery = normalizedName(query);
      const firstExact = normalizedName(first.name) === normalizedQuery ? 0 : 1;
      const secondExact = normalizedName(second.name) === normalizedQuery ? 0 : 1;
      return firstExact - secondExact;
    }).slice(0, 10);
    renderSuggestions(cities);
    return cities;
  } catch (error) {
    if (controller.signal.aborted) return [];
    console.error("Не удалось выполнить поиск города:", error);
    closeSuggestions();
    showFeedback("Не удалось найти город. Проверьте подключение к интернету и попробуйте ещё раз.");
    return [];
  }
}

function scheduleCitySearch() {
  window.clearTimeout(searchTimer);
  searchController?.abort();
  clearFeedback();
  closeSuggestions();
  const query = searchInput.value.trim();
  if (query.length < 2) {
    return;
  }
  searchTimer = window.setTimeout(() => searchCities(query), 350);
}

searchInput.addEventListener("input", scheduleCitySearch);
searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeSuggestions();
    return;
  }
  if (event.key === "ArrowDown" && !suggestions.hidden) {
    const firstSuggestion = suggestions.querySelector("button");
    if (firstSuggestion) {
      event.preventDefault();
      firstSuggestion.focus();
    }
  }
});

searchForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  window.clearTimeout(searchTimer);
  const query = searchInput.value.trim();
  if (!query) {
    showFeedback("Введите название города.");
    searchInput.setAttribute("aria-invalid", "true");
    searchInput.focus();
    return;
  }
  const exactMatch = searchResultQuery === normalizedName(query) && cityResults.find((city) =>
    [city.name, city.admin1].filter(Boolean).some((name) => normalizedName(name) === normalizedName(query))
  );
  const results = exactMatch ? cityResults : await searchCities(query);
  const city = exactMatch || results[0];
  if (!city) return;
  closeSuggestions();
  searchInput.value = "";
  clearFeedback();
  loadWeather(city);
});

document.addEventListener("click", (event) => {
  if (!searchForm.contains(event.target)) closeSuggestions();
});

document.querySelectorAll(".unit-button").forEach((button) => {
  button.addEventListener("click", () => {
    selectedUnit = button.dataset.unit;
    document.querySelectorAll(".unit-button").forEach((unitButton) => {
      const active = unitButton === button;
      unitButton.classList.toggle("is-active", active);
      unitButton.setAttribute("aria-pressed", String(active));
    });
    render();
  });
});

function selectForecastTab(tab, focus = false) {
  forecastTabs.forEach((item, index) => {
    const active = item === tab;
    item.classList.toggle("is-active", active);
    item.setAttribute("aria-selected", String(active));
    item.tabIndex = active ? 0 : -1;
    forecastPanels[index].hidden = !active;
  });
  if (focus) tab.focus();
}

forecastTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => selectForecastTab(tab));
  tab.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    const step = event.key === "ArrowRight" ? 1 : -1;
    selectForecastTab(forecastTabs[(index + step + forecastTabs.length) % forecastTabs.length], true);
  });
});

function selectDay(index) {
  const days = dailyForecast();
  if (!days[index]) return;
  selectedDayIndex = index;
  weekList.querySelectorAll(".day-row").forEach((row) => {
    row.classList.toggle("is-selected", Number(row.dataset.dayIndex) === index);
  });
  chartWrap.querySelectorAll(".chart-point").forEach((point) => {
    point.setAttribute("aria-pressed", String(Number(point.dataset.dayIndex) === index));
  });
  document.querySelector(".chart-caption").textContent = dayDetails(days[index]);
}

chartWrap.addEventListener("click", (event) => {
  const point = event.target.closest(".chart-point");
  if (point) selectDay(Number(point.dataset.dayIndex));
});
chartWrap.addEventListener("focusin", (event) => {
  const point = event.target.closest(".chart-point");
  if (point) {
    const day = dailyForecast()[Number(point.dataset.dayIndex)];
    if (day) document.querySelector(".chart-caption").textContent = dayDetails(day);
  }
});
chartWrap.addEventListener("focusout", () => {
  const day = dailyForecast()[selectedDayIndex];
  if (day) document.querySelector(".chart-caption").textContent = dayDetails(day);
});
weekList.addEventListener("click", (event) => {
  const row = event.target.closest(".day-row");
  if (row) selectDay(Number(row.dataset.dayIndex));
});
weekList.addEventListener("keydown", (event) => {
  const row = event.target.closest(".day-row");
  if (row && (event.key === "Enter" || event.key === " ")) {
    event.preventDefault();
    selectDay(Number(row.dataset.dayIndex));
  }
});

refreshButton.addEventListener("click", () => loadWeather());
favoriteToggle.addEventListener("click", toggleFavorite);

render();
loadWeather();
