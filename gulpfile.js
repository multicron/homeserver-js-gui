'use strict';

const gulp = require('gulp');
const spawn = require('child_process').spawn;

let exec_dir = process.cwd();

console.log(`Execution directory = ${exec_dir}`);

function execute(command, cwd, timeout) {
    cwd ??= process.cwd();
    console.log(`Executing "${command}" in directory ${cwd} with timeout ${timeout}`);
    return spawn('/bin/sh', ['-c', command],
        {
            cwd: cwd,
            timeout: timeout,
            stdio: [null, "inherit", "inherit"]
        }
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

function build_core() {
    return execute('npm run build', `${exec_dir}/core`);
}

function build_widget() {
    return execute('npm run build', `${exec_dir}/core`);
}

async function help() {
    console.log(`
The following gulp tasks are available:
build_core: run 'npm run build' in ${exec_dir}/core
build_widget: run 'npm run build' in ${exec_dir}/widget
`);
}

const build = gulp.series(build_core, build_widget);

module.exports = {
    ...module.exports,
    default: help,
    help,
    build,
}

