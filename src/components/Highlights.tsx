import styles from "../scss/Highlights.scss";
import { WeatherContext } from "./WeatherProvider";

// type metric = {
// 	title: string;
// 	value: number | string;
// 	unit: string;
// 	childComponent?: JSX.Element;
// };
/* TODO Make another component under this which wiil accept the type above and return
a component which will have the above type */

const Highlights = React.memo(() => {
	const { state } = React.useContext(WeatherContext);
	const progressIndicatorRef = React.useRef<HTMLDivElement>(null);
	const todays_highlights = state.consolidated_weather[0];

	return (
		<section className={styles.wrapper}>
			<h2 className={styles.title}>Today's Highlights</h2>
			<article className={styles.highlightsContainer}>
				<article className={styles.itemContainer}>
					<h3>Wind Status</h3>
					<p>
						{Math.round(todays_highlights.wind_speed)}
						<span> mph</span>
					</p>
					<p className={styles.winddirection}>
						<span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								height="24px"
								viewBox="0 0 24 24"
								width="24px"
								fill="#ffffff"
								style={{
									transform: `rotate(${todays_highlights.wind_direction}deg)`,
								}}
							>
								<path d="M0 0h24v24H0z" fill="none" />
								<path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
							</svg>
						</span>
						<span> {todays_highlights.wind_direction_compass}</span>
					</p>
				</article>
				<article className={styles.itemContainer}>
					<h3>Humidity</h3>
					<p>
						{todays_highlights.humidity}
						<span>%</span>
					</p>
					<div
						className={styles.progressbar}
						role="progressbar"
						aria-valuemax={100}
						aria-valuemin={0}
						aria-valuenow={todays_highlights.humidity}
						aria-label="Humidity level"
					>
						<div className={styles.percentages}>
							<span>0</span>
							<span>50</span>
							<span>100</span>
						</div>
						<div className={styles.progressLoader}>
							<div
								className={styles.progressIndicator}
								ref={progressIndicatorRef}
								style={{ width: todays_highlights.humidity + "%" }}
							></div>
						</div>
					</div>
				</article>
				<article className={styles.itemContainer}>
					<h3>Visibility</h3>
					<p>
						{Number.parseFloat(todays_highlights.visibility)
							.toFixed(1)
							.replace(".", ",")}
						<span> miles</span>
					</p>
				</article>
				<article className={styles.itemContainer}>
					<h3>Air Pressure</h3>
					<p>
						{Math.round(todays_highlights.air_pressure)}
						<span> mb</span>
					</p>
				</article>
			</article>
		</section>
	);
});

export default Highlights;
