import axios from "axios";

const apiClient = axios.create({
  baseURL: `https://api.teleport.org/api/urban_areas/`,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getScores() {
    return apiClient
      .get("/")
      .then(res => res.data["_links"]["ua:item"].map(link => link.href))
      .then(urls =>
        Promise.all(
          urls.map(url =>
            axios
              .get(url)
              .then(res => axios.get(res.data["_links"]["ua:scores"].href))
          )
        )
      );
  }
};
