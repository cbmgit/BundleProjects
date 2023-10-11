const luaFmt = require('lua-fmt');

function beautifyLuaCode(luaCode) {
  try {
    const beautifiedCode = luaFmt.format(luaCode);
    return beautifiedCode;
  } catch (error) {
    console.error('Error beautifying Lua code:', error);
    return luaCode; // Return the original code in case of an error
  }
}

// Example usage:
const luaCode = `
  function add(a, b)
    return a + b
  end
`;

const beautifiedCode = beautifyLuaCode(luaCode);
console.log(beautifiedCode);
