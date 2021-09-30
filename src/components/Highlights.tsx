import styles from "../scss/Highlights.scss";

// type metric = {
// 	title: string;
// 	value: number | string;
// 	unit: string;
// 	childComponent?: JSX.Element;
// };
/* TODO Make another component under this which wiil accept the type above and return
a component which will have the above type */

const Highlights = () => {
	return (
		<section className={styles.highlightsContainer}>
			<h2 className={styles.title}>Today's Highlights</h2>
			<article className={styles.itemContainer}>
				<h3>Wind Status</h3>
				<p>
					7<span>mph</span>
				</p>
				<p>WSW</p>
			</article>
			<article className={styles.itemContainer}>
				<h3>Humidity</h3>
				<p>
					84
					<span>%</span>
				</p>
				<div className={styles.progressbar}>
					<div className={styles.percentages}>
						<span>0</span>
						<span>50</span>
						<span>100</span>
					</div>
					<div className={styles.progressLoader}></div>
				</div>
			</article>
			<article className={styles.itemContainer}>
				<h3>Visibility</h3>
				<p>
					6,4
					<span> miles</span>
				</p>
			</article>
			<article className={styles.itemContainer}>
				<h3>Air Pressure</h3>
				<p>
					998
					<span> mb</span>
				</p>
			</article>
		</section>
	);
};

export default Highlights;
