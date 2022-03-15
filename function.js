/**
 * LocalStorage senddata
 * @param {*} key
 * @param {*} value
 * @returns
 */
function senddata(key, value) {
  let stringify = JSON.stringify(value);
  localStorage.setItem(key, stringify);

  return true;
}

/**
 * LocalStorage dtaget
 * @param {*} key
 * @returns
 */
function getdata(key) {
  let getitem = localStorage.getItem(key);
  let parse = JSON.parse(getitem);
  return parse ?? [];
}
