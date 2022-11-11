export default {
	fetch() {
		return new Response('Hello worker! I am Hilal!', {
			headers: {
				'content-type': 'text/plain',
			},
		});
	},
};
