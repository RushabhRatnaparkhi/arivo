import mongoose from "mongoose";
let isConnected = false;
export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if (isConnected) {
        console.log("mongodb is already connected");
        return;

    }
    try {
        await mongoose.connect('mongodb+srv://rushuratnaparkhi2:rushuratnaparkhi2@certificategenerator.phjs0ff.mongodb.net/?retryWrites=true&w=majority&appName=CertificateGenerator', {
            dbName: "certificategenerator",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        isConnected = true;
        console.log("MongoDB connected");
    } catch (error) {
        console.log(error);
    }
}