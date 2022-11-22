function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

const websiteTable = { 0 : "https://hilaltugbauysal.com",
				1 : "https://sunnylx.eu",
                2 : "https://guilherme-menezes.com",
                3 : "https://lusostreams.com"}

addEventListener('fetch', event => {
  event.respondWith(redirect(event.request));
});

async function handleRequest(request) {

	let url = websiteTable[getRandomInt(4)]
	console.log('Redirected url is:', url)
	const response = await fetch(request)
}

/*export default {
    async fetch(request){
        let url = websiteTable[getRandomInt(4)]
        console.log(url)

		return url

    }

}*/

