import { parentPort, workerData } from 'worker_threads';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }

  if (num <= 3) {
    return true;
  }

  if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }

  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
    i += 6;
  }
  return true;
}

const { start, end } = workerData;
let count = 0;

for (let i = start; i <= end; i++) {
  if (isPrime(i)) count++;
}

parentPort?.postMessage(count);
