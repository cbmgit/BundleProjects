const luaFmt = require('lua-fmt');

console.log(luaFmt.formatText('function fact(b)if b==0 then return 1 else return b*fact(b-1)end end;print("enter a number:")a=io.read("*number")print(fact(a))'));