interface CurrentWeather {
	is_day: number;
	temperature: number;
	temperature_unit: string;
	time: string;
	weathercode: number;
	winddirection: number;
	windspeed: number;
}
interface Daily {
	apparent_temperature_max: [number];
	apparent_temperature_min: [number];
	sunrise: [number];
	sunset: [number];
	temperature_2m_max: [number];
	temperature_2m_min: [number];
	time: [number];
	uv_index_clear_sky_max: [number];
	uv_index_max: [number];
	weathercode: [number];
}
interface DailyUnits {
	apparent_temperature_max: string;
	apparent_temperature_min: string;
	temperature_unit: String
	sunrise: string;
	sunset: string;
	temperature_2m_max: string;
	temperature_2m_min: string;
	time: string;
	uv_index_clear_sky_max: string;
	uv_index_max: string;
	weathercode: string;
}
interface Hourly {
	apparent_temperature: [number];
	temperature_unit: [number];
	precipitation: [number];
	precipitation_probability: [number];
	rain: [number];
	relativehumidity_2m: [number];
	showers: [number];
	snow_depth: [number];
	snowfall: [number];
	temperature_2m: [number];
	time: [string];
	uv_index: [number];
	uv_index_clear_sky: [number];
	windgusts_10m: [number];
}
interface HourlyUnits {
	apparent_temperature: String
	precipitation: String
	precipitation_probability: String
	rain: String
	relativehumidity_2m: String
	showers: String
	snow_depth: String
	snowfall: String
	temperature_2m: String
	time: String
	uv_index: String
	uv_index_clear_sky: String
	windgusts_10m: String
}
interface Root {
	current_weather: CurrentWeather;
	daily: Daily;
	daily_units: DailyUnits;
	elevation: number;
	generationtime_ms: number;
	hourly: Hourly;
	hourly_units: HourlyUnits;
	latitude: number;
	longitude: number;
	timezone: string;
	timezone_abbreviation: string;
	utc_offset_seconds: number;
}