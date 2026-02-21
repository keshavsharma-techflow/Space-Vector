import mongoose from "mongoose";

let connectDb = async() =>{
    await mongoose.connect("mongodb+srv://ks8295476_db_user:snPXxhuorUFQcPfs@cluster0.udf23z3.mongodb.net/CosmoDB");
}
export {connectDb};
