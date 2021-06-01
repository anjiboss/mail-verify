const genCode = (times) => {
  let code = "MB-";
  for (let i = 0; i < times; i++) {
    code += (Math.floor(Math.random() * 91) + 10).toString();
  }
  return code;
};

module.exports = genCode;
