#!/usr/bin/env node
const { program } = require("commander");
const download = require("download-git-repo");
const chalk = require("chalk");
const ora = require("ora");

const spinner = ora("downing...");
program.version("0.2.0", "-v, --vers", "output the current version");

const TEMPLATE_REPO = {
  "deco-brick": "github:pascallin/deco-brick-cli#template",
  "module-brick": "github:pascallin/module-brick#master",
};

program
  .command("init <name>")
  .option(
    "-t, --template <project>",
    "add the specified project template",
    "deco-brick" // default
  )
  .action((name, cmdObj) => {
    // get template
    const template = TEMPLATE_REPO[cmdObj.template];
    if (!template) {
      console.log(
        chalk.red(
          "Error: no project template, please using: deco-brick-cli init --template [deco-brick|module-brick] <name>"
        )
      );
      return;
    }

    spinner.start();
    download(template, name, (err) => {
      if (err) {
        console.log(chalk.red("Error: " + err.message));
        console.log(chalk.red("Download failed. Please retry later."));
        spinner.fail();
        return;
      }
      console.log(chalk.green("Project create successed."));
      spinner.succeed();
    });
  });
program.parse(process.argv);
