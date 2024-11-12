const fs = require('node:fs/promises');

async function getStoredData() {
  const rawFileContent = await fs.readFile('karten.json', { encoding: 'utf-8' });
  const data = JSON.parse(rawFileContent);
  const storedData = data.karten ?? [];
  return storedData;
}

function storeData(karten) {
  return fs.writeFile('karten.json', JSON.stringify({ karten: karten || [] }));
}

exports.getStoredData = getStoredData;
exports.storeData = storeData;