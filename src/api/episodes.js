
export function getEpisodes() {
  return fetch('https://api.sampleapis.com/futurama/episodes', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
}
