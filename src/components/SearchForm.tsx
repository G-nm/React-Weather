import closeIcon from "../../images/svg/close_white_24dp.svg";
import { useAbortFetch } from "../hooks/useAbortFetch";
import { Weather } from "../reducers/reducer";
import styles from "../scss/SearchForm.scss";
import { FormElement, SearchFormProps } from "../types/types";
import { fetchWeather } from "../utils/utils";
import SearchResults from "./SearchResults";
import { WeatherContext } from "./WeatherProvider";

const SearchForm = ({ closeContainer }: SearchFormProps) => {
	const [location, setLocation] = React.useState("");
	const { dispatch } = React.useContext(WeatherContext);
	const [isPending, setIsPending] = React.useState(false);
	const Locations = { ...useAbortFetch(location, setIsPending), isPending };

	const searchWeather = async (event: React.FormEvent<FormElement>) => {
		event.preventDefault();
		if (Locations.data?.length === 1) {
			setIsPending(true);
			const { data } = await fetchWeather(Locations.data[0].woeid);
			data && dispatch({ type: Weather.Add, payload: data });
			clear();
		} else {
			return;
		}
		return;
	};
	const clear = () => {
		closeContainer();
		setLocation("");
		setIsPending(false);
	};
	return (
		<>
			<section className={styles.searchBar}>
				<h4 className={styles.hidden}>Search Bar</h4>
				<button className={styles.closeBtn} onClick={clear}>
					<img src={closeIcon} alt="Close Menu" />
				</button>

				<form className={styles.searchForm} onSubmit={searchWeather}>
					<label className={styles.locationContainer} htmlFor="location">
						<input
							type="search"
							name="location"
							id="location"
							className={styles.location}
							placeholder="search Location"
							// autoComplete="address-level1"
							value={location}
							onChange={(event) => {
								window.scrollTo(0, 0);
								console.log(event.target);
								setLocation(event.target.value);
							}}
						/>
					</label>
					<button type="submit" className={styles.searchBtn}>
						Search
					</button>
				</form>
			</section>
			{location && (
				<SearchResults Locations={Locations} closeContainer={clear} />
			)}
		</>
	);
};

export default React.memo(SearchForm);
