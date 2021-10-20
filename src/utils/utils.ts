import { weatherAbbr, WeatherObject } from "../types/types";
import Snow from "../../images/Snow.png";
import Sleet from "../../images/Sleet.png";
import Clear from "../../images/Clear.png";
import Hail from "../../images/Hail.png";
import HeavyCLoud from "../../images/HeavyCloud.png";
import HeavyRain from "../../images/HeavyRain.png";
import LightCLoud from "../../images/LightCloud.png";
import LightRain from "../../images/LightRain.png";
import Shower from "../../images/Shower.png";
import ThunderStorm from "../../images/Thunderstorm.png";

const fetchWeather = async (
	woeid: string | number
): Promise<{ data: WeatherObject | null; error: string }> => {
	try {
		const response = await (
			await fetch(`${API}/getweather/${woeid}`, {
				method: "GET",
			})
		)
			.json()
			.catch(() => {});
		return {
			data: response,
			error: "",
		};
	} catch (error) {
		const err = error as Error;

		return {
			data: null,
			error: err.message,
		};
	}
};

const createDate = (dateString?: string): string => {
	const date = new Date(dateString || Date());
	if (date.getDate() === new Date().getDate() + 1) {
		return "Tomorrow";
	}
	const day = new Intl.DateTimeFormat("en-GB", {
		weekday: "short",
	}).format(date);
	const dateformat = date.getDate();
	const year = date.getFullYear();
	return `${day}, ${dateformat} ${year}`;
};

const getImagePath = (imageAbbr: weatherAbbr): string => {
	const imagePaths: Record<weatherAbbr, string> = {
		sn: Snow,
		sl: Sleet,
		h: Hail,
		t: ThunderStorm,
		hr: HeavyRain,
		lr: LightRain,
		s: Shower,
		hc: HeavyCLoud,
		lc: LightCLoud,
		c: Clear,
	};
	return imagePaths[imageAbbr];
};
export { fetchWeather, createDate, getImagePath };
