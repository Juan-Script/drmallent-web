const redirectsData = [
    {
        source: '/curriculum-jose-mallent',
        destination: '/cv/dr-mallent',
        statusCode: 301
    },
    {
        source: '/curriculum-jose-santamaria',
        destination: '/cv/dr-santamaria',
        statusCode: 301
    },

]

async function redirects() {
    return redirectsData;
}

module.exports = {
    redirects,
    redirectsData
};