test behavior differences for dirs and trailing / between versions 7, 9, and 10 of https://www.npmjs.com/package/glob

```
existing dir with trailing /
  glob_7.sync("t1/t2/t3/", undefined) => [ 't1/t2/t3/' ]
  glob_9.sync("t1/t2/t3/", undefined) => [ 't1/t2/t3' ]
  glob10.sync("t1/t2/t3/", undefined) => [ 't1/t2/t3' ]

multiple existing dir with trailing /
  glob_7.sync("t1/t2/t?/", undefined) => [ 't1/t2/t3/', 't1/t2/t4/', 't1/t2/t5/', 't1/t2/t6/' ]
  glob_9.sync("t1/t2/t?/", undefined) => [ 't1/t2/t6', 't1/t2/t5', 't1/t2/t4', 't1/t2/t3' ]
  glob10.sync("t1/t2/t?/", undefined) => [ 't1/t2/t6', 't1/t2/t5', 't1/t2/t4', 't1/t2/t3' ]

existing dir without trailing /
  glob_7.sync("t1/t2/t3", undefined) => [ 't1/t2/t3' ]
  glob_9.sync("t1/t2/t3", undefined) => [ 't1/t2/t3' ]
  glob10.sync("t1/t2/t3", undefined) => [ 't1/t2/t3' ]

multiple existing dir without trailing /
  glob_7.sync("t1/t2/t?", undefined) => [ 't1/t2/t3', 't1/t2/t4', 't1/t2/t5', 't1/t2/t6' ]
  glob_9.sync("t1/t2/t?", undefined) => [ 't1/t2/t6', 't1/t2/t5', 't1/t2/t4', 't1/t2/t3' ]
  glob10.sync("t1/t2/t?", undefined) => [ 't1/t2/t6', 't1/t2/t5', 't1/t2/t4', 't1/t2/t3' ]

symlink dir with trailing /
  glob_7.sync("t1/t2/t3sym/", undefined) => [ 't1/t2/t3sym/' ]
  glob_9.sync("t1/t2/t3sym/", undefined) => [ 't1/t2/t3sym' ]
  glob10.sync("t1/t2/t3sym/", undefined) => [ 't1/t2/t3sym' ]

mix symlink dir with trailing /
  glob_7.sync("t1/t2/t*/", undefined) => [ 't1/t2/t3/', 't1/t2/t3sym/', 't1/t2/t4/', 't1/t2/t5/', 't1/t2/t6/' ]
  glob_9.sync("t1/t2/t*/", undefined) => [ 't1/t2/t6', 't1/t2/t5', 't1/t2/t4', 't1/t2/t3sym', 't1/t2/t3' ]
  glob10.sync("t1/t2/t*/", undefined) => [ 't1/t2/t6', 't1/t2/t5', 't1/t2/t4', 't1/t2/t3sym', 't1/t2/t3' ]

mix symlink dir without trailing /
  glob_7.sync("t1/t2/t*", undefined) => [ 't1/t2/t3', 't1/t2/t3sym', 't1/t2/t4', 't1/t2/t5', 't1/t2/t6' ]
  glob_9.sync("t1/t2/t*", undefined) => [ 't1/t2/t6', 't1/t2/t5', 't1/t2/t4', 't1/t2/t3sym', 't1/t2/t3' ]
  glob10.sync("t1/t2/t*", undefined) => [ 't1/t2/t6', 't1/t2/t5', 't1/t2/t4', 't1/t2/t3sym', 't1/t2/t3' ]

symlink dir without trailing /
  glob_7.sync("t1/t2/t3sym", undefined) => [ 't1/t2/t3sym' ]
  glob_9.sync("t1/t2/t3sym", undefined) => [ 't1/t2/t3sym' ]
  glob10.sync("t1/t2/t3sym", undefined) => [ 't1/t2/t3sym' ]

none existing dir with trailing /
  glob_7.sync("x1/x2/x3/", undefined) => []
  glob_9.sync("x1/x2/x3/", undefined) => []
  glob10.sync("x1/x2/x3/", undefined) => []

multiple existing dir with trailing / and mark:true
  glob_7.sync("t1/t2/t?/", {"mark":true}) => [ 't1/t2/t3/', 't1/t2/t4/', 't1/t2/t5/', 't1/t2/t6/' ]
  glob_9.sync("t1/t2/t?/", {"mark":true}) => [ 't1/t2/t6/', 't1/t2/t5/', 't1/t2/t4/', 't1/t2/t3/' ]
  glob10.sync("t1/t2/t?/", {"mark":true}) => [ 't1/t2/t6/', 't1/t2/t5/', 't1/t2/t4/', 't1/t2/t3/' ]

mix symlink dir with trailing / and mark:true
  glob_7.sync("t1/t2/t*/", {"mark":true}) => [ 't1/t2/t3/', 't1/t2/t3sym/', 't1/t2/t4/', 't1/t2/t5/', 't1/t2/t6/' ]
  glob_9.sync("t1/t2/t*/", {"mark":true}) => [ 't1/t2/t6/', 't1/t2/t5/', 't1/t2/t4/', 't1/t2/t3sym', 't1/t2/t3/' ]
  glob10.sync("t1/t2/t*/", {"mark":true}) => [ 't1/t2/t6/', 't1/t2/t5/', 't1/t2/t4/', 't1/t2/t3sym', 't1/t2/t3/' ]
```
