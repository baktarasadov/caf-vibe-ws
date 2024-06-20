export class BaseRepository {
  constructor(model) {
    this.model = model;
  }

  create(data) {
    return this.model.create(data);
  }

  update(id, data) {
    return this.model.findByIdAndUpdate(id, data, {
      new: true,
    });
  }

  delete(id) {
    return this.model.findByIdAndDelete(id);
  }

  findById(id) {
    return this.model.findById(id);
  }

  findAll() {
    return this.model.find();
  }

  findOne(query) {
    return this.model.findOne(query);
  }

  find(query) {
    return this.model.find(query);
  }

  count(query) {
    return this.model.countDocuments(query);
  }

  aggregate(pipeline) {
    return this.model.aggregate(pipeline);
  }

  createMany(data) {
    return this.model.insertMany(data);
  }

  updateMany(query, data) {
    return this.model.updateMany(query, data);
  }

  bulkWrite(operations) {
    return this.model.bulkWrite(operations);
  }
}
