function substring(str){
  var count = 0;
  for(var i=0; i<str.length; i++){
    var bag="";
    for(var j=i; j<str.length; j++){
          bag+=str[j];
          if(check(bag)){
            count++;
          }
        }
  }
  console.log(count);
}

function check(bag){
  if(bag.includes("a")&&bag.includes("i")&&bag.includes("o")&&bag.includes("u")){
    return true;
  }
  return false;
}
function runProgram(input) {
    var str = input.trim()
    substring(str);
   }
   if (process.env.USER === "") {
     runProgram(``);
   } else {
     process.stdin.resume();
     process.stdin.setEncoding("ascii");
     let read = "";
     process.stdin.on("data", function (input) {
       read += input;
     });
     process.stdin.on("end", function () {
       read = read.replace(/\n$/, "");
       read = read.replace(/\n$/, "");
       runProgram(read);
     });
     process.on("SIGINT", function () {
       read = read.replace(/\n$/, "");
       runProgram(read);
       process.exit(0);
     });
   }
   
   