const chalk = require('chalk');
const path = require('path');
const fs = require('fs');

const {
  entryTemplate
} = require('../template/index');

const resolve = (...file) => path.resolve(__dirname, ...file);
const errorLog = error => console.log(chalk.red(`${error}`));
const log = message => console.log(chalk.green(`${message}`));

process.stdout.write('请输入组件名称，例如(Button):');
process.stdin.on('data', (input) => {

  const inputName = input.toString().trim();
  const componentDir = resolve('../packages', inputName);
  const vueSrc = `${componentDir}/src`;
  const entryName = resolve(componentDir, 'index.js');
  const VueName = resolve(vueSrc, 'index.vue');
  const mdSrc = resolve('../docs/components/element', `${inputName.toLowerCase()}.md`);

  fs.readFile(resolve('../template/index.vue'), 'utf8', async (err, data) => {
    if (err) return err;
    data = data.replace(/\$\{componentName\}/g, inputName);

    if (fs.existsSync(vueSrc)) {
      errorLog(`${vueSrc}组件已存在，请重新输入`);
      return;
    } else {
      log(`正在生成组件目录 ${vueSrc}`);
      await createDir(vueSrc);
    }
    log(`正在生成 vue 组件 ${VueName}`);
    await generateFile(VueName, data);

    log(`正在生成组件入口文件 ${entryName}`);
    await generateFile(entryName, entryTemplate(inputName));
    
    // await createComponentMd(inputName, mdSrc);
    await fs.readFile(resolve('../template/index.md'), 'utf8', async (err, data) => {
      if (err) return err;
      data = data.replace(/\$\{componentName\}/g, inputName);
      
      log(`正在生成组件文档 md ${mdSrc}`);
      await generateFile(mdSrc, data);
      process.stdin.emit('end');
    });

  });
  

});

process.stdin.on('end', () => {
  log('exit');
  process.exit();
});


function generateFile(path, data) {
  if (fs.existsSync(path)) {
    errorLog(`${path}文件已存在`);
    return;
  }
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, 'utf8', err => {
      if (err) {
        errorLog(err.message);
        reject(err);
      } else {
        resolve(true);
      }
    });
  });
}

function createDir(directory) {
  return new Promise((resolve) => {
    mkDirs(directory, function () {
      resolve(true);
    });
  });
}

// 递归创建目录
function mkDirs(directory, callback) {
  var exists = fs.existsSync(directory);
  if (exists) {
    callback();
  } else {
    mkDirs(path.dirname(directory), function () {
      fs.mkdirSync(directory);
      callback();
    });
  }
}