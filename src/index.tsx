import Home from "./components/Home";
import { WeatherProvider } from "./components/WeatherProvider";
import "./scss/index.scss";

ReactDOM.render(
	<WeatherProvider>
		<Home />
	</WeatherProvider>,
	document.getElementById("root")
);
