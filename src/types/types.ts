export type SearchType = {
	setSearch: any;
	search: boolean;
};
type FormElements = HTMLFormControlsCollection & {
	location: HTMLInputElement;
};
export type FormElement = HTMLFormElement & {
	readonly elements: FormElements;
};
export type WeatherLocation = {
	title: string;
	woeid: string | number;
	[key: string]: any;
};
export type SearchFormProps = {
	closeContainer: () => void;
};
export type SearchProps = {
	setSearch: React.Dispatch<React.SetStateAction<boolean>>;
};
export type IndividualWeatherObject = {
	[key: string]: any;
};
export type WeatherObject = {
	title: string;
	woeid: string | number;
	consolidated_weather: IndividualWeatherObject[];
};
export enum weatherAbbr {
	sn = "sn",
	sl = "sl",
	h = "h",
	t = "t",
	hr = "hr",
	lr = "lr",
	s = "s",
	hc = "hc",
	lc = "lc",
	c = "c",
}
