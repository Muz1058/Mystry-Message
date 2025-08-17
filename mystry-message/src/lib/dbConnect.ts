import mongoose from "mongoose";


type ConnectionObject={
    isConnected?:number
}
const  connection : ConnectionObject={}

async function dbConnect():Promise<void> {
    console.log("NEXTAUTH_URL =>", process.env.NEXTAUTH_URL);
console.log("NEXTAUTH_SECRET =>", process.env.NEXTAUTH_SECRET);

    if(connection.isConnected){
        console.log("Already connected to database");
        return
    }
    try {
       const db = await mongoose.connect(process.env.MONGODB_URI ||'',{});
       connection.isConnected= db.connections[0].readyState;

       console.log("DB Connected successfully")
    } catch (error) {
        console.log("DataBase connection failed :: ",error)        

        process.exit(1)
    }
}

export default dbConnect