const Joi = require("joi");
const response = require("./../utils/response");
const { Person } = require("./../models");

class PersonController {
  static async create(req, res) {
    try {
      const requestSchema = Joi.object({
        name: Joi.string().required(),
      });

      const { error, value } = requestSchema.validate(req.body);
      if (error) return response(res, 400, error.details[0].message);

      await Person.create(value);
      return response(res, 201, "Person created successfully");
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
      await Person.findById(value.id)
        .exec()
        .then((person) => {
          return response(res, 200, person);
        })
        .catch((error) => {
          console.log(`An error occured ${error}`);
          return response(res, 404, "Person not found");
        });
    } catch (error) {
      console.log(`An error occured ${error}`);
      return response(res, 500, "Could not get person");
    }
  }

  static async getAll(req, res) {
    try {
      //get all persons from the database
      const allPersons = await Person.find();
      return response(res, 200, allPersons);
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
      // await Person.findByIdAndUpdate(value.id)
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
      await Person.findByIdAndDelete(value.id).exec();
      return response(res, 200, "Person deleted successfully");
    } catch (error) {
      console.log(`An error occured ${error}`);
      return response(res, 500, "Could not delete person");
    }
  }
}

module.exports = PersonController;
