import styles from "../scss/Search.scss";
// import searchIcon from "../../images/svg/search_black_24dp.svg";
import closeIcon from "../../images/svg/close_white_24dp.svg";

type SearchType = {
	setSearch: any;
	search: boolean;
};
const Search = React.memo(({ setSearch, search }: SearchType) => {
	const searchContainerRef = React.useRef<HTMLElement>(null);

	if (search && searchContainerRef && searchContainerRef.current) {
		searchContainerRef.current.classList.toggle(styles.visibility);
		searchContainerRef.current.style.transitionDelay = "0s,0s";
	}
	return (
		<section
			className={`${styles.searchLocation} ${styles.visibility}`}
			ref={searchContainerRef}
		>
			<h3 className={styles.hidden}>Search for a location</h3>
			<button
				className={styles.closeBtn}
				onClick={() => {
					if (searchContainerRef && searchContainerRef.current) {
						searchContainerRef.current.classList.toggle(styles.visibility);
						setSearch(false);
					}
				}}
			>
				<img src={closeIcon} alt="Close Menu" />
			</button>

			<form className={styles.searchForm}>
				<label className={styles.locationContainer} htmlFor="location">
					<input
						type="search"
						name="location"
						id="location"
						className={styles.location}
						placeholder="search Location"
						autoComplete="address-level1"
					/>
				</label>

				<button type="submit" className={styles.searchBtn}>
					Search
				</button>
			</form>
		</section>
	);
});

export default Search;
