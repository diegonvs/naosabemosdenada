const babel = require('babel-core');
const babelDeps = require('babel-deps');
const pkg = require('../package.json');
const deps = pkg.dependencies;
const fs = require('fs');
const { exec } = require('child_process');

export function removeVersions(obj){
    let values = [];
    for (var key in obj) {
        values.push(key);
    }
    return values;
}

export function getFile(depName){
    if (require(`../node_modules/${depName}`)){
        return;
    }else{
        new Error(`File doesn't exists!`);
    }
}

export function compile(){
    removeVersions(this.deps).forEach(function(element) {
        babel.transformFile(getFile(element));
    }, this);
}

