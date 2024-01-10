import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRouter from './routes/auth.js'; // Corrected path
import bookRouter from './routes/book.js'; // Corrected path

const app = express(); // Corrected spelling


// MIDDLEWARE
app.use(express.json());
dotenv.config();

// ROUTES
app.use('/auth', authRouter);
app.use('/book', bookRouter);

const PORT = process.env.PORT || 7878;

app.listen(PORT, () => {
    console.log(`app is listening to port ${PORT}`); // Corrected string interpolation
});

mongoose.connect(process.env.URL)
    .then(() => {
        console.log(`app is connected to dabase`); // Corrected log message
    })
 












// import express from 'express'
// import mongoose from 'mongoose'
// import dotenv from 'dotenv'
// import authRouter from '/routes/auth.js'
// import bookRouter from '/routes/book.js'


// const app = exprees()

// //MIDDLEWARE

// app.use(express.json())
// dotenv.config()


// //ROUTES

// app.use('/auth' , authRouter)


// app.use('/book' , bookRouter) 



// const PORT = process.env.PORT || 8000;


// app.listen (PORT, () =>{
//     console.log (`app is listing to prot${PORT}`);
// })

// mongoose.connect(process.env.MONGO_URL)
// .then(()=>{
//     console.log (`app is connected to dataBase`)
// })


