import { Schema, model } from "mongoose";

const restaurantSchema = new Schema({
  name: { type: String, require: true },
  categories: [{ type: Schema.Types.ObjectId, ref: "Category" }],
});

export default model("Restaurant", restaurantSchema);
