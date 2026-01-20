import { Schema, model } from "mongoose";

const categorySchema = new Schema({
  title: { type: String, require: true },
  restaurant: { type: Schema.Types.ObjectId, ref: "Restaurant" },
  items: [{ type: Schema.Types.ObjectId, ref: "Item" }],
  image: { type: String },
});

export default model("Category", categorySchema);
