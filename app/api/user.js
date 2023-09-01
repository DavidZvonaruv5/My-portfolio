import { Octokit } from "@octokit/core";

const DavidZvonaruv5 = new Octokit({
    auth: process.env.API_KEY,
  })
  
export default async function fetchUser() {
    const res = await DavidZvonaruv5.request('GET /user', {
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
    })
    return res.data;
}

  