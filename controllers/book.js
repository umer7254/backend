import Book from "../models/book.js";

export  const createBook = async (req, res) =>{
    try {

        const {
            title,
            author
        } = req.body

        const newBook =  await Book({
            title,
            author
        })

        const savedBook = await newBook.save()
        
        res.status(200).json({
            ok:"true",
            message:"You created Your Book",
            data: savedBook
        })
    } catch (err) {
        res.status(500).json({error : err.message})
    }
    

    
} ;

//get book data

export const getBook = async (req, res) =>{
  try {
    const books= await Book.find();
    res.status(200).json({
        ok:true, message:"your data is here",data:books
    })
  } 
  catch (err) {
   res.status(500).json({
    error:err.message
   }) 
  }  

};
// get book data by id
export const getBookID = async (req, res) =>{

    try {
        const booksID= await Book.findById(req.params.id);
        res.status(500).json({
            ok:true, message:"your data is here",data:booksID
        })
    } catch (err) {
        
        res.status(500).json({
            error:err.message
           })   
    }
}