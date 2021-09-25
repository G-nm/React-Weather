const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
	mode: "development",
	output: {
		filename: "[name].[contenthash].js",
		path: path.resolve(__dirname, "dist"),
	},
	devtool: "source-map",
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader", "postcss-loader"],
			},
			{
				test: /\.s(c|a)ss$/i,
				use: [
					{ loader: "style-loader" },
					{
						loader: "css-loader",
						options: { modules: true, importLoaders: 1 },
					},
					{ loader: "postcss-loader" },
					{ loader: "sass-loader" },
				],
			},
		],
	},
	devServer: {
		client: {
			overlay: {
				errors: true,
				warnings: true,
			},
			logging: "verbose",
		},
		open: true,
		hot: true,
	},
});
