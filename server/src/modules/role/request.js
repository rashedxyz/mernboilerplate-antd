const Joi = require("joi");

const schema = Joi.object().keys({
  _id: Joi.string().optional(),
  name: Joi.string().min(2).max(30).required(),
  alias: Joi.string().required(),
});

const validate = (data) => {
  const result = schema.validate(data);
  data.isSuperAdmin = false;
  data.isAdmin = false;
  result.value = data;
  return result;
};

module.exports = { validate };