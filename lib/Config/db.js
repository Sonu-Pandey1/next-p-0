import mongoose from "mongoose"

export const ConnectDB =async ()=>{
    await mongoose.connect("mongodb+srv://SonuPandey:Sonu8766325423@cluster0.yakbi2y.mongodb.net/next-todo");
    console.log("DB Connected")

}