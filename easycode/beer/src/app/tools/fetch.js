// Ajax API

function fetch(url) {
  const promise = new Promise(((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.responseType = 'json';
    xhr.addEventListener('readystatechange', () => {
      if (xhr.readyState !== 4) return;
      if (xhr.status !== 200) {
        console.log(`${xhr.status}:${xhr.statusText}`);
        reject();
      }
      if (xhr.readyState === 4) {
        resolve(xhr.response);
      }
    });
    xhr.addEventListener('error', (error) => {
      console.error(error);
      reject();
    });
    xhr.addEventListener('timeout', () => {
      console.log(`Запрос не успел выполнится за: ${xhr.timeout}мс`);
    });
    xhr.timeout = 2000;
    xhr.send();
  }));
  return promise;
}

export default fetch;
