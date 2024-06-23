const glob_7 = require("glob7").glob;
const glob_9 = require("glob10").glob;
const glob10 = require("glob10").glob;

const globs = {
  glob_7,
  glob_9,
  glob10,
};

function test2(tag, input, opt) {
  const opt2 = opt ? { ...opt } : undefined;
  const opts = JSON.stringify(opt);
  const glob = globs[tag];
  const s1 = glob.sync(input, opt2);
  console.log(`  ${tag}.sync("${input}", ${opts})`, "=>", s1);
}

function test(note, input, opt) {
  console.log(note);
  test2("glob_7", input, opt);
  test2("glob_9", input, opt);
  test2("glob10", input, opt);
  console.log("");
}

test("existing dir with trailing /", "t1/t2/t3/");
test("multiple existing dir with trailing /", "t1/t2/t?/");
test("existing dir without trailing /", "t1/t2/t3");
test("multiple existing dir without trailing /", "t1/t2/t?");
test("symlink dir with trailing /", "t1/t2/t3sym/");
test("mix symlink dir with trailing /", "t1/t2/t*/");
test("mix symlink dir without trailing /", "t1/t2/t*");
test("symlink dir without trailing /", "t1/t2/t3sym");
test("none existing dir with trailing /", "x1/x2/x3/");
test("multiple existing dir with trailing / and mark:true", "t1/t2/t?/", {
  mark: true,
});

test("mix symlink dir with trailing / and mark:true", "t1/t2/t*/", {
  mark: true,
});
