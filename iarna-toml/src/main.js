const TOML = require('@iarna/toml')

window["parseTOML"] = function(tomlCode){
  return TOML.parse(tomlCode);
}

window["tomlStringify"] = function(tomlCode){
  const object = TOML.parse(tomlCode);
  return TOML.stringify(object);
}
