import { WeatherLocation } from "../types/types";

export const useAbortFetch = (
	location: string,
	setIsPending?: React.Dispatch<React.SetStateAction<boolean>>
) => {
	const [resultslocation, setResultsLocation] = React.useState<
		WeatherLocation[] | null
	>([]);
	const [error, setError] = React.useState("");

	React.useEffect(() => {
		if (location === "") {
			setResultsLocation([]);
			return;
		}
		setIsPending && setIsPending(true);
		const controller = new AbortController();

		const { signal } = controller;
		let fetchLocation = async () => {
			let result = await fetch(`${API}/getwoeid/${location}`, {
				signal,
				method: "GET",
			});
			const response = await result.json();
			setResultsLocation(response);
			setIsPending && setIsPending(false);
		};

		fetchLocation().catch((error) => {
			let err = error as Error;
			if (err.name === "AbortError") {
				setError("");
			} else {
				setResultsLocation(null);
				setError(err.message);
				setIsPending && setIsPending(false);
			}
		});

		return () => {
			controller.abort();
		};
	}, [location, setIsPending]);

	return {
		data: resultslocation,
		error,
	};
};
