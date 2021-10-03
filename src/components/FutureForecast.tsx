import styles from "../scss/FutureForecast.scss";
import hail from "../../images/Hail.png";

const FutureForecast = () => {
	return (
		<article className={styles.forecast}>
			<h4>Tomorrow</h4>
			<img src={hail} alt="Hail" />
			<div className={styles.predictions}>
				<span>16&deg;C</span>
				<span>11&deg;C</span>
			</div>
		</article>
	);
};
export default FutureForecast;
