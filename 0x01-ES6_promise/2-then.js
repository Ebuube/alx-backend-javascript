export default function handleResponseFromAPI(promise) {
  return promise
    // eslint-disable-next-line arrow-body-style
    .then(() => {
      return { status: 200, body: 'Success' };
    })
    // eslint-disable-next-line arrow-body-style
    .catch((error) => {
      return Error(error);
    })
    .then(() => {
      console.log('Got a response from the API');
    });
}
