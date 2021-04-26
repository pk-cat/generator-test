const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  // // Yeoman 自动在生成文件阶段调用这个方法
  // writing() {
  //   // 父类的 fs 模块
  //   this.fs.write(this.destinationPath("tem.text"), "test something");
  //   const tem = this.templatePath("index.html");
  //   const output = this.destinationPath("tem.html");
  //   const text = { title: "yeoman generator", success: true };
  //   this.fs.copyTpl(tem, output, text);
  // }
  // 获取用户输入
  prompting() {
    return this.prompt([
      {
        type: "input", // 用户输入的方式
        name: "title",
        message: "your project title", // 提示
        default: this.appname, // appname 为 为项目生成目录的名称，作为 这个问题的默认值
      },
    ]).then((answers) => {
      this.answers = answers;
    });
  }
    // Yeoman 自动在生成文件阶段调用这个方法--模板读取
    writing() {
      const items = [
        "test.html",
        "README.md",
        "package.json",
        "package-lock.json",
        "babel.config.js",
        ".gitignore",
        "src/main.js",
        "src/App.vue",
        "src/components/HelloWorld.vue",
        "src/assets/logo.png",
        "public/index.html",
        "public/favicon.ico",
      ]
      items.forEach(e=> {
        const tem = this.templatePath(e);
        const output = this.destinationPath(e);
        const text = { title: this.answers.title, success: true };
        this.fs.copyTpl(tem, output, text);
      })
    }
};
