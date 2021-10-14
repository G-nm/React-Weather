const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ProvidePlugin } = require("webpack");
const ForkTs = require("fork-ts-checker-webpack-plugin");
const ts = require("typescript");

module.exports = {
	entry: { main: "./src/index.tsx" },
	resolve: {
		extensions: [".tsx", ".ts", ".jsx", ".js", ".json", "..."],
		modules: [path.resolve(__dirname, "node_modules")],
	},
	module: {
		rules: [
			{
				test: /\.tsx?$|.jsx?$/,
				include: path.resolve(__dirname, "src"),
				exclude: /(node_modules)/,
				use: [
					{
						loader: "esbuild-loader",
						options: {
							loader: "tsx",
							target: "es2015",
							sourcemap: true,
							logLevel: "verbose",
							color: true,
							tsconfigRaw: ts.readConfigFile("tsconfig.json", ts.sys.readFile),
						},
					},
				],
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				type: "asset/resource",
			},			
			{
				test: /\.svg/,
				type: "asset/inline",
				use: ["svgo-loader"],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "index.html"),
			favicon: path.resolve(__dirname, "images/devchallenges.png"),
			title: "Devchallenges",
			meta: {
				description:
					"A weather app which allows users to search for weather data",
			},
		}),
		new ProvidePlugin({
			React: "react",
			ReactDOM: "react-dom",
		}),
		new ForkTs(),
	],
};
