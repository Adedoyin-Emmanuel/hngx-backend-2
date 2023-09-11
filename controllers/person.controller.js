const Joi = require("joi");
const response = require("./../utils/response");
//person model

class PersonController {
  static async create(req, res) {
    try {
      const requestSchema = Joi.object({
        name: Joi.string().required(),
      });

      const { error, value } = requestSchema.validate(req.body);
      if (error) return response(res, 400, error.details[0].message);

      //store the person inside the database
    } catch (error) {
      console.log(`An error occured ${error}`);
      return response(res, 500, "Could not create person");
    }
  }

  static async getById(req, res) {
    try {
      const requestSchema = Joi.object({
        id: Joi.string().required(),
      });

      const { error, value } = requestSchema.validate(req.body);
      if (error) return response(res, 400, error.details[0].message);

      //get the person with that Id from the database
    } catch (error) {
      console.log(`An error occured ${error}`);
      return response(res, 500, "Could not get person");
    }
  }

  static async getAll(req, res) {
    try {
      //get all persons from the database
      return response(res, 200, {});
    } catch (error) {
      console.log(`An error occured ${error}`);
      return response(res, 500, "Could not retrive persons from db");
    }
  }

  static async update(req, res) {
    try {
      const requestSchema = Joi.object({
        id: Joi.string().required(),
        name: Joi.string().required(),
      });

      const { error, value } = requestSchema.validate(req.body);
      if (error) return response(res, 400, error.details[0].message);

      //update the person value in the database
    } catch (error) {
      console.log(`An error occured ${error}`);
      return response(res, 500, "Could not retrive persons from db");
    }
  }

  static async delete(req, res) {
    try {
      const requestSchema = Joi.object({
        id: Joi.string().required(),
      });

      const { error, value } = requestSchema.validate(req.body);
      if (error) return response(res, 400, error.details[0].message);

      //delete the person value in the database
    } catch (error) {
      console.log(`An error occured ${error}`);
      return response(res, 500, "Could not delete person");
    }
  }
}

module.exports = PersonController;
