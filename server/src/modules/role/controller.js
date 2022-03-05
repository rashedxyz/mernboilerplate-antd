const express = require("express");
const {
  save,
  update,
  deleteById,
  getById,
  search,
  count,
} = require("./service");
const { validate } = require("./request");
const { handleValidation } = require("../../common/middlewares");
const { NotFound } = require("../../common/errors");

const router = express.Router();
const ModelName = "Role";

const getHandler = async (req, res, next) => {
  try {
    const items = [
      { id: 1, name: "Role 1" },
      { id: 2, name: "Role 2" },
    ];
    const result = {
      data: items,
      total: items.length,
      success: true,
    };
    res.status(200).send(result);
  } catch (error) {
    return next(error, req, res);
  }
};

const getByIdHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const item = await getById(id, ModelName);
    if (item) {
      res.status(200).send(item);
    } else {
      throw new NotFound(`Role not found by the id: ${id}`);
    }
  } catch (error) {
    return next(error, req, res);
  }
};

const postHandler = async (req, res, next) => {
  try {
    const { body } = req;
    const id = await save(body, ModelName);
    res.status(201).send(id);
  } catch (error) {
    return next(error, req, res);
  }
};

const searchHandler = async (req, res, next) => {
  try {
    const { body } = req;
    const id = await search(body, ModelName);
    res.status(200).send(id);
  } catch (error) {
    return next(error, req, res);
  }
};

const countHandler = async (req, res, next) => {
  try {
    const result = await count(req.body);
    const response = { success: true, ...result };
    res.status(200).send(response);
  } catch (error) {
    return next(error, req, res);
  }
};

const putHandler = async (req, res, next) => {
  try {
    const { body } = req;
    const id = await update(body, ModelName);
    res.status(200).send(id);
  } catch (error) {
    return next(error, req, res);
  }
};

const deleteHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    await deleteById(id, ModelName);
    res.status(200).send({ success: true, message: `${ModelName} deleted` });
  } catch (error) {
    return next(error, req, res);
  }
};

router.get("/", getHandler);
router.get("/:id", getByIdHandler);
router.post("/", handleValidation(validate), postHandler);
router.put("/", handleValidation(validate), putHandler);
router.post("/search", searchHandler);
router.post("/count", countHandler);
router.delete("/:id", deleteHandler);

module.exports = router;