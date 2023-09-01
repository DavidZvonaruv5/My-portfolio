import fetchUser from "./user";

export default async function fetchRepos() {
    const user = await fetchUser()
    const res = await fetch(user.repos_url)
    return res.json();
}