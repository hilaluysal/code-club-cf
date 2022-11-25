export default {
	async fetch(request, env, context) {

        if (request.cf.botManagement.score <= 29) {

            return new Response ('The request is likely automated!', {
                headers: {
                    'content-type' : 'application/json',
                }
            });
        }   
        else {
            request = new Request(request)
            response = await this.fetch(request, {
                cf: {
                    resolveOverride: 'hilal.fun',
                },
            })
        }
        return response

        




        /*const response = await fetch(request)
        //clone the response so that it's no longer immutable
        const newResponse = new Response(response.body, response)

        //Add a custom header with the value
        newResponse.headers.append('x-workers-hello', 'Hello from Cloudflare Workers'
        )
        //Delete headers
        newResponse.headers.delete('x-header-to-delete')
        newResponse.headers.delete('x-header2-to-delete')
        //Adjust the value for an existing header
        newResponse.headers.set('x-headers-to-change', 'Hilal')

        return newResponse*/




        /*const url = new URL(request.url)

        const someCustomKey = `https://${url.hostname}${url.pathname}`

        let response = await this.fetch(request, {

            cf: {
                cacheTtl: 5,
                cacheEverything: true,
                cacheKey: someCustomKey,
            },
        })

        response = new Response(response.body, response)

        response.headers.set('Cache-Control', 'max-age=1500')

        context.waitUntil(caches.default.put(request, response.clone()))

        return response*/


	},
            

};

