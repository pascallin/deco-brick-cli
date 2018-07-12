#!/usr/bin/env node
const program = require('commander');
const download = require('download-git-repo');
const chalk = require('chalk');
const ora = require('ora');
const spinner = ora('downing...');

program.version('0.1.0', '-v, --version')
    .command('init <name>')
    .action((name) => {
      spinner.start();
      download('github:pascallin/deco-brick-cli#template', name, (err) => {
          if (err) {
            console.log(chalk.red('Error: ' + err.message));
            console.log(chalk.red('Download failed. Please retry later.'));
            spinner.fail();
            return
          }
          console.log(chalk.green('Project create successed.'));
          spinner.succeed();
      })
    });
program.parse(process.argv);