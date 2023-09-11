const mongoose = require("mongoose");

const PersonSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

PersonSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

PersonSchema.set("toJSON", {
  virtuals: true,
});

const Person = mongoose.model("Person", PersonSchema);

module.exports = Person;
