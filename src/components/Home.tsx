import { lazy, Suspense } from "react";
import CurrentForecast from "./CurrentForecast";
import FutureForecast from "./FutureForecast";
import Highlights from "./Highlights";
import styles from "../scss/Home.scss";
import HeroSearch from "./HeroSearch";
const Search = lazy(() => import("./Search"));

export const Home = () => {
	let [search, setSearch] = React.useState(false);
	let num = [1, 2];

	return (
		<>
			<section className="hero">
				<h2 className={styles.hidden}>Weather information</h2>
				<div className={styles.weatherHero}>
					<HeroSearch setSearch={setSearch} />
					<CurrentForecast />
				</div>
			</section>
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
		</>
	);
};
