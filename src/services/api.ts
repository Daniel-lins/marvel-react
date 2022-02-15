import axios from "axios";
import md5 from "md5";
// import { useEffect } from "react";

// const baseURL = "http://gateway.marvel.com/v1/public";
const publicKey = "33e26b8c3d1db7b63bb9857b38069796";
const privateKEy = "e4ffd485a037f3a6e5f129e6440d1ecba7c95f77";

const time = Number(new Date());

const hash = md5(time + privateKEy + publicKey);

const api = axios.create({
  baseURL: "http://gateway.marvel.com/v1/public",
  params: {
    ts: time,
    apikey: publicKey,
    hash,
  },
});

export default api;
// const Api = () => {
//   useEffect(() => {
//     axios
//       .get(
//         `http://gateway.marvel.com/v1/public/characters?ts=${time}&apikey=${publicKey}&hash=${hash}`
//       )
//       .then((response) => console.log(response.data.data))
//       .catch((err) => console.log(err));
//   }, []);
//   return (
//     <div></div>
//   );
// }
