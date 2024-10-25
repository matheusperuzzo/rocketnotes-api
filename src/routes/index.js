const { Router } = require("express");

const notesRoutes = require("./notes.routes");
const sessionsRoutes = require("./sessions.routes");
const tagsRoutes = require("./tags.routes");
const usersRoutes = require("./users.routes");

const routes = new Router();

routes.use("/notes", notesRoutes);
routes.use("/sessions", sessionsRoutes);
routes.use("/tags", tagsRoutes);
routes.use("/users", usersRoutes);

module.exports = routes;
