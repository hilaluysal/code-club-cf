export default {
	fetch(request) {

        function getRandomInt(max) {
            return Math.floor(Math.random() * max)
        }
        
        const websiteTable = { 0 : "https://hilaltugbauysal.com",
                        1 : "https://sunnylx.eu",
                        2 : "https://guilherme-menezes.com",
                        3 : "https://lusostreams.com"
                    }

        
        async function handleRequest(request) {

            console.log("Heyy I am inside the function!")
            let key = getRandomInt(4);
            let url = websiteTable[key]
            console.log(key)
            
            console.log('Redirected url is:', url)
           /* return new Response(url, 
                {
                    headers:
                    {
                        'content-type': 'text/plain',
                    },
                });*/

            return Response.redirect(url, 301)
        }

        //request.headers.set('Cache-Control', 'no-cache')
        
        return handleRequest(request);


	},
            

};

