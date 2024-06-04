const fs = require("fs");

const init = async (app) => {
  const rootPath = __dirname;
  const moduleNames = await fs.promises.readdir(rootPath);
  await Promise.all(
    moduleNames.map(async (moduleName) => {
      const stat = await fs.promises.lstat(`${rootPath}/${moduleName}`);
      if (stat.isDirectory()) {
        // eslint-disable-next-line global-require
        const module = require(`./${moduleName}`);
        if (module.init) {
          await module.init(app);
        }
      }
    })
  );
  return app;
};

module.exports = { init };

/* 

The init function in the src/modules/index.js file is responsible for initializing all the modules in your application.

Here's a step-by-step explanation of what it does:

It takes an app object as an argument. This is typically an instance of an Express.js application.

It reads the names of all files and directories in the [src/modules] directory using fs.promises.readdir.

For each file or directory name, it checks if it's a directory using fs.promises.lstat.

If it is a directory, it tries to require a file from that directory. It assumes that the required file exports an object with an init function.

If the init function exists, it calls this function, passing the app object as an argument. This is typically used to set up routes, middleware, or other application-specific settings for the module.

Finally, it returns the app object.

This function is asynchronous, which means it returns a Promise. This allows it to wait for all modules to be initialized before it continues. This is important because some modules might depend on others being initialized first.

*/
