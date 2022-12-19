const Book =require('../model/Book')

const getAllBooks=async(req,res,next)=>{
     //This route will provide all books
     let books;
     try{
         books=await Book.find()
     }catch(e){
        
     }
     if(!books){
         res.status(404).json({message:'no products found'})
     }
     return res.status(200).json({books})
}

const getById=async(req,res,next)=>{
  let id=req.params.id
  let book;
  try{
    book = await Book.findById(id)
  }catch(e){}
  if(!book){
return res.status(404).json({message:'No book found'})
  }
  return res.status(200).json({book})
}

const addBook = async (req, res, next) => {
    const { name, author, description, price, available ,image} =req.body;
    let book;
    try {
      book = new Book({
        name,
        author,
        description,
        price,
        available,
        image
      });
     await  book.save();
    } catch (err) {    
    }

    if (!book) {
      return res.status(500).json({ message: "Unable To Add" });
    }
    return res.status(200).json({ book });
  };

const updateBook=async(req,res,next)=>{
  const id=req.params.id
  const { name, author, description, price, available,image } =req.body;
  let book
  try{
    book=await Book.findByIdAndUpdate(id,{
      name,
      author,
      description,
      price,
      available,
      image
    })
  book=await book.save()
  }catch(e){

  }
  if (!book) {
    return res.status(500).json({ message: "Unable To Update by this id" });
  }
  return res.status(200).json({ book });
}

const deleteBook=async(req,res,next)=>{
  const id =req.params.id
  let book;
  try{
    book=await Book.findByIdAndRemove(id)
    await book.save()
  }catch(e){}
  if(!book){
    return res.status(404).json({ message: "Unable To delete by this id" });
  }
  return res.status(200).json({message:'Product successfully deleted'})
}

exports.getAllBooks=getAllBooks
exports.addBook=addBook
exports.getById=getById
exports.updateBook=updateBook
exports.deleteBook=deleteBook