function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}


const websiteTable = { 0 : "https://hilaltugbauysal.com",
				1 : "https://sunnylx.eu",
                2 : "https://guilherme-menezes.com",
                3 : "lusostreams.com"}

export default {
    async fetch(request){
        let number = websiteTable[getRandomInt(4)]
        let url = websiteTable[number]

        return request.url
    }

}
