let array = ['|' , '/', '-', '\\'];
let count = 0;
for(let item of array) {
  setTimeout(() => {
    process.stdout.write('\r'+item)
  }, 100 + 200 * count)
  count++;
}
