export class Example {
  do() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('Hello World!');
        resolve(void 0);
      }, 1000);
    });
  }
}
