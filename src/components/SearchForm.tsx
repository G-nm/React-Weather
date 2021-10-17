import closeIcon from "../../images/svg/close_white_24dp.svg";

import styles from "../scss/SearchForm.scss";
import { FormElement, SearchFormProps } from "../types/types";
import SearchResults from "./SearchResults";

const searchWeather = async (event: React.FormEvent<FormElement>) => {
	event.preventDefault();
};

const SearchForm = ({ closeContainer }: SearchFormProps) => {
	const [location, setLocation] = React.useState("");

	const clear = () => {
		closeContainer();
		setLocation("");
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
								setLocation(event.target.value);
							}}
						/>
					</label>
					<button type="submit" className={styles.searchBtn}>
						Search
					</button>
				</form>
			</section>
			{location && <SearchResults location={location} closeContainer={clear} />}
		</>
	);
};

export default React.memo(SearchForm);
