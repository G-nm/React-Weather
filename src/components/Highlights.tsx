import styles from "../scss/Highlights.scss";
const Highlights = () => {
	return (
		<section className={styles.highlightsContainer}>
			<h2>Today's Highlights</h2>
			<article>
				<h3>Wind Status</h3>
				<p>7mph</p>
				<p>WSW</p>
			</article>
			<article>
				<h3>Humidity</h3>
				<p>84%</p>
			</article>
			<article></article>
			<article></article>
		</section>
	);
};

export default Highlights;
