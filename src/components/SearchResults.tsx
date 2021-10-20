import styles from "../scss/SearchResults.scss";
import ErrorComponent from "./ErrorComponent";
import { fetchWeather } from "../utils/utils";
import { WeatherContext } from "./WeatherProvider";
import { Weather } from "../reducers/reducer";
import { WeatherLocation } from "../types/types";

let count = false;
const SearchResults = ({
	closeContainer,
	Locations,
}: {
	Locations: {
		data: WeatherLocation[] | null;
		error: string;
		isPending: boolean;
	};
	closeContainer: () => void;
}) => {
	const { isPending, data, error } = Locations;
	const { dispatch } = React.useContext(WeatherContext);

	const getWeather = async (woeid: string | number) => {
		const { data: location } = await fetchWeather(woeid);
		location && dispatch({ type: Weather.Add, payload: location });
		closeContainer();
	};

	if (isPending) {
		return <div className={styles.noresults}>Loading content ....</div>;
	} else if (!data) {
		return <ErrorComponent errormessage={error} />;
	} else {
		return (
			<article className={styles.resultslist}>
				{data.length ? (
					data.map(({ title, woeid }, index) => {
						count = true;
						return (
							<button
								className={styles.city}
								key={index}
								type="button"
								onClick={() => getWeather(woeid)}
							>
								<span>{title}</span>
								<span>&#8250;</span>
							</button>
						);
					})
				) : count ? (
					<div className={styles.noresults}>No results found</div>
				) : null}
			</article>
		);
	}
};

export default React.memo(SearchResults);
