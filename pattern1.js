let n = prompt("Enter a number" , '5');
n = Number(n);
let string = "";

for(let i = 0; i < n; i++) { 
  for(let j = 0; j < 8; j++) { 
    string += "*";
  }
  string += "\n";
}
console.log(string);