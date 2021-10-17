import { WeatherObject } from "../types/types";

export enum Weather {
	Add = "add",
	Change = "change",
}

export type WeatherReducer = (
	state: WeatherObject,
	action: { type: Weather; payload: WeatherObject }
) => WeatherObject;

export const reducer: WeatherReducer = (state, action): WeatherObject => {
	switch (action.type) {
		case Weather.Add:
			return { ...state, ...action.payload };
		default:
			return { ...state };
	}
};
