export default {
	fetch() {
		return new Response('Hello worker! We are Hilal!', {
			headers: {
				'content-type': 'text/plain',
			},
		});
	},
};
