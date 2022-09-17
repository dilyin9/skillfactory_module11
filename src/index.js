export function countDown(n) {
  let arr = [];
  if(n > 0){
  while (n !==0) {
    arr.push(n);
    n--
  }
}
 else if (n < 0){
  while (n !==0) {
    arr.push(n);
    n++
  }
 }
 else {
  arr.push(n);
 }
 let str = arr.join(" ");
 return str
}