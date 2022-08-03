import mongoose from "mongoose";
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  authorName: {
    type: String,
    required: true,
}
 
});
export default mongoose.model("Book", bookSchema);
