import styles from "../scss/FutureForecast.scss";
import { WeatherContext } from "./WeatherProvider";
import { createDate, getImagePath } from "../utils/utils";
const FutureForecast = () => {
	const { state } = React.useContext(WeatherContext);
	const { consolidated_weather } = state;

	return (
		<>
			{consolidated_weather.map((item, index) => {
				if (!index) {
					return null;
				}
				return (
					<article className={styles.forecast} key={item.id}>
						<h3 className={styles.datetext}>
							{createDate(item.applicable_date)}
						</h3>
						<img src={getImagePath(item.weather_state_abbr)} alt="Hail" />
						<div className={styles.predictions}>
							<span>{Math.round(item.max_temp)}&deg;C</span>
							<span>{Math.round(item.min_temp)}&deg;C</span>
						</div>
					</article>
				);
			})}
		</>
	);
	// {

	// }
};
export default FutureForecast;
