import { defineStore } from "pinia";
import axios from "axios";

const objToQS = (obj) => {
  let str = [];
  for (let p in obj) {
    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
  }

  return str.join("&");
};

export const store = defineStore("main", {
  state: () => ({
    busy: false,
    error: "",
    gists: [],
    query: {
      page: 1,
      per_page: 10,
    },
    totalPages: 0,
  }),
  actions: {
    clearGists() {
      this.gists.splice(0, this.gists.length);
    },
    async loadGists(query) {
      this.busy = true;
      // persist old values override existing
      const newQ = { ...this.query, ...query };
      this.query = newQ;
      try {
        const url = `https://api.github.com/users/theWhiteFox/gists?${objToQS(
          newQ
        )}`;
        const result = await axios.get(url);
        this.totalPages = result.data.length;
        console.log(result.data);
        this.gists = result.data;
        return true;
      } catch {
        this.error = "failed to load gists";
      } finally {
        this.busy = false;
      }
    },
  },
  getters: {
    getPagesCount: (state) => {
      return state.query.page;
    },
    getQuery(state) {
      return state.query;
    },
  },
});
