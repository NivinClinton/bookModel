import bookModel from '../model/bookModel.js'

export const addBooks = async(req, res, next)=>{
    const { title, description, authorName } = req.body;

    const book = new bookModel({
        title,
        description,
        authorName
      });

      try {
        await book.save();
      } catch (err) {
        return console.log(err);
      }
      return res.status(201).json({ book });
}

export const getAllBooks = async (req, res, next) => {
    let books;
    try {
      books = await bookModel.find();
    } catch (err) {
      console.log(err);
    }
    if (!books) {
      return res.status(404).json({ message: "no books found" });
    }
    return res.status(200).json({ books });
  };

  export const updateBook = async (req, res, next) => {
    const { title, description, authorName } = req.body;
    const bookId = req.params.id;
    let book;
    try {
      book = await bookModel.findByIdAndUpdate(bookId, {
        title,
        description,
        authorName
      });
    } catch (err) {
      console.log(err);
    }
    if (!book) {
      return res.status(500).json({ message: "unable to find book" });
    }
    return res.status(200).json({ book });
  };

  export const deleteBook = async (req, res, next) => {
    const id = req.params.id;
    let book;
    try {
      book = await bookModel.findByIdAndRemove(id);
    } catch (err) {
      return console.log(err);
    }
    if (!book) {
      return res.status(404).json({ message: "unable to delete" });
    }
    return res.status(200).json({ message: "successfully deleted" });
  };