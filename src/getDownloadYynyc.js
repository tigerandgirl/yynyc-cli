/*
 * @Description: 前端脚手架生成工具
 * @Author: Tiger(qiufh@yonyou.com)
 * @Date: 2019-02-15 11:09:55
 */

const chalk = require('chalk');
const path = require('path');
const pathExists = require('path-exists');
const download = require('download-git-repo');

module.exports = (folderName = '.') => {
    console.log(chalk.green(`\t\t⏳  YYNYC cloud transfer to local machine ⏳`));
    console.log();
    // console.log(chalk.green(`⏳🔊📢⚠️🇺🇿🌍☁️`));
    console.log(chalk.cyan.bold(`[Info] :    🚀 Start downloading AFDP project to the current directory 🎁`));
    console.log(chalk.cyan.bold(`Path:${path.resolve('.', folderName)}  🏠`));
    console.log();

    var ProgressBar = require('./processBar');
    var pb = new ProgressBar('Download', 72);
    var num = 0, total = 100;
    function downloading() {
        if (num < total) {
            pb.render({ completed: num, total: total, status: 'Downloading...' });
            num++;
            setTimeout(function () {
                downloading();
            }, 20);
        } else {
            //pb.render({ completed: num, total: total, status: "Completed." });
            //process.exit(0);
        }
    }



    if (!pathExists.sync(folderName) || folderName =='.') {
        downloading();
        download('iuap-design/ucf-webapp', folderName, function (err) {
            if (!err) {
                pb.render({ completed: num, total: total, status: "Completed." });
                console.log();
                console.log();
                console.log(chalk.cyan(`🚀 Next, install NPM package dependencies 🎁 `));
                console.log(chalk.cyan(`[Tips] : 🏆  cd ${folderName} && npm install && npm start`));
            } else {

            }
        });
    } else {
        console.log(chalk.red.bold(`[Error] :   ⚠️  directory ${folderName} already exists. 😫`));
        console.log(chalk.yellow(`[Tips] :    🤔 Try renaming the project name 🤗  `));
        process.exit(0);
    }

}