export default function loadBalancer(chinaDownload, USDownload) {
  const promises = [chinaDownload.then(), USDownload.then()];
  return Promise.race(promises);
}
