import 'isomorphic-fetch';

const baseUrl = 'https://hack-girls-lat.herokuapp.com/';

export default {
	getLatest,
	getAvatars,
};
// get all the content
async function getLatest() {
	const request = await fetch(baseUrl);
	const data = await request.json();
	return data;
}
// get avatars images
async function getAvatars() {
	const request = await fetch(baseUrl + 'avatars');
	const data = await request.json();
	if (!data) return null;
	return data;
}
