import env from "@/env";
const baseUrl = "https://api.themoviedb.org/3";

const requests = {
  fetchTrending: `${baseUrl}/trending/all/week?api_key=${env.apiKey}`,
  fetchOrginals: `${baseUrl}/discover/tv?api_key=${env.apiKey}&sort_by=popularity.desc&page=1&with_networks=213`,
  fetchToprated: `${baseUrl}/movie/top_rated?api_key=${env.apiKey}`,
  fetchActions: `${baseUrl}/discover/movie?api_key=${env.apiKey}&with_genres=28`,
  fetchComedy: `${baseUrl}/discover/movie?api_key=${env.apiKey}&with_genres=35`,
  fetchHorror: `${baseUrl}/discover/movie?api_key=${env.apiKey}&with_genres=27`,
  fetchRomance: `${baseUrl}/discover/movie?api_key=${env.apiKey}&with_genres=10749`,
  fetchDocumentaries: `${baseUrl}/discover/movie?api_key=${env.apiKey}&with_genres=99`,
};
export default requests;
