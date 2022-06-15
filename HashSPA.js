var HashSPA = {
	title: 'Web',
	defaults: {
		indexFile: 'index',
		folders: {
			pages: 'pages',
			components: 'components',
		},
		fileExtension: '.html',
		componentTag: 'component',
		mainTag: 'main',
	},
	onchange: (name) => (document.title = `${HashSPA.title} - ${name}`),
	init: function (title, callback) {
		if (title) this.title = title;
		document.querySelectorAll(this.defaults.componentTag).forEach((el) => {
			let name = el.getAttribute('name');
			let isPage = el.getAttribute('isPage') || false;

			this.get(name, isPage, el);
		});

		this.hash();
		window.onhashchange = this.hash;
		if (callback) callback();
	},

	get: function (name, isPage = false, el = 1) {
		let url = this.defaults.folders.components + '/' + name + this.defaults.fileExtension;
		if (isPage) url = this.defaults.folders.pages + '/' + name + this.defaults.fileExtension;

		let req = new XMLHttpRequest();
		req.open('GET', url, true);

		req.onload = function () {
			let res = this.response;
			if (this.status >= 200 && this.status < 400) {
				// console.log(res);

				let nodes = new DOMParser().parseFromString(res, 'text/html').body.childNodes;

				el =
					el == 1
						? document.querySelector(
								HashSPA.defaults.componentTag + '[name="' + name + '"]',
						  )
						: el;
				if (isPage) {
					document.querySelector(HashSPA.defaults.mainTag).innerHTML = '';
					nodes.forEach((i) =>
						document.querySelector(HashSPA.defaults.mainTag).append(i),
					);
				} else {
					nodes.forEach((i) => el.replaceWith(i));
				}

				let re = new RegExp(
					`<${HashSPA.defaults.componentTag} name="(.*)"(.*)>(.*)<\/${HashSPA.defaults.componentTag}>`,
					'gmi',
				);
				let match = res.match(re);
				if (match !== null) {
					match.forEach((i) => {
						let nName = /name="(.*?)"/gm.exec(i)[1];
						HashSPA.get(nName, false, 1);
					});
				}

				HashSPA.onchange(name);
			} else console.log('Cannot send request!');
		};

		req.onerror = () => console.log('Connection error!');
		req.send();
	},
	hash: function () {
		let name = document.location.hash.substring(2);
		// if (!this.defaults) return false;
		name = name == '' ? this.defaults.indexFile : name;
		HashSPA.get(name, true, 1);
	},
};
