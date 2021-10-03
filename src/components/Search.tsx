import styles from "../scss/Search.scss";
import SearchResults from "./SearchResults";
import { SearchType } from "../types/types";
import { useAbortFetch } from "../hooks/useAbortFetch";
import SearchForm from "./SearchForm";

const Search = React.memo(({ setSearch, search }: SearchType) => {
	const searchContainerRef = React.useRef<HTMLElement>(null);
	const [location, setLocation] = React.useState("");
	let result = useAbortFetch(location);

	if (search && searchContainerRef.current) {
		searchContainerRef.current.classList.remove(styles.visibility);
		searchContainerRef.current.style.transitionDelay = "0s,0s";
	}
	if (!location.length) {
		result = [];
	}
	const closeContainer = () => {
		if (searchContainerRef.current) {
			searchContainerRef.current.classList.toggle(styles.visibility);
			setSearch(false);
		}
		result = [];
		setLocation("");
	};

	return (
		<section
			className={`${styles.searchLocation} ${styles.visibility}`}
			ref={searchContainerRef}
		>
			<h3 className={styles.hidden}>Search for a location</h3>
			<SearchForm
				closeContainer={closeContainer}
				location={location}
				setLocation={setLocation}
			/>
			{result.length ? (
				result.map((resultlocation, index) => {
					return (
						<SearchResults
							title={resultlocation.title}
							woeid={resultlocation.woeid}
							key={index}
						/>
					);
				})
			) : (
				<div>No Results found</div>
			)}
		</section>
	);
});

export default Search;
