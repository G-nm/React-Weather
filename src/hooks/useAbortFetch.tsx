import { location } from "../types/types";

export const useAbortFetch = (location: string): [] | location[] => {
	const [resultslocation, setResultLocations] = React.useState<[] | location[]>(
		[]
	);

	React.useEffect(() => {
		if (location === "") {
			return;
		}
		const controller = new AbortController();

		const { signal } = controller;
		let fetchLocation = async () => {
			let result = await fetch(
				`https://www.metaweather.com/api/location/search/?query=${location}`,
				{ signal }
			);
			let response = await result.json();

			setResultLocations(response);
		};
		fetchLocation().catch((error) => {
			let err = error as Error;
			if (err.name === "AbortError") {
				// console.log("Req cancelled");
			}
		});

		return () => {
			controller.abort();
		};
	}, [location]);

	return resultslocation;
};
