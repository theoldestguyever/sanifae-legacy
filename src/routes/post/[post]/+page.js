/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params, url }) {
    var search = url.searchParams;

    var voteType = search.get('vote');

    var id = params.post;

    if (voteType) {
        await fetch(`/api/vote?post=${id}&vote=${voteType}`);
    }

    await new Promise(resolve => setTimeout(resolve, 100));

    const res = await fetch(`/api/post?post=${id}`);
    const postJson = await res.json();

    return postJson;
}