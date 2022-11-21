export default {
	async fetch() {
		return await fetch("https://api.chucknorris.io/jokes/random");
	},
};
