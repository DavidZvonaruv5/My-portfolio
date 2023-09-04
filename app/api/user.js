import { Octokit } from "@octokit/core";

export default async function fetchUser(token) {
  try {
    const octokit = new Octokit({
      auth: token,
    });
  
    const res = await octokit.request('GET /user');
    return res.data;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    return null;
  }
}
