export default {
	fetch() {
		console.log(request.url)
		return new Response('Hello worker! I am Hilal!', {
			headers: {
				'content-type': 'text/plain',
			},
		});
	},
};
