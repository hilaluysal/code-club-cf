export default {
	fetch(request) {
		if(request.method == "POST") {
		return new Response('You ROCK!', {
			headers: {
				'content-type': 'application/json',
			},
		});
	}
	else{
			return new Response ('Oops, the request method is not POST!', {
				headers: {
					'content-type' : 'text/plain',
				},
			});
		}	
	},
};
