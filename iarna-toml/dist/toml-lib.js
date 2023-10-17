(()=>{var __webpack_modules__={925:(t,e,r)=>{"use strict";const i=r(633),s=r.g.Date;class n extends s{constructor(t){super(t),this.isDate=!0}toISOString(){return`${this.getUTCFullYear()}-${i(2,this.getUTCMonth()+1)}-${i(2,this.getUTCDate())}`}}t.exports=t=>{const e=new n(t);if(isNaN(e))throw new TypeError("Invalid Datetime");return e}},595:(t,e,r)=>{"use strict";const i=r(633);class s extends Date{constructor(t){super(t+"Z"),this.isFloating=!0}toISOString(){return`${this.getUTCFullYear()}-${i(2,this.getUTCMonth()+1)}-${i(2,this.getUTCDate())}T${i(2,this.getUTCHours())}:${i(2,this.getUTCMinutes())}:${i(2,this.getUTCSeconds())}.${i(3,this.getUTCMilliseconds())}`}}t.exports=t=>{const e=new s(t);if(isNaN(e))throw new TypeError("Invalid Datetime");return e}},114:t=>{"use strict";t.exports=t=>{const e=new Date(t);if(isNaN(e))throw new TypeError("Invalid Datetime");return e}},439:(t,e,r)=>{"use strict";const i=r(633);class s extends Date{constructor(t){super(`0000-01-01T${t}Z`),this.isTime=!0}toISOString(){return`${i(2,this.getUTCHours())}:${i(2,this.getUTCMinutes())}:${i(2,this.getUTCSeconds())}.${i(3,this.getUTCMilliseconds())}`}}t.exports=t=>{const e=new s(t);if(isNaN(e))throw new TypeError("Invalid Datetime");return e}},633:t=>{"use strict";t.exports=(t,e)=>{for(e=String(e);e.length<t;)e="0"+e;return e}},818:t=>{"use strict";const e=1114112;class r extends Error{constructor(t,e,i){super("[ParserError] "+t,e,i),this.name="ParserError",this.code="ParserError",Error.captureStackTrace&&Error.captureStackTrace(this,r)}}class i{constructor(t){this.parser=t,this.buf="",this.returned=null,this.result=null,this.resultTable=null,this.resultArr=null}}class s{constructor(){this.pos=0,this.col=0,this.line=0,this.obj={},this.ctx=this.obj,this.stack=[],this._buf="",this.char=null,this.ii=0,this.state=new i(this.parseStart)}parse(t){if(0===t.length||null==t.length)return;let e;for(this._buf=String(t),this.ii=-1,this.char=-1;!1===e||this.nextChar();)e=this.runOne();this._buf=null}nextChar(){return 10===this.char&&(++this.line,this.col=-1),++this.ii,this.char=this._buf.codePointAt(this.ii),++this.pos,++this.col,this.haveBuffer()}haveBuffer(){return this.ii<this._buf.length}runOne(){return this.state.parser.call(this,this.state.returned)}finish(){let t;this.char=e;do{t=this.state.parser,this.runOne()}while(this.state.parser!==t);return this.ctx=null,this.state=null,this._buf=null,this.obj}next(t){if("function"!=typeof t)throw new r("Tried to set state to non-existent state: "+JSON.stringify(t));this.state.parser=t}goto(t){return this.next(t),this.runOne()}call(t,e){e&&this.next(e),this.stack.push(this.state),this.state=new i(t)}callNow(t,e){return this.call(t,e),this.runOne()}return(t){if(0===this.stack.length)throw this.error(new r("Stack underflow"));void 0===t&&(t=this.state.buf),this.state=this.stack.pop(),this.state.returned=t}returnNow(t){return this.return(t),this.runOne()}consume(){if(this.char===e)throw this.error(new r("Unexpected end-of-buffer"));this.state.buf+=this._buf[this.ii]}error(t){return t.line=this.line,t.col=this.col,t.pos=this.pos,t}parseStart(){throw new r("Must declare a parseStart method")}}s.END=e,s.Error=r,t.exports=s},676:(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=makeParserClass(__webpack_require__(818)),module.exports.makeParserClass=makeParserClass;class TomlError extends Error{constructor(t){super(t),this.name="TomlError",Error.captureStackTrace&&Error.captureStackTrace(this,TomlError),this.fromTOML=!0,this.wrapped=null}}TomlError.wrap=t=>{const e=new TomlError(t.message);return e.code=t.code,e.wrapped=t,e},module.exports.TomlError=TomlError;const createDateTime=__webpack_require__(114),createDateTimeFloat=__webpack_require__(595),createDate=__webpack_require__(925),createTime=__webpack_require__(439),CTRL_I=9,CTRL_J=10,CTRL_M=13,CTRL_CHAR_BOUNDARY=31,CHAR_SP=32,CHAR_QUOT=34,CHAR_NUM=35,CHAR_APOS=39,CHAR_PLUS=43,CHAR_COMMA=44,CHAR_HYPHEN=45,CHAR_PERIOD=46,CHAR_0=48,CHAR_1=49,CHAR_7=55,CHAR_9=57,CHAR_COLON=58,CHAR_EQUALS=61,CHAR_A=65,CHAR_E=69,CHAR_F=70,CHAR_T=84,CHAR_U=85,CHAR_Z=90,CHAR_LOWBAR=95,CHAR_a=97,CHAR_b=98,CHAR_e=101,CHAR_f=102,CHAR_i=105,CHAR_l=108,CHAR_n=110,CHAR_o=111,CHAR_r=114,CHAR_s=115,CHAR_t=116,CHAR_u=117,CHAR_x=120,CHAR_z=122,CHAR_LCUB=123,CHAR_RCUB=125,CHAR_LSQB=91,CHAR_BSOL=92,CHAR_RSQB=93,CHAR_DEL=127,SURROGATE_FIRST=55296,SURROGATE_LAST=57343,escapes={[CHAR_b]:"\b",[CHAR_t]:"\t",[CHAR_n]:"\n",[CHAR_f]:"\f",[CHAR_r]:"\r",[CHAR_QUOT]:'"',[CHAR_BSOL]:"\\"};function isDigit(t){return t>=CHAR_0&&t<=CHAR_9}function isHexit(t){return t>=CHAR_A&&t<=CHAR_F||t>=CHAR_a&&t<=CHAR_f||t>=CHAR_0&&t<=CHAR_9}function isBit(t){return t===CHAR_1||t===CHAR_0}function isOctit(t){return t>=CHAR_0&&t<=CHAR_7}function isAlphaNumQuoteHyphen(t){return t>=CHAR_A&&t<=CHAR_Z||t>=CHAR_a&&t<=CHAR_z||t>=CHAR_0&&t<=CHAR_9||t===CHAR_APOS||t===CHAR_QUOT||t===CHAR_LOWBAR||t===CHAR_HYPHEN}function isAlphaNumHyphen(t){return t>=CHAR_A&&t<=CHAR_Z||t>=CHAR_a&&t<=CHAR_z||t>=CHAR_0&&t<=CHAR_9||t===CHAR_LOWBAR||t===CHAR_HYPHEN}const _type=Symbol("type"),_declared=Symbol("declared"),hasOwnProperty=Object.prototype.hasOwnProperty,defineProperty=Object.defineProperty,descriptor={configurable:!0,enumerable:!0,writable:!0,value:void 0};function hasKey(t,e){return!!hasOwnProperty.call(t,e)||("__proto__"===e&&defineProperty(t,"__proto__",descriptor),!1)}const INLINE_TABLE=Symbol("inline-table");function InlineTable(){return Object.defineProperties({},{[_type]:{value:INLINE_TABLE}})}function isInlineTable(t){return null!==t&&"object"==typeof t&&t[_type]===INLINE_TABLE}const TABLE=Symbol("table");function Table(){return Object.defineProperties({},{[_type]:{value:TABLE},[_declared]:{value:!1,writable:!0}})}function isTable(t){return null!==t&&"object"==typeof t&&t[_type]===TABLE}const _contentType=Symbol("content-type"),INLINE_LIST=Symbol("inline-list");function InlineList(t){return Object.defineProperties([],{[_type]:{value:INLINE_LIST},[_contentType]:{value:t}})}function isInlineList(t){return null!==t&&"object"==typeof t&&t[_type]===INLINE_LIST}const LIST=Symbol("list");function List(){return Object.defineProperties([],{[_type]:{value:LIST}})}function isList(t){return null!==t&&"object"==typeof t&&t[_type]===LIST}let _custom;try{const utilInspect=eval("require('util').inspect");_custom=utilInspect.custom}catch(t){}const _inspect=_custom||"inspect";class BoxedBigInt{constructor(t){try{this.value=__webpack_require__.g.BigInt.asIntN(64,t)}catch(t){this.value=null}Object.defineProperty(this,_type,{value:INTEGER})}isNaN(){return null===this.value}toString(){return String(this.value)}[_inspect](){return`[BigInt: ${this.toString()}]}`}valueOf(){return this.value}}const INTEGER=Symbol("integer");function Integer(t){let e=Number(t);return Object.is(e,-0)&&(e=0),__webpack_require__.g.BigInt&&!Number.isSafeInteger(e)?new BoxedBigInt(t):Object.defineProperties(new Number(e),{isNaN:{value:function(){return isNaN(this)}},[_type]:{value:INTEGER},[_inspect]:{value:()=>`[Integer: ${t}]`}})}function isInteger(t){return null!==t&&"object"==typeof t&&t[_type]===INTEGER}const FLOAT=Symbol("float");function Float(t){return Object.defineProperties(new Number(t),{[_type]:{value:FLOAT},[_inspect]:{value:()=>`[Float: ${t}]`}})}function isFloat(t){return null!==t&&"object"==typeof t&&t[_type]===FLOAT}function tomlType(t){const e=typeof t;if("object"===e){if(null===t)return"null";if(t instanceof Date)return"datetime";if(_type in t)switch(t[_type]){case INLINE_TABLE:return"inline-table";case INLINE_LIST:return"inline-list";case TABLE:return"table";case LIST:return"list";case FLOAT:return"float";case INTEGER:return"integer"}}return e}function makeParserClass(t){return class extends t{constructor(){super(),this.ctx=this.obj=Table()}atEndOfWord(){return this.char===CHAR_NUM||this.char===CTRL_I||this.char===CHAR_SP||this.atEndOfLine()}atEndOfLine(){return this.char===t.END||this.char===CTRL_J||this.char===CTRL_M}parseStart(){if(this.char===t.END)return null;if(this.char===CHAR_LSQB)return this.call(this.parseTableOrList);if(this.char===CHAR_NUM)return this.call(this.parseComment);if(this.char===CTRL_J||this.char===CHAR_SP||this.char===CTRL_I||this.char===CTRL_M)return null;if(isAlphaNumQuoteHyphen(this.char))return this.callNow(this.parseAssignStatement);throw this.error(new TomlError(`Unknown character "${this.char}"`))}parseWhitespaceToEOL(){if(this.char===CHAR_SP||this.char===CTRL_I||this.char===CTRL_M)return null;if(this.char===CHAR_NUM)return this.goto(this.parseComment);if(this.char===t.END||this.char===CTRL_J)return this.return();throw this.error(new TomlError("Unexpected character, expected only whitespace or comments till end of line"))}parseAssignStatement(){return this.callNow(this.parseAssign,this.recordAssignStatement)}recordAssignStatement(t){let e=this.ctx,r=t.key.pop();for(let r of t.key){if(hasKey(e,r)&&(!isTable(e[r])||e[r][_declared]))throw this.error(new TomlError("Can't redefine existing key"));e=e[r]=e[r]||Table()}if(hasKey(e,r))throw this.error(new TomlError("Can't redefine existing key"));return isInteger(t.value)||isFloat(t.value)?e[r]=t.value.valueOf():e[r]=t.value,this.goto(this.parseWhitespaceToEOL)}parseAssign(){return this.callNow(this.parseKeyword,this.recordAssignKeyword)}recordAssignKeyword(t){return this.state.resultTable?this.state.resultTable.push(t):this.state.resultTable=[t],this.goto(this.parseAssignKeywordPreDot)}parseAssignKeywordPreDot(){return this.char===CHAR_PERIOD?this.next(this.parseAssignKeywordPostDot):this.char!==CHAR_SP&&this.char!==CTRL_I?this.goto(this.parseAssignEqual):void 0}parseAssignKeywordPostDot(){if(this.char!==CHAR_SP&&this.char!==CTRL_I)return this.callNow(this.parseKeyword,this.recordAssignKeyword)}parseAssignEqual(){if(this.char===CHAR_EQUALS)return this.next(this.parseAssignPreValue);throw this.error(new TomlError('Invalid character, expected "="'))}parseAssignPreValue(){return this.char===CHAR_SP||this.char===CTRL_I?null:this.callNow(this.parseValue,this.recordAssignValue)}recordAssignValue(t){return this.returnNow({key:this.state.resultTable,value:t})}parseComment(){do{if(this.char===t.END||this.char===CTRL_J)return this.return()}while(this.nextChar())}parseTableOrList(){if(this.char!==CHAR_LSQB)return this.goto(this.parseTable);this.next(this.parseList)}parseTable(){return this.ctx=this.obj,this.goto(this.parseTableNext)}parseTableNext(){return this.char===CHAR_SP||this.char===CTRL_I?null:this.callNow(this.parseKeyword,this.parseTableMore)}parseTableMore(t){if(this.char===CHAR_SP||this.char===CTRL_I)return null;if(this.char===CHAR_RSQB){if(hasKey(this.ctx,t)&&(!isTable(this.ctx[t])||this.ctx[t][_declared]))throw this.error(new TomlError("Can't redefine existing key"));return this.ctx=this.ctx[t]=this.ctx[t]||Table(),this.ctx[_declared]=!0,this.next(this.parseWhitespaceToEOL)}if(this.char===CHAR_PERIOD){if(hasKey(this.ctx,t))if(isTable(this.ctx[t]))this.ctx=this.ctx[t];else{if(!isList(this.ctx[t]))throw this.error(new TomlError("Can't redefine existing key"));this.ctx=this.ctx[t][this.ctx[t].length-1]}else this.ctx=this.ctx[t]=Table();return this.next(this.parseTableNext)}throw this.error(new TomlError("Unexpected character, expected whitespace, . or ]"))}parseList(){return this.ctx=this.obj,this.goto(this.parseListNext)}parseListNext(){return this.char===CHAR_SP||this.char===CTRL_I?null:this.callNow(this.parseKeyword,this.parseListMore)}parseListMore(t){if(this.char===CHAR_SP||this.char===CTRL_I)return null;if(this.char===CHAR_RSQB){if(hasKey(this.ctx,t)||(this.ctx[t]=List()),isInlineList(this.ctx[t]))throw this.error(new TomlError("Can't extend an inline array"));if(!isList(this.ctx[t]))throw this.error(new TomlError("Can't redefine an existing key"));{const e=Table();this.ctx[t].push(e),this.ctx=e}return this.next(this.parseListEnd)}if(this.char===CHAR_PERIOD){if(hasKey(this.ctx,t)){if(isInlineList(this.ctx[t]))throw this.error(new TomlError("Can't extend an inline array"));if(isInlineTable(this.ctx[t]))throw this.error(new TomlError("Can't extend an inline table"));if(isList(this.ctx[t]))this.ctx=this.ctx[t][this.ctx[t].length-1];else{if(!isTable(this.ctx[t]))throw this.error(new TomlError("Can't redefine an existing key"));this.ctx=this.ctx[t]}}else this.ctx=this.ctx[t]=Table();return this.next(this.parseListNext)}throw this.error(new TomlError("Unexpected character, expected whitespace, . or ]"))}parseListEnd(t){if(this.char===CHAR_RSQB)return this.next(this.parseWhitespaceToEOL);throw this.error(new TomlError("Unexpected character, expected whitespace, . or ]"))}parseValue(){if(this.char===t.END)throw this.error(new TomlError("Key without value"));if(this.char===CHAR_QUOT)return this.next(this.parseDoubleString);if(this.char===CHAR_APOS)return this.next(this.parseSingleString);if(this.char===CHAR_HYPHEN||this.char===CHAR_PLUS)return this.goto(this.parseNumberSign);if(this.char===CHAR_i)return this.next(this.parseInf);if(this.char===CHAR_n)return this.next(this.parseNan);if(isDigit(this.char))return this.goto(this.parseNumberOrDateTime);if(this.char===CHAR_t||this.char===CHAR_f)return this.goto(this.parseBoolean);if(this.char===CHAR_LSQB)return this.call(this.parseInlineList,this.recordValue);if(this.char===CHAR_LCUB)return this.call(this.parseInlineTable,this.recordValue);throw this.error(new TomlError("Unexpected character, expecting string, number, datetime, boolean, inline array or inline table"))}recordValue(t){return this.returnNow(t)}parseInf(){if(this.char===CHAR_n)return this.next(this.parseInf2);throw this.error(new TomlError('Unexpected character, expected "inf", "+inf" or "-inf"'))}parseInf2(){if(this.char===CHAR_f)return"-"===this.state.buf?this.return(-1/0):this.return(1/0);throw this.error(new TomlError('Unexpected character, expected "inf", "+inf" or "-inf"'))}parseNan(){if(this.char===CHAR_a)return this.next(this.parseNan2);throw this.error(new TomlError('Unexpected character, expected "nan"'))}parseNan2(){if(this.char===CHAR_n)return this.return(NaN);throw this.error(new TomlError('Unexpected character, expected "nan"'))}parseKeyword(){return this.char===CHAR_QUOT?this.next(this.parseBasicString):this.char===CHAR_APOS?this.next(this.parseLiteralString):this.goto(this.parseBareKey)}parseBareKey(){do{if(this.char===t.END)throw this.error(new TomlError("Key ended without value"));if(!isAlphaNumHyphen(this.char)){if(0===this.state.buf.length)throw this.error(new TomlError("Empty bare keys are not allowed"));return this.returnNow()}this.consume()}while(this.nextChar())}parseSingleString(){return this.char===CHAR_APOS?this.next(this.parseLiteralMultiStringMaybe):this.goto(this.parseLiteralString)}parseLiteralString(){do{if(this.char===CHAR_APOS)return this.return();if(this.atEndOfLine())throw this.error(new TomlError("Unterminated string"));if(this.char===CHAR_DEL||this.char<=CTRL_CHAR_BOUNDARY&&this.char!==CTRL_I)throw this.errorControlCharInString();this.consume()}while(this.nextChar())}parseLiteralMultiStringMaybe(){return this.char===CHAR_APOS?this.next(this.parseLiteralMultiString):this.returnNow()}parseLiteralMultiString(){return this.char===CTRL_M?null:this.char===CTRL_J?this.next(this.parseLiteralMultiStringContent):this.goto(this.parseLiteralMultiStringContent)}parseLiteralMultiStringContent(){do{if(this.char===CHAR_APOS)return this.next(this.parseLiteralMultiEnd);if(this.char===t.END)throw this.error(new TomlError("Unterminated multi-line string"));if(this.char===CHAR_DEL||this.char<=CTRL_CHAR_BOUNDARY&&this.char!==CTRL_I&&this.char!==CTRL_J&&this.char!==CTRL_M)throw this.errorControlCharInString();this.consume()}while(this.nextChar())}parseLiteralMultiEnd(){return this.char===CHAR_APOS?this.next(this.parseLiteralMultiEnd2):(this.state.buf+="'",this.goto(this.parseLiteralMultiStringContent))}parseLiteralMultiEnd2(){return this.char===CHAR_APOS?this.return():(this.state.buf+="''",this.goto(this.parseLiteralMultiStringContent))}parseDoubleString(){return this.char===CHAR_QUOT?this.next(this.parseMultiStringMaybe):this.goto(this.parseBasicString)}parseBasicString(){do{if(this.char===CHAR_BSOL)return this.call(this.parseEscape,this.recordEscapeReplacement);if(this.char===CHAR_QUOT)return this.return();if(this.atEndOfLine())throw this.error(new TomlError("Unterminated string"));if(this.char===CHAR_DEL||this.char<=CTRL_CHAR_BOUNDARY&&this.char!==CTRL_I)throw this.errorControlCharInString();this.consume()}while(this.nextChar())}recordEscapeReplacement(t){return this.state.buf+=t,this.goto(this.parseBasicString)}parseMultiStringMaybe(){return this.char===CHAR_QUOT?this.next(this.parseMultiString):this.returnNow()}parseMultiString(){return this.char===CTRL_M?null:this.char===CTRL_J?this.next(this.parseMultiStringContent):this.goto(this.parseMultiStringContent)}parseMultiStringContent(){do{if(this.char===CHAR_BSOL)return this.call(this.parseMultiEscape,this.recordMultiEscapeReplacement);if(this.char===CHAR_QUOT)return this.next(this.parseMultiEnd);if(this.char===t.END)throw this.error(new TomlError("Unterminated multi-line string"));if(this.char===CHAR_DEL||this.char<=CTRL_CHAR_BOUNDARY&&this.char!==CTRL_I&&this.char!==CTRL_J&&this.char!==CTRL_M)throw this.errorControlCharInString();this.consume()}while(this.nextChar())}errorControlCharInString(){let t="\\u00";return this.char<16&&(t+="0"),t+=this.char.toString(16),this.error(new TomlError(`Control characters (codes < 0x1f and 0x7f) are not allowed in strings, use ${t} instead`))}recordMultiEscapeReplacement(t){return this.state.buf+=t,this.goto(this.parseMultiStringContent)}parseMultiEnd(){return this.char===CHAR_QUOT?this.next(this.parseMultiEnd2):(this.state.buf+='"',this.goto(this.parseMultiStringContent))}parseMultiEnd2(){return this.char===CHAR_QUOT?this.return():(this.state.buf+='""',this.goto(this.parseMultiStringContent))}parseMultiEscape(){return this.char===CTRL_M||this.char===CTRL_J?this.next(this.parseMultiTrim):this.char===CHAR_SP||this.char===CTRL_I?this.next(this.parsePreMultiTrim):this.goto(this.parseEscape)}parsePreMultiTrim(){if(this.char===CHAR_SP||this.char===CTRL_I)return null;if(this.char===CTRL_M||this.char===CTRL_J)return this.next(this.parseMultiTrim);throw this.error(new TomlError("Can't escape whitespace"))}parseMultiTrim(){return this.char===CTRL_J||this.char===CHAR_SP||this.char===CTRL_I||this.char===CTRL_M?null:this.returnNow()}parseEscape(){if(this.char in escapes)return this.return(escapes[this.char]);if(this.char===CHAR_u)return this.call(this.parseSmallUnicode,this.parseUnicodeReturn);if(this.char===CHAR_U)return this.call(this.parseLargeUnicode,this.parseUnicodeReturn);throw this.error(new TomlError("Unknown escape character: "+this.char))}parseUnicodeReturn(t){try{const e=parseInt(t,16);if(e>=SURROGATE_FIRST&&e<=SURROGATE_LAST)throw this.error(new TomlError("Invalid unicode, character in range 0xD800 - 0xDFFF is reserved"));return this.returnNow(String.fromCodePoint(e))}catch(t){throw this.error(TomlError.wrap(t))}}parseSmallUnicode(){if(!isHexit(this.char))throw this.error(new TomlError("Invalid character in unicode sequence, expected hex"));if(this.consume(),this.state.buf.length>=4)return this.return()}parseLargeUnicode(){if(!isHexit(this.char))throw this.error(new TomlError("Invalid character in unicode sequence, expected hex"));if(this.consume(),this.state.buf.length>=8)return this.return()}parseNumberSign(){return this.consume(),this.next(this.parseMaybeSignedInfOrNan)}parseMaybeSignedInfOrNan(){return this.char===CHAR_i?this.next(this.parseInf):this.char===CHAR_n?this.next(this.parseNan):this.callNow(this.parseNoUnder,this.parseNumberIntegerStart)}parseNumberIntegerStart(){return this.char===CHAR_0?(this.consume(),this.next(this.parseNumberIntegerExponentOrDecimal)):this.goto(this.parseNumberInteger)}parseNumberIntegerExponentOrDecimal(){return this.char===CHAR_PERIOD?(this.consume(),this.call(this.parseNoUnder,this.parseNumberFloat)):this.char===CHAR_E||this.char===CHAR_e?(this.consume(),this.next(this.parseNumberExponentSign)):this.returnNow(Integer(this.state.buf))}parseNumberInteger(){if(!isDigit(this.char)){if(this.char===CHAR_LOWBAR)return this.call(this.parseNoUnder);if(this.char===CHAR_E||this.char===CHAR_e)return this.consume(),this.next(this.parseNumberExponentSign);if(this.char===CHAR_PERIOD)return this.consume(),this.call(this.parseNoUnder,this.parseNumberFloat);{const t=Integer(this.state.buf);if(t.isNaN())throw this.error(new TomlError("Invalid number"));return this.returnNow(t)}}this.consume()}parseNoUnder(){if(this.char===CHAR_LOWBAR||this.char===CHAR_PERIOD||this.char===CHAR_E||this.char===CHAR_e)throw this.error(new TomlError("Unexpected character, expected digit"));if(this.atEndOfWord())throw this.error(new TomlError("Incomplete number"));return this.returnNow()}parseNoUnderHexOctBinLiteral(){if(this.char===CHAR_LOWBAR||this.char===CHAR_PERIOD)throw this.error(new TomlError("Unexpected character, expected digit"));if(this.atEndOfWord())throw this.error(new TomlError("Incomplete number"));return this.returnNow()}parseNumberFloat(){return this.char===CHAR_LOWBAR?this.call(this.parseNoUnder,this.parseNumberFloat):isDigit(this.char)?void this.consume():this.char===CHAR_E||this.char===CHAR_e?(this.consume(),this.next(this.parseNumberExponentSign)):this.returnNow(Float(this.state.buf))}parseNumberExponentSign(){if(isDigit(this.char))return this.goto(this.parseNumberExponent);if(this.char!==CHAR_HYPHEN&&this.char!==CHAR_PLUS)throw this.error(new TomlError("Unexpected character, expected -, + or digit"));this.consume(),this.call(this.parseNoUnder,this.parseNumberExponent)}parseNumberExponent(){if(!isDigit(this.char))return this.char===CHAR_LOWBAR?this.call(this.parseNoUnder):this.returnNow(Float(this.state.buf));this.consume()}parseNumberOrDateTime(){return this.char===CHAR_0?(this.consume(),this.next(this.parseNumberBaseOrDateTime)):this.goto(this.parseNumberOrDateTimeOnly)}parseNumberOrDateTimeOnly(){return this.char===CHAR_LOWBAR?this.call(this.parseNoUnder,this.parseNumberInteger):isDigit(this.char)?(this.consume(),void(this.state.buf.length>4&&this.next(this.parseNumberInteger))):this.char===CHAR_E||this.char===CHAR_e?(this.consume(),this.next(this.parseNumberExponentSign)):this.char===CHAR_PERIOD?(this.consume(),this.call(this.parseNoUnder,this.parseNumberFloat)):this.char===CHAR_HYPHEN?this.goto(this.parseDateTime):this.char===CHAR_COLON?this.goto(this.parseOnlyTimeHour):this.returnNow(Integer(this.state.buf))}parseDateTimeOnly(){if(this.state.buf.length<4){if(isDigit(this.char))return this.consume();if(this.char===CHAR_COLON)return this.goto(this.parseOnlyTimeHour);throw this.error(new TomlError("Expected digit while parsing year part of a date"))}if(this.char===CHAR_HYPHEN)return this.goto(this.parseDateTime);throw this.error(new TomlError("Expected hyphen (-) while parsing year part of date"))}parseNumberBaseOrDateTime(){return this.char===CHAR_b?(this.consume(),this.call(this.parseNoUnderHexOctBinLiteral,this.parseIntegerBin)):this.char===CHAR_o?(this.consume(),this.call(this.parseNoUnderHexOctBinLiteral,this.parseIntegerOct)):this.char===CHAR_x?(this.consume(),this.call(this.parseNoUnderHexOctBinLiteral,this.parseIntegerHex)):this.char===CHAR_PERIOD?this.goto(this.parseNumberInteger):isDigit(this.char)?this.goto(this.parseDateTimeOnly):this.returnNow(Integer(this.state.buf))}parseIntegerHex(){if(!isHexit(this.char)){if(this.char===CHAR_LOWBAR)return this.call(this.parseNoUnderHexOctBinLiteral);{const t=Integer(this.state.buf);if(t.isNaN())throw this.error(new TomlError("Invalid number"));return this.returnNow(t)}}this.consume()}parseIntegerOct(){if(!isOctit(this.char)){if(this.char===CHAR_LOWBAR)return this.call(this.parseNoUnderHexOctBinLiteral);{const t=Integer(this.state.buf);if(t.isNaN())throw this.error(new TomlError("Invalid number"));return this.returnNow(t)}}this.consume()}parseIntegerBin(){if(!isBit(this.char)){if(this.char===CHAR_LOWBAR)return this.call(this.parseNoUnderHexOctBinLiteral);{const t=Integer(this.state.buf);if(t.isNaN())throw this.error(new TomlError("Invalid number"));return this.returnNow(t)}}this.consume()}parseDateTime(){if(this.state.buf.length<4)throw this.error(new TomlError("Years less than 1000 must be zero padded to four characters"));return this.state.result=this.state.buf,this.state.buf="",this.next(this.parseDateMonth)}parseDateMonth(){if(this.char===CHAR_HYPHEN){if(this.state.buf.length<2)throw this.error(new TomlError("Months less than 10 must be zero padded to two characters"));return this.state.result+="-"+this.state.buf,this.state.buf="",this.next(this.parseDateDay)}if(!isDigit(this.char))throw this.error(new TomlError("Incomplete datetime"));this.consume()}parseDateDay(){if(this.char===CHAR_T||this.char===CHAR_SP){if(this.state.buf.length<2)throw this.error(new TomlError("Days less than 10 must be zero padded to two characters"));return this.state.result+="-"+this.state.buf,this.state.buf="",this.next(this.parseStartTimeHour)}if(this.atEndOfWord())return this.returnNow(createDate(this.state.result+"-"+this.state.buf));if(!isDigit(this.char))throw this.error(new TomlError("Incomplete datetime"));this.consume()}parseStartTimeHour(){return this.atEndOfWord()?this.returnNow(createDate(this.state.result)):this.goto(this.parseTimeHour)}parseTimeHour(){if(this.char===CHAR_COLON){if(this.state.buf.length<2)throw this.error(new TomlError("Hours less than 10 must be zero padded to two characters"));return this.state.result+="T"+this.state.buf,this.state.buf="",this.next(this.parseTimeMin)}if(!isDigit(this.char))throw this.error(new TomlError("Incomplete datetime"));this.consume()}parseTimeMin(){if(!(this.state.buf.length<2&&isDigit(this.char))){if(2===this.state.buf.length&&this.char===CHAR_COLON)return this.state.result+=":"+this.state.buf,this.state.buf="",this.next(this.parseTimeSec);throw this.error(new TomlError("Incomplete datetime"))}this.consume()}parseTimeSec(){if(!isDigit(this.char))throw this.error(new TomlError("Incomplete datetime"));if(this.consume(),2===this.state.buf.length)return this.state.result+=":"+this.state.buf,this.state.buf="",this.next(this.parseTimeZoneOrFraction)}parseOnlyTimeHour(){if(this.char===CHAR_COLON){if(this.state.buf.length<2)throw this.error(new TomlError("Hours less than 10 must be zero padded to two characters"));return this.state.result=this.state.buf,this.state.buf="",this.next(this.parseOnlyTimeMin)}throw this.error(new TomlError("Incomplete time"))}parseOnlyTimeMin(){if(!(this.state.buf.length<2&&isDigit(this.char))){if(2===this.state.buf.length&&this.char===CHAR_COLON)return this.state.result+=":"+this.state.buf,this.state.buf="",this.next(this.parseOnlyTimeSec);throw this.error(new TomlError("Incomplete time"))}this.consume()}parseOnlyTimeSec(){if(!isDigit(this.char))throw this.error(new TomlError("Incomplete time"));if(this.consume(),2===this.state.buf.length)return this.next(this.parseOnlyTimeFractionMaybe)}parseOnlyTimeFractionMaybe(){if(this.state.result+=":"+this.state.buf,this.char!==CHAR_PERIOD)return this.return(createTime(this.state.result));this.state.buf="",this.next(this.parseOnlyTimeFraction)}parseOnlyTimeFraction(){if(!isDigit(this.char)){if(this.atEndOfWord()){if(0===this.state.buf.length)throw this.error(new TomlError("Expected digit in milliseconds"));return this.returnNow(createTime(this.state.result+"."+this.state.buf))}throw this.error(new TomlError("Unexpected character in datetime, expected period (.), minus (-), plus (+) or Z"))}this.consume()}parseTimeZoneOrFraction(){if(this.char===CHAR_PERIOD)this.consume(),this.next(this.parseDateTimeFraction);else{if(this.char!==CHAR_HYPHEN&&this.char!==CHAR_PLUS){if(this.char===CHAR_Z)return this.consume(),this.return(createDateTime(this.state.result+this.state.buf));if(this.atEndOfWord())return this.returnNow(createDateTimeFloat(this.state.result+this.state.buf));throw this.error(new TomlError("Unexpected character in datetime, expected period (.), minus (-), plus (+) or Z"))}this.consume(),this.next(this.parseTimeZoneHour)}}parseDateTimeFraction(){if(isDigit(this.char))this.consume();else{if(1===this.state.buf.length)throw this.error(new TomlError("Expected digit in milliseconds"));if(this.char!==CHAR_HYPHEN&&this.char!==CHAR_PLUS){if(this.char===CHAR_Z)return this.consume(),this.return(createDateTime(this.state.result+this.state.buf));if(this.atEndOfWord())return this.returnNow(createDateTimeFloat(this.state.result+this.state.buf));throw this.error(new TomlError("Unexpected character in datetime, expected period (.), minus (-), plus (+) or Z"))}this.consume(),this.next(this.parseTimeZoneHour)}}parseTimeZoneHour(){if(!isDigit(this.char))throw this.error(new TomlError("Unexpected character in datetime, expected digit"));if(this.consume(),/\d\d$/.test(this.state.buf))return this.next(this.parseTimeZoneSep)}parseTimeZoneSep(){if(this.char!==CHAR_COLON)throw this.error(new TomlError("Unexpected character in datetime, expected colon"));this.consume(),this.next(this.parseTimeZoneMin)}parseTimeZoneMin(){if(!isDigit(this.char))throw this.error(new TomlError("Unexpected character in datetime, expected digit"));if(this.consume(),/\d\d$/.test(this.state.buf))return this.return(createDateTime(this.state.result+this.state.buf))}parseBoolean(){return this.char===CHAR_t?(this.consume(),this.next(this.parseTrue_r)):this.char===CHAR_f?(this.consume(),this.next(this.parseFalse_a)):void 0}parseTrue_r(){if(this.char===CHAR_r)return this.consume(),this.next(this.parseTrue_u);throw this.error(new TomlError("Invalid boolean, expected true or false"))}parseTrue_u(){if(this.char===CHAR_u)return this.consume(),this.next(this.parseTrue_e);throw this.error(new TomlError("Invalid boolean, expected true or false"))}parseTrue_e(){if(this.char===CHAR_e)return this.return(!0);throw this.error(new TomlError("Invalid boolean, expected true or false"))}parseFalse_a(){if(this.char===CHAR_a)return this.consume(),this.next(this.parseFalse_l);throw this.error(new TomlError("Invalid boolean, expected true or false"))}parseFalse_l(){if(this.char===CHAR_l)return this.consume(),this.next(this.parseFalse_s);throw this.error(new TomlError("Invalid boolean, expected true or false"))}parseFalse_s(){if(this.char===CHAR_s)return this.consume(),this.next(this.parseFalse_e);throw this.error(new TomlError("Invalid boolean, expected true or false"))}parseFalse_e(){if(this.char===CHAR_e)return this.return(!1);throw this.error(new TomlError("Invalid boolean, expected true or false"))}parseInlineList(){if(this.char===CHAR_SP||this.char===CTRL_I||this.char===CTRL_M||this.char===CTRL_J)return null;if(this.char===t.END)throw this.error(new TomlError("Unterminated inline array"));return this.char===CHAR_NUM?this.call(this.parseComment):this.char===CHAR_RSQB?this.return(this.state.resultArr||InlineList()):this.callNow(this.parseValue,this.recordInlineListValue)}recordInlineListValue(t){if(this.state.resultArr){const e=this.state.resultArr[_contentType],r=tomlType(t);if(e!==r)throw this.error(new TomlError(`Inline lists must be a single type, not a mix of ${e} and ${r}`))}else this.state.resultArr=InlineList(tomlType(t));return isFloat(t)||isInteger(t)?this.state.resultArr.push(t.valueOf()):this.state.resultArr.push(t),this.goto(this.parseInlineListNext)}parseInlineListNext(){if(this.char===CHAR_SP||this.char===CTRL_I||this.char===CTRL_M||this.char===CTRL_J)return null;if(this.char===CHAR_NUM)return this.call(this.parseComment);if(this.char===CHAR_COMMA)return this.next(this.parseInlineList);if(this.char===CHAR_RSQB)return this.goto(this.parseInlineList);throw this.error(new TomlError("Invalid character, expected whitespace, comma (,) or close bracket (])"))}parseInlineTable(){if(this.char===CHAR_SP||this.char===CTRL_I)return null;if(this.char===t.END||this.char===CHAR_NUM||this.char===CTRL_J||this.char===CTRL_M)throw this.error(new TomlError("Unterminated inline array"));return this.char===CHAR_RCUB?this.return(this.state.resultTable||InlineTable()):(this.state.resultTable||(this.state.resultTable=InlineTable()),this.callNow(this.parseAssign,this.recordInlineTableValue))}recordInlineTableValue(t){let e=this.state.resultTable,r=t.key.pop();for(let r of t.key){if(hasKey(e,r)&&(!isTable(e[r])||e[r][_declared]))throw this.error(new TomlError("Can't redefine existing key"));e=e[r]=e[r]||Table()}if(hasKey(e,r))throw this.error(new TomlError("Can't redefine existing key"));return isInteger(t.value)||isFloat(t.value)?e[r]=t.value.valueOf():e[r]=t.value,this.goto(this.parseInlineTableNext)}parseInlineTableNext(){if(this.char===CHAR_SP||this.char===CTRL_I)return null;if(this.char===t.END||this.char===CHAR_NUM||this.char===CTRL_J||this.char===CTRL_M)throw this.error(new TomlError("Unterminated inline array"));if(this.char===CHAR_COMMA)return this.next(this.parseInlineTable);if(this.char===CHAR_RCUB)return this.goto(this.parseInlineTable);throw this.error(new TomlError("Invalid character, expected whitespace, comma (,) or close bracket (])"))}}}},950:(t,e,r)=>{"use strict";t.exports=function(t,e){e||(e={});const r=e.blocksize||40960,n=new i;return new Promise(((t,e)=>{setImmediate(h,0,r,t,e)}));function h(e,r,i,a){if(e>=t.length)try{return i(n.finish())}catch(e){return a(s(e,t))}try{n.parse(t.slice(e,e+r)),setImmediate(h,e+r,r,i,a)}catch(e){a(s(e,t))}}};const i=r(676),s=r(418)},418:t=>{"use strict";t.exports=function(t,e){if(null==t.pos||null==t.line)return t;let r=t.message;if(r+=` at row ${t.line+1}, col ${t.col+1}, pos ${t.pos}:\n`,e&&e.split){const i=e.split(/\n/),s=String(Math.min(i.length,t.line+3)).length;let n=" ";for(;n.length<s;)n+=" ";for(let e=Math.max(0,t.line-1);e<Math.min(i.length,t.line+2);++e){let h=String(e+1);if(h.length<s&&(h=" "+h),t.line===e){r+=h+"> "+i[e]+"\n",r+=n+"  ";for(let e=0;e<t.col;++e)r+=" ";r+="^\n"}else r+=h+": "+i[e]+"\n"}}return t.message=r+"\n",t}},530:(t,e,r)=>{"use strict";t.exports=function(t){r.g.Buffer&&r.g.Buffer.isBuffer(t)&&(t=t.toString("utf8"));const e=new i;try{return e.parse(t),e.finish()}catch(e){throw s(e,t)}};const i=r(676),s=r(418)},512:(t,e,r)=>{"use strict";t.exports=r(530),t.exports.async=r(950),t.exports.prettyError=r(418)},921:t=>{"use strict";function e(t){return new Error("Can only stringify objects, not "+t)}function r(t){return Object.keys(t).filter((e=>n(t[e])))}function i(t){let e=Array.isArray(t)?[]:Object.prototype.hasOwnProperty.call(t,"__proto__")?{["__proto__"]:void 0}:{};for(let r of Object.keys(t))t[r]&&"function"==typeof t[r].toJSON&&!("toISOString"in t[r])?e[r]=t[r].toJSON():e[r]=t[r];return e}function s(t,o,c){var l,p;l=r(c=i(c)),p=function(t){return Object.keys(t).filter((e=>!n(t[e])))}(c);var _=[],m=o||"";l.forEach((t=>{var e=h(c[t]);"undefined"!==e&&"null"!==e&&_.push(m+a(t)+" = "+u(c[t],!0))})),_.length>0&&_.push("");var C=t&&l.length>0?o+"  ":"";return p.forEach((n=>{_.push(function(t,n,o,c){var u=h(c);if("array"===u)return function(t,r,n,o){f(o=i(o));var c=h(o[0]);if("table"!==c)throw e(c);var u=t+a(n),l="";return o.forEach((t=>{l.length>0&&(l+="\n"),l+=r+"[["+u+"]]\n",l+=s(u+".",r,t)})),l}(t,n,o,c);if("table"===u)return function(t,e,i,n){var h=t+a(i),o="";return r(n).length>0&&(o+=e+"["+h+"]\n"),o+s(h+".",e,n)}(t,n,o,c);throw e(u)}(t,C,n,c[n]))})),_.join("\n")}function n(t){switch(h(t)){case"undefined":case"null":case"integer":case"nan":case"float":case"boolean":case"string":case"datetime":return!0;case"array":return 0===t.length||"table"!==h(t[0]);case"table":return 0===Object.keys(t).length;default:return!1}}function h(t){return void 0===t?"undefined":null===t?"null":"bigint"==typeof t||Number.isInteger(t)&&!Object.is(t,-0)?"integer":"number"==typeof t?"float":"boolean"==typeof t?"boolean":"string"==typeof t?"string":"toISOString"in t?isNaN(t)?"undefined":"datetime":Array.isArray(t)?"array":"table"}function a(t){var e=String(t);return/^[-A-Za-z0-9_]+$/.test(e)?e:o(e)}function o(t){return'"'+c(t).replace(/"/g,'\\"')+'"'}function c(t){return t.replace(/\\/g,"\\\\").replace(/[\b]/g,"\\b").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\f/g,"\\f").replace(/\r/g,"\\r").replace(/([\u0000-\u001f\u007f])/,(t=>"\\u"+function(t,e){for(;e.length<4;)e="0"+e;return e}(0,t.codePointAt(0).toString(16))))}function u(t,e){let r=h(t);return"string"===r&&(e&&/\n/.test(t)?r="string-multiline":!/[\b\t\n\f\r']/.test(t)&&/"/.test(t)&&(r="string-literal")),l(t,r)}function l(t,r){switch(r||(r=h(t)),r){case"string-multiline":return function(t){let e=t.split(/\n/).map((t=>c(t).replace(/"(?="")/g,'\\"'))).join("\n");return'"'===e.slice(-1)&&(e+="\\\n"),'"""\n'+e+'"""'}(t);case"string":return o(t);case"string-literal":return"'"+t+"'";case"integer":return p(t);case"float":return function(t){if(t===1/0)return"inf";if(t===-1/0)return"-inf";if(Object.is(t,NaN))return"nan";if(Object.is(t,-0))return"-0.0";var e=String(t).split("."),r=e[0],i=e[1]||0;return p(r)+"."+i}(t);case"boolean":return function(t){return String(t)}(t);case"datetime":return function(t){return t.toISOString()}(t);case"array":return function(t){const e=f(t=i(t));var r="[",s=t.map((t=>l(t,e)));return s.join(", ").length>60||/\n/.test(s)?r+="\n  "+s.join(",\n  ")+"\n":r+=" "+s.join(", ")+(s.length>0?" ":""),r+"]"}(t.filter((t=>"null"!==h(t)&&"undefined"!==h(t)&&"nan"!==h(t))));case"table":return function(t){t=i(t);var e=[];return Object.keys(t).forEach((r=>{e.push(a(r)+" = "+u(t[r],!1))})),"{ "+e.join(", ")+(e.length>0?" ":"")+"}"}(t);default:throw e(r)}}function p(t){return String(t).replace(/\B(?=(\d{3})+(?!\d))/g,"_")}function f(t){const e=function(t){var e=h(t[0]);return t.every((t=>h(t)===e))?e:t.every((t=>{return"float"===(e=h(t))||"integer"===e;var e}))?"float":"mixed"}(t);if("mixed"===e)throw new Error("Array values can't have mixed types");return e}t.exports=function(t){if(null===t)throw e("null");if(void 0===t)throw e("undefined");if("object"!=typeof t)throw e(typeof t);if("function"==typeof t.toJSON&&(t=t.toJSON()),null==t)return null;const r=h(t);if("table"!==r)throw e(r);return s("","",t)},t.exports.value=l},22:(t,e,r)=>{"use strict";e.parse=r(512),e.stringify=r(921)}},__webpack_module_cache__={};function __webpack_require__(t){var e=__webpack_module_cache__[t];if(void 0!==e)return e.exports;var r=__webpack_module_cache__[t]={exports:{}};return __webpack_modules__[t](r,r.exports,__webpack_require__),r.exports}__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}();var __webpack_exports__={};(()=>{const t=__webpack_require__(22);window.parseTOML=function(e){return t.parse(e)},window.tomlStringify=function(e){const r=t.parse(e);return t.stringify(r)}})()})();