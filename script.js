var app = new Vue({
	el: '#app',
	data: {
		cats: {},
		printableCats: {},
	},
	methods: {
		getCats: async function () {
			let data = await fetch('./cats.json');
			this.cats = await data.json();
		},
		printCats: function () {
			this.printableCats = Object.entries(this.cats).map(
				([key, value]) => {
					return {
						username: key,
						url: value,
					};
				}
			);
		},
	},
	created: async function () {
		await this.getCats();
		await this.printCats();
	},
});
