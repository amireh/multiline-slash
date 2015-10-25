module.exports = function(strGenerator, removePadding) {
  return strGenerator.toString()
    .replace(/^function\s*\(\)\s*\{|\}$/g, '')
    .replace(/^(\s+)\/\/[ ]?/mg, removePadding ? '' : '$1')
  ;
};