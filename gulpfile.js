'use strict';

const gulp = require('gulp');
const debug = require('gulp-debug');
const spawn = require('child_process').spawn;
const { Command } = require('commander');
const program = new Command();

program.option("--vers <version>", "version number for npm version");

console.log(process.argv);

program.parse(process.argv);

console.log(program.opts());

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
    return execute('npm run build', `${exec_dir}/widget`);
}

function version_core() {
    if (!program.opts().vers) {
        throw new Error("No version number specified");
    }
    return execute(`npm version ${program.opts().vers}`, `${exec_dir}/core`);
}

function version_widget() {
    if (!program.opts().vers) {
        throw new Error("No version number specified");
    }
    return execute(`npm version ${program.opts().vers}`, `${exec_dir}/widget`);
}


function publish() {
    return gulp.series(
        execute(`npm publish`, `${exec_dir}/core`),
        execute(`npm publish`, `${exec_dir}/widget`)
    );

}


function test() {
    return gulp.src('*/package.json').pipe(console.log);
}

async function help() {
    console.log(`
The following gulp tasks are available:
build: execute 'npm run build' in subdirectories
publish: execute 'npm publish' in subdirectories
version --vers=<version>: execute 'npm version <vers>' in subdirectories
`);
}

const build = gulp.series(build_core, build_widget);
const version = gulp.series(version_core, version_widget);

module.exports = {
    ...module.exports,
    default: help,
    help,
    build,
    version,
    test,
    publish
}

