import Ayrke2eDataModel from "./base-model.mjs";

export default class Ayrke2eItemBase extends Ayrke2eDataModel {

  static defineSchema() {
    const fields = foundry.data.fields;
    const schema = {};

    schema.description = new fields.StringField({ required: true, blank: true });

    return schema;
  }

}