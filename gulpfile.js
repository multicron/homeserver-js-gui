'use strict';

const gulp = require('gulp');
const debug = require('gulp-debug');
const exec = require('gulp-exec');
const spawn = require('child_process').spawn;
const { Command } = require('commander');
const program = new Command();
const util = require('util');

program
    .option("--vers <version>", "version number for npm version")
    .option("--otp <one-time-pad>", "one-time pad for npm publish");

console.log(process.argv);

program.parse(process.argv);

console.log(program.opts());

const subdirs = ['core', 'widget'];

let exec_dir = process.cwd();

console.log(`Execution directory = ${exec_dir}`);

function execute(command, cwd, timeout) {
    cwd ??= process.cwd();
    console.log(`Executing "${command}" in directory ${cwd} with timeout ${timeout}`);
    return spawn('cmd.exe', ['/C', command],
        {
            cwd: cwd,
            timeout: timeout,
            stdio: [null, "inherit", "inherit"]
        }
    );
}

function series_in_subdirs(command) {
    return gulp.series(subdirs.map((dir) => {
        return () => execute(command, `${exec_dir}/${dir}`);
    })
    );
}

function copy_gulpfile() {
    return execute(`cp ./gulpfile.js ./otto/gulpfile.js`);
}

function push_gulpfile() {
    return execute(`git add gulpfile.js; git commit -m "gulp push_gulpfile"; git push`, `${exec_dir}/otto`);
}

function diff_gulpfile() {
    return execute(`diff gulpfile.js otto/gulpfile.js`);
}

function run_server() {
    return execute(`node --inspect=192.168.5.100:9229 ${exec_dir}/otto/src/index.js >${exec_dir}/server.log 2>&1`, `${exec_dir}/otto`);
}

async function check_server() {
    return execute(`node -c --inspect=192.168.5.100:9230 ${exec_dir}/otto/src/index.js`, `${exec_dir}/otto`);
}

function run_ble_presence_server() {
    return execute(`/bin/nice --adjustment=-11 node ${exec_dir}/otto/src/ble_presence_server.js >${exec_dir}/ble_presence_server.log 2>&1`, `${exec_dir}/otto/bin`);
}

function shellsuccess() {
    return execute('sleep 3; /bin/ls', '/');
}

function shellfail() {
    return execute('ls; sleep 3; nofound');
}

const build = series_in_subdirs('npm run build');

const ls = series_in_subdirs('npm ls');

const install = series_in_subdirs('npm install');

const version = series_in_subdirs(`npm version ${program.opts().vers} --otp=${program.opts().otp}`);

const publish = series_in_subdirs(`npm publish --otp=${program.opts().otp}`);

const check = series_in_subdirs(`node --experimental-specifier-resolution=node dist/index.js`);

const bldchk = gulp.series(build, check);

function test() {
    return gulp
        .src('*/')
        .pipe(debug())
        .pipe(exec((file) => {
            console.log("LOG:", file.path);
            return `echo ${file.path}`;
        }))
    // .pipe(exec.reporter())
}

async function help() {
    console.log(`
The following gulp tasks are available:
build: execute 'npm run build' in subdirectories
publish --otp=<one-time-pad>: execute 'npm publish' in subdirectories
version --vers=<version>: execute 'npm version <vers>' in subdirectories
`);
}

module.exports = {
    ...module.exports,
    default: help,
    help,
    build,
    version,
    test,
    publish,
    ls,
    install,
    check,
    bldchk
}

