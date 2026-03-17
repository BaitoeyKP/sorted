import { merge } from './merge';
import * as readline from 'readline';

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function ask(question: string): Promise<string> {
  return new Promise((resolve) => rl.question(question, resolve));
}

function parseInts(input: string): number[] {
  return input
    .split(',')
    .map((s) => s.trim())
    .filter((s) => s !== '')
    .map(Number);
}

async function main() {
  console.log('\n=== Merge 3 Arrays ===');
  console.log('collection_1 must be ascending  (e.g. 1,3,5)');
  console.log('collection_2 must be descending (e.g. 9,6,2)');
  console.log('collection_3 must be ascending  (e.g. 2,4,8)');

  console.log('\n--- Input ---');
  const raw1 = await ask('collection_1 (ascending)  : ');
  const raw2 = await ask('collection_2 (descending) : ');
  const raw3 = await ask('collection_3 (ascending)  : ');

  const c1 = parseInts(raw1);
  const c2 = parseInts(raw2);
  const c3 = parseInts(raw3);

  const result = merge(c1, c2, c3);

  console.log('\n--- Result ---');
  console.log('merged:', result);

  rl.close();
}

main();
