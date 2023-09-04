import { Octokit } from "@octokit/core";
import fetchUser from "./user";

export default async function fetchRepos(token) {
  const user = await fetchUser(token);
  if (!user) {
    return null;
  }

  const octokit = new Octokit({
    auth: token,
  });

  try {
    const res = await octokit.request('GET /user/repos');
  
    if (res.status !== 200) {
      console.error(`Failed to fetch repos. HTTP Status: ${res.status}`);
      return null;
    }
  
    return res.data;
  } catch (error) {
    console.error("Failed to fetch repos:", error);
    return null;
  }
}
