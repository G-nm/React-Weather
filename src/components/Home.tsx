import CurrentForecast from "./CurrentForecast";
import FutureForecast from "./FutureForecast";
import Highlights from "./Highlights";
import styles from "../scss/Home.scss";
import HeroSearch from "./HeroSearch";
import Search from "./Search";
import useOnload from "../hooks/useOnload";
import ErrorComponent from "./ErrorComponent";
import { WeatherContext } from "./WeatherProvider";
import { Weather } from "../reducers/reducer";

const Home = () => {
	const [search, setSearch] = React.useState(false);
	const [isPending, setIsPending] = React.useState(true);
	const { data, error } = useOnload(setIsPending);
	const { dispatch } = React.useContext(WeatherContext);

	React.useEffect(() => {
		data && dispatch({ payload: data, type: Weather.Add });
	}, [data, dispatch]);

	if (error) {
		return <ErrorComponent errormessage={error} />;
	}
	if (isPending) {
		return null;
	}

	return (
		<main className={styles.maincontent}>
			<section className="hero">
				<h2 className={styles.hidden}>Weather information</h2>
				<div className={styles.weatherHero}>
					<HeroSearch setSearch={setSearch} />
					<CurrentForecast />
				</div>
				<Search setSearch={setSearch} search={search} />
			</section>
			<div className={styles.sidebarcontent}>
				<section className={styles.container}>
					<h2 className={styles.hidden}>Weather predictions</h2>
					<article className={styles.predictionContainer}>
						<FutureForecast />
					</article>
				</section>
				<Highlights />
			</div>
		</main>
	);
};
export default Home;
