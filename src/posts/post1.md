---
slug: "/first-post"
date: "2018-08-15"
title: "The Test Post"
---

# Post One

## Defining install location
yarn global bin will output the location where Yarn will install symlinks to your installed executables. You can configure the base location with yarn config set prefix <filepath>. For example, yarn config set prefix ~/.yarn will ensure all global packages will have their executables installed to ~/.yarn/bin.

yarn global dir will print the output of the global installation folder that houses the global node_modules. By default that will be: ~/.config/yarn/global.

## Adding the install location to your PATH
To use the installed packages, the install location has to be added to the PATH environment variable of your shell. For bash for example, you can add this line at the end of your .bashrc:

```bash
export PATH="$(yarn global bin):$PATH"
```