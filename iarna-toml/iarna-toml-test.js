const TOML = require('@iarna/toml')

function validateTOML(tomlCode){
    TOML.parse(tomlCode);
    return true;  
}

function libBeautifyTOML(tomlCode){
    const object = TOML.parse(tomlCode);
    return TOML.stringify(object);
}

var stringData = `global = "this is a string"
# This is a comment of a table
[my_table]
key = 1 # Comment a key
value = true
list = [4, 5, 6]`;

var result = validateTOML(stringData);

console.log(result);

var bcode = libBeautifyTOML(stringData);

console.log(bcode);
