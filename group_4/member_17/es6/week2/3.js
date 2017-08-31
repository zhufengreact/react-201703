
function count () {
  let num = 0
  let t1 = setInterval(() => {
    if (num < 10) {
      console.log(++num)
    } else {
      clearInterval(t1)
      t1 = null
    }
  }, 1000);
}
count()