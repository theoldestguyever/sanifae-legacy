/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params, url }) {
    var search = url.searchParams;

    var voteType = search.get('vote');

    var id = search.get('page') * 1;

    await new Promise(resolve => setTimeout(resolve, 100));

    const res = await fetch(`/api/explore?page=${id}`);
    const postJson = await res.json();

    return { postJson, id };
}