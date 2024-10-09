import mongoose from 'mongoose';

export default async function connectDb(){
    mongoose.connect('mongodb+srv://admin:admin@koliadatabase.1dnjc.mongodb.net/spotify?retryWrites=true&w=majority&appName=KoliaDataBase')

    return mongoose.connection
}