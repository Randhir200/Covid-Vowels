function runProgram(input) {
    var str = input.trim()
    var n = str.length;
     var count=0;
     var flag = 0;
     for(var i=0;i<n;i++){ // 0
         for(var j=i;j<n;j++){ // 0
             var bag="";
             for(var k=i;k<=j;k++){
                 bag+=str[k];
             }
             count=0;
             var obj={};
             if(bag.length>=4){
                 for(var k=0;k<bag.length;k++){
                     if(obj[bag[k]]==undefined){
                        obj[bag[k]] = 1; 
                     }else{
                         obj[bag[k]]++;
                     }
                 }
                 
                 for(var item in obj){
                     if(item=="a"||item=="i"||item=="o"||item=="u"){
                         count++;
                     }
                 }
               //   console.log(obj)
                 if(count == 4){
                     flag++;
                 }
             }
         }
     }
     console.log(flag);
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
   
   