import mongoose from "mongoose";

export const dbConnection = () =>{
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "RESTAURANT",
    })
    .then(() => {
        console.log('Connected to database sucessfully ');
    }).catch(err =>{
        console.log(`Something is happend with connection to database! ${err} `);
        
    })
};