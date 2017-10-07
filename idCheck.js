// function passCheck(id, password) {
//
//     return (
//
//     ((id===password) && (id.length < 6) && (password.length < 6))===true
//       console.log("true")
//   )
//
//     return ( (id.include("!") || id.include("#") || id.include("$"))
//     console.log("second line")
//   )
//     return ( !(password.include("!") || password.include("#") || password.include("$"))
//     console.log("third line")
//   )
//     return ( (password === "password")
//     console.log("fourth line")
//     )
//     }
//
// passCheck("abhhcd", "#abcdef");


function passCheck(id, password) {
  if ((id === password) || (id.length < 6)) {
      console.log("first")
      return false
  } else if (password.length < 6) {
      console.log("second")
      return false
  } else if ((id.includes("!")) || (id.includes("#")) || (id.includes("$"))) {
      console.log("third")
      return false
  } else if (!((password.includes("!")) || (password.includes("#")) || (password.includes("$")))) {
      console.log("fourth")
      return false
  } else if (password === "password") {
      console.log("fifth")
      return false
  } else
      return true
}

passCheck("abhhcd", "#abcdef");
