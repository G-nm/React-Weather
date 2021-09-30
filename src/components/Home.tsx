import { lazy, Suspense } from "react";
import styles from "../scss/Home.scss";
import CurrentForecast from "./CurrentForecast";

import { FutureForecast } from "./FutureForecast";
import Highlights from "./Highlights";
const Search = lazy(() => import("./Search"));
// import Search from "./Search";

export const Home = () => {
	let [count, setCount] = React.useState(0);
	let [search, setSearch] = React.useState(false);
	let num = [1, 2, 3, 4, 5];

	return (
		<section className="hero">
			<h2 className={styles.hidden}>Weather information</h2>
			<div className={styles.weatherHero}>
				<div className={styles.functionBtns}>
					<button
						className={`${styles.btnSearch} ${styles.btn} `}
						onClick={() => {
							setSearch(true);
							setCount(++count);
						}}
						aria-label="Search"
					>
						Search for places
					</button>
					<button
						className={`${styles.btnLocation} ${styles.btn}`}
						name="get current location"
						aria-label="Current Location"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="24px"
							viewBox="0 0 24 24"
							width="24px"
							fill="#fff"
						>
							<path d="M0 0h24v24H0V0z" fill="none" />
							<path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z" />
						</svg>
					</button>
				</div>

				<CurrentForecast count={count} />
			</div>

			<Suspense fallback={<div>Loading ....</div>}>
				<Search setSearch={setSearch} search={search} />
			</Suspense>

			<section className={styles.container}>
				<h2 className={styles.hidden}>Weather predictions</h2>
				<article className={styles.predictionContainer}>
					{num.map((_, index) => {
						return <FutureForecast key={index} />;
					})}
				</article>
			</section>
			<Highlights />
		</section>
	);
};
