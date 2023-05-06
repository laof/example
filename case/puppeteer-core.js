import { stringify } from 'querystring';
import puppeteer from 'puppeteer-core';
import { createServer } from 'http';
import findChrome from 'carlo/lib/find_chrome.js';

const { executablePath } = await findChrome({});
console.log(executablePath);
const browser = await puppeteer.launch({
  executablePath,
  headless: false,
});

const caniuse = 'https://caniuse.com';
const params = {
  search: 'top await',
};
const href = searchParams(caniuse, params);
console.log(href);

const page = await browser.newPage();
await page.goto(href);
await browser.close();

const search = new URL(href).searchParams.get('search');
console.log('search:', search);

function searchParams(url, params) {
  return `${url}?${stringify(params)}`;
}

// console.log('http://localhost:5670/api/get-token');
// createServer((request, response) => {
//   response.setHeader('Access-Control-Allow-Methods', '*');
//   response.setHeader('Access-Control-Allow-Origin', '*');

//   response.writeHead(200, { 'Content-Type': 'text/plain' });
//   response.end('Hello, ' + new Date().toLocaleString());
// }).listen(5670);

process.on('exit', async () => {
  console.log('exit ok');
});
