export const getApi = (url, header) => {
  const data = fetch(url,header).then((res) => res.json());
  return data;
}