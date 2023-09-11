const Joi = require("joi");
const response = require("./../utils/response");
const { Person } = require("./../models");
const _ = require("lodash");

class PersonController {
  static async create(req, res) {
    try {
      const requestSchema = Joi.object({
        name: Joi.string().required(),
      });

      const { error, value } = requestSchema.validate(req.body);
      if (error) return response(res, 400, error.details[0].message);

      const person = await Person.create(value);
      const filteredPerson = _.pick(person, ["name", "id"]);
      return response(res, 201, "Person created successfully", filteredPerson);
    } catch (error) {
      console.log(`An error occured ${error}`);
      return response(res, 500, "An error occured while creating person");
    }
  }

  static async getById(req, res) {
    try {
      const requestSchema = Joi.object({
        id: Joi.string().required(),
      });

      const { error, value } = requestSchema.validate(req.params);
      if (error) return response(res, 400, error.details[0].message);

      //get the person with that Id from the database
      await Person.findById(value.id)
        .exec()
        .then((person) => {
          const filteredPerson = _.pick(person, ["name", "id"]);
          return response(
            res,
            200,
            "Person retrived successfully",
            filteredPerson
          );
        })
        .catch((error) => {
          console.log(`An error occured ${error}`);
          return response(res, 404, "Person not found");
        });
    } catch (error) {
      console.log(`An error occured ${error}`);
      return response(res, 500, "An error occured while fetching person");
    }
  }

  static async update(req, res) {
    try {
      const requestSchema = Joi.object({
        name: Joi.string().required(),
      });

      const requestParamsSchema = Joi.object({
        id: Joi.string().required(),
      });

      const { error: paramsReqError, value: paramsReqValue } =
        requestParamsSchema.validate(req.params);
      if (paramsReqError)
        return response(res, 400, paramsReqError.details[0].message);

      const { error, value } = requestSchema.validate(req.body);
      if (error) return response(res, 400, error.details[0].message);

      const updatedPerson = await Person.findOneAndUpdate(
        { _id: paramsReqValue.id },
        { name: value.name },
        { new: true }
      );

      if (!updatedPerson) return response(res, 404, "Person not found");
      const filteredPerson = _.pick(updatedPerson, ["name", "id"]);
      return response(res, 200, "Person updated successfully", filteredPerson);
    } catch (error) {
      console.log(`An error occured ${error}`);
      return response(res, 500, "An error occured while updating person");
    }
  }

  static async delete(req, res) {
    try {
      const requestSchema = Joi.object({
        id: Joi.string().required(),
      });

      const { error, value } = requestSchema.validate(req.params);
      if (error) return response(res, 400, error.details[0].message);

      const deletedPerson = await Person.findByIdAndDelete(value.id).exec();
      if (!deletedPerson) return response(res, 404, "Person not found");
      return response(res, 200, "Person deleted successfully");
    } catch (error) {
      console.log(`An error occured ${error}`);
      return response(res, 500, "An error occured while deleting person");
    }
  }
}

module.exports = PersonController;
