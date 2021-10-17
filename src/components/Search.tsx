import styles from "../scss/Search.scss";

import { SearchType } from "../types/types";

import SearchForm from "./SearchForm";

const Search = React.memo(({ setSearch, search }: SearchType) => {
	const searchContainerRef = React.useRef<HTMLElement>(null!);

	if (search) {
		searchContainerRef.current.classList.remove(styles.visibility);
		searchContainerRef.current.style.transitionDelay = "0s,0s";
	}

	const closeContainer = () => {
		if (searchContainerRef.current) {
			searchContainerRef.current.classList.add(styles.visibility);
			setSearch(false);
		}
	};

	return (
		<section
			className={`${styles.searchLocation} ${styles.visibility}`}
			ref={searchContainerRef}
			id="sidenav"
		>
			<h3 className={styles.hidden}>Search for a location</h3>
			<SearchForm closeContainer={closeContainer} />
		</section>
	);
});

export default Search;
