const glob10 = require("glob10").glob;

const x = glob10.sync("t1/t2/t3sym", { stat: true, withFileTypes: true });

console.log(x[0].fullpath());
