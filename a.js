import { writeFileSync } from 'fs';
import { fork, exec } from 'child_process';

const user = {};

const list = new Array(2).fill(true);

for (let i of list) {
  const fd = fork('./main.js');
  fd.on('data', (data) => {
    console.log(data);
  });
}

process.on('exit', async () => {
  writeFileSync('./token.json', JSON.stringify(user));
});
