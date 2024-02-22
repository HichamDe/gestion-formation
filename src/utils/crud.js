import axios from "axios";

export function saver(url, data) {
  axios.post(url, data, {});
}

export function fetcher(url) {
  return axios.get(url).then((res) => {
    return res.data;
  });
}

/**
 * This function is using AXIOS
 */
export function update(url, data, id) {
  return axios
    .put(url, data)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}
