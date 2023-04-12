//AE2nj6sgG9dWhCN4JEzA0QM939lzYght
export default function apiCall(section){
  return fetch(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=AE2nj6sgG9dWhCN4JEzA0QM939lzYght`)
  .then(res => res.json())
}