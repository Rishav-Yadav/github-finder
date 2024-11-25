import axios from "axios";
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const github = axios.create({
  baseURL: GITHUB_URL,
  headers: { Authorization: `token ${GITHUB_TOKEN}` },
});
export const searchUsers = async (query) => {
  const params = new URLSearchParams({ q: query });
  const response = await github.get(`/search/users?${params}`);
  return response.data.items;
};
export const getUserData = async (name) => {
  const [userData, reposData] = await Promise.all([
    github.get(`/users/${name}`),
    github.get(`/users/${name}/repos`),
  ]);

  if (userData.status === 404 || reposData.status === 404) {
    window.location("/notFound");
  } else {
    return { userData: userData.data, reposData: reposData.data };
  }
};
