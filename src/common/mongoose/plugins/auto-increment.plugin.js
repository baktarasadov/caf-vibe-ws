/**
 * @description Mongoose plugin to auto increment a field
 * @param {Mongoose.Schema} schema
 * @param {Object} options
 */
export default function autoIncrementPlugin(schema, options) {
  if (!options.incField) {
    throw new Error("Please specify incField!");
  }

  let fieldOptions = {
    type: Number,
  };

  if (options.incField !== "_id") {
    fieldOptions = {
      ...fieldOptions,
      unique: true,
    };
  }

  schema.add({
    [options.incField]: fieldOptions,
  });

  schema.pre("save", function (next) {
    if (this.isNew) {
      this.constructor
        .findOne({}, {}, { sort: { [options.incField]: -1 } })
        .then((lastRecord) => {
          this[options.incField] = lastRecord
            ? lastRecord[options.incField] + 1
            : 1;

          next();
        });
    } else {
      next();
    }
  });

  schema.pre("insertMany", async function (next, docs) {
    const lastRecord = await this.findOne(
      {},
      {},
      { sort: { [options.incField]: -1 } },
    );

    const lastCount = lastRecord ? lastRecord[options.incField] : 0;

    docs.forEach((doc, index) => {
      doc[options.incField] = lastCount + index + 1;
    });

    next();
  });
}
