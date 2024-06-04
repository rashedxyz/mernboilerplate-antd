const { setup: setupCore } = require("./core");
const { init } = require("./modules");
const { handleError, handleRequest } = require("./common/middlewares");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

const start = async () => {
  const initModules = async (app) => {
    const app2 = await init(app);
    return app2;
  };

  const configureRoutes = async (app) => {
    app.use(handleRequest);
    const app2 = await initModules(app);
    app2.get("/", (req, res) => {
      res.send("Hello World!");
    });
    app2.use(handleError);
    return app2;
  };

  const { app, eventEmitter, connectWithDb, logger } = await setupCore();

  try {
    await configureRoutes(app);
    app.listen(PORT, async () => {
      logger.info(`Server started on port ${PORT}`);

      const broadcastDatabaseConnectionEstablished = (em) => {
        em.emit("databaseConnectionEstablished");
      };

      eventEmitter.on("databaseConnectionEstablished", () => {
        logger.info(
          "eventEmitterHealthCheck()=> Database connection established"
        );
      });

      await connectWithDb(broadcastDatabaseConnectionEstablished, eventEmitter);
      logger.info(`Database connection established at ${new Date()}`);
    });
  } catch (err) {
    handleError(err);
  }
};

start();

/* 
  The server.js file is the main entry point of your application. It sets up and starts the server, and also configures the routes for your application.

  Here's a breakdown of what the code does:

  It imports necessary modules and configurations using require. This includes the core setup from ./core, modules initialization from ./modules, and middleware handlers from ./common/middlewares.

  It defines the PORT constant, which is the port number on which the server will listen for incoming requests. This value is either taken from the environment variable PORT or defaults to 5000 if the environment variable is not set.

  The start function is defined and immediately invoked. This function is responsible for starting the server. Inside this function:

  initModules function is defined which initializes the modules of your application.

  configureRoutes function is defined which configures the routes of your application. It uses the handleRequest middleware for all routes, initializes the modules, sets up a route for the root path ("/"), and uses the handleError middleware for error handling.

  The core setup is performed using the setupCore function imported from ./core. This returns an Express app instance, an event emitter, a function to connect with the database, and a logger.

  The routes are configured using the configureRoutes function.

  The server is started using the app.listen method. Inside the callback of app.listen, it logs that the server has started, sets up an event listener for the databaseConnectionEstablished event, connects with the database, and logs that the database connection has been established.

  If any error occurs during the above steps, it is caught and handled by the handleError function.
*/
