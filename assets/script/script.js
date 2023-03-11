let a = document.getElementById("G-flag")
let flag = document.getElementById("flag")
let yes = document.getElementById("yes")
let no = document.getElementById("no")
let yesNum = 0
let noNum = 0
function foo() {
  let x = Math.random() > 0.5
  if (x) {
    yesNum = yesNum + 1
    flag.innerText = "YES"
    a.style.background = "darkcyan"
    a.style.transform = "rotateY(180deg)"
    flag.style.transform = "rotateY(180deg)"
    yes.innerText = yesNum

  } else {
    noNum = noNum + 1
    flag.innerText = "NO"
    a.style.background = "antiquewhite"
    a.style.transform = "rotateY(-180deg)"
    flag.style.transform = "rotateY(180deg)"
    no.innerText = noNum
  }

}

// foo()
let arr = []
// function foo() {
//     let x=Math.random()
//     console.log(x);
//     if(x>0.5)return arr.push("YES")
//    return  arr.push("NO")
//   }

// a.style.background = "blue"

console.log(arr);