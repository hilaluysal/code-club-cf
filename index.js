export default {
	fetch(request) {
		if(request.url == "https://codeclubcf.ent-acc-w-ent-plans.workers.dev") {
		return new Response('Hello worker! I am Hilal!', {
			headers: {
				'content-type': 'text/plain',
			},
		});
	}
	else{
			return new Response ('Error Worker!', {
				headers: {
					'content-type' : 'text/plain',
				},
			});
		}	
	},
};
