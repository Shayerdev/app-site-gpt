import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(isConnected){
        console.log('Mongo Database is already connected!');
        return;
    }
    try {
        await mongoose.connect(process.env.DB_MONGO_URI, {
            dbName: 'aws_collection',
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        isConnected = true;
        console.log('Mongo Database connected!');
    } catch (error){
        console.log(error);
    }
}
