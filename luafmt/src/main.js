const luaFmt = require('lua-fmt');

window["beautifyLuaCode"] = function(luaCode){
  try {
    const beautifiedCode = luaFmt.formatText(luaCode);
    return beautifiedCode;
  } catch (error) {
    console.error('Error beautifying Lua code:', error);
    return luaCode; // Return the original code in case of an error
  }
}
