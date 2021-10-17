import { reducer, Weather, WeatherReducer } from "../reducers/reducer";
import { WeatherObject } from "../types/types";

type ContextType = {
	state: WeatherObject;
	dispatch: React.Dispatch<{ type: Weather; payload: WeatherObject }>;
};

export const WeatherContext = React.createContext<ContextType>({
	state: {
		title: "",
		woeid: "",
		consolidated_weather: [],
	},
	dispatch: () => undefined,
});

export const WeatherProvider = ({
	children,
}: {
	children: JSX.Element;
}): JSX.Element => {
	const [state, dispatch] = React.useReducer<WeatherReducer>(reducer, {
		consolidated_weather: [],
		title: "",
		woeid: "",
	});

	return (
		<WeatherContext.Provider value={{ dispatch, state }}>
			{children}
		</WeatherContext.Provider>
	);
};
