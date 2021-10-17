import { WeatherObject } from "../types/types";
import { fetchWeather } from "../utils/utils";
import { useAbortFetch } from "./useAbortFetch";

const useOnload = (
	setIsPending?: React.Dispatch<React.SetStateAction<boolean>>
) => {
	const [city, setCity] = React.useState<string>("");
	const [error, setError] = React.useState<string>("");
	const [data, SetData] = React.useState<null | WeatherObject>(null);

	React.useEffect(() => {
		const getCity = async () => {
			try {
				const response: { city: string } = await (
					await fetch("https://geolocation-db.com/json")
				).json();

				setCity(response.city);
			} catch (error) {
				const err = error as Error;
				setError(err.name);
				setCity("Nairobi");
			}
		};
		getCity();
	}, []);
	const { data: results, error: ee } = useAbortFetch(city);

	React.useEffect(() => {
		if (results !== null && results.length) {
			const [mycity] = results;
			const woeid = mycity.woeid;
			fetchWeather(woeid)
				.then(({ data }) => {
					if (data) {
						SetData(data);
						setIsPending && setIsPending(false);
					}
				})
				.catch((error) => {
					let err = error as Error;
					console.log(err);
					setError(err.message);
				});
		} else {
			setError(ee);
		}
	}, [ee, results, setIsPending]);

	return {
		data,
		error: error ? error : "",
	};
};

export default useOnload;
