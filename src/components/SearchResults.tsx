import styles from "../scss/SearchResults.scss";
// import { WeatherContext } from "./WeatherProvider";
import { useAbortFetch } from "../hooks/useAbortFetch";
import ErrorComponent from "./ErrorComponent";
import { fetchWeather } from "../utils/utils";
import { WeatherContext } from "./WeatherProvider";
import { Weather } from "../reducers/reducer";

let count = false;
const SearchResults = ({
	location,
	closeContainer,
}: {
	location: string;
	closeContainer: () => void;
}) => {
	const [isPending, setIsPending] = React.useState(false);
	const { data, error } = useAbortFetch(location, setIsPending);
	const { dispatch } = React.useContext(WeatherContext);

	const getWeather = async (woeid: string | number) => {
		const { data } = await fetchWeather(woeid);
		data && dispatch({ type: Weather.Add, payload: data });
		closeContainer();
	};

	if (isPending) {
		return <div className={styles.noresults}>Loading content ....</div>;
	} else if (!data) {
		return <ErrorComponent errormessage={error} />;
	} else {
		return (
			<>
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
			</>
		);
	}
};

export default React.memo(SearchResults);
