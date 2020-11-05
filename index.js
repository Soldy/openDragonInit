'use strict'

const fs = require('fs');
const dirs  = (require('open_dragon_dirs')).dirs;

const initBase = function(){
     let createDatabase = function(){

     }
     let createDirs = function(){
         for (let i of dirs.all())
              fs.mkdirSync(i);
     }


}

exports.init = new initBase();


