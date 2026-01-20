import { Schema, model } from "mongoose";

const itemSchema = new Schema({
  name: { type: String, require: true },
  price: { type: Number, require: true },
  category: { type: Schema.Types.ObjectId, ref: "Category" },
});

export default model("Item", itemSchema);
