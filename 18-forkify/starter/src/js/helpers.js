import { async } from 'regenerator-runtime';
import { TIMEOUR_SEC } from './config';
const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const getJSON = async function (url) {
  try {
    const response = await Promise.race([fetch(url), timeout(TIMEOUR_SEC)]);
    const data = await response.json();
    if (!response.ok) throw new Error(`${data.status} because ${data.message}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const sendJSON = async function (url, uploadData) {
  try {
    const fetchPro = fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(uploadData),
    });
    const response = await Promise.race([fetchPro, timeout(TIMEOUR_SEC)]);
    const data = await response.json();
    if (!response.ok) throw new Error(`${data.status} because ${data.message}`);
    return data;
  } catch (error) {
    throw error;
  }
};
