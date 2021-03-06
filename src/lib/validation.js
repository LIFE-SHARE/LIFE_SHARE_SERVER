const BaseJoi = require('@hapi/joi');
const Joi = BaseJoi.extend(require('@hapi/joi-date'));

exports.validateRegisterUser = async (body) => {
  const schema = Joi.object().keys({
    id: Joi.string().required(),
    pw: Joi.string().required(),
    name: Joi.string().required(),
    age: Joi.string().required(),
    phone_number: Joi.string().required(),
    auth: Joi.string().required(),
    gender: Joi.string().required(),
  });

  try {
    return await Joi.validate(body, schema);
  } catch(error) {
    throw error;
  }
}
