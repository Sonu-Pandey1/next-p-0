import { NextResponse } from "next/server";
import { ConnectDB } from "../../../lib/Config/db";
import TodoModal from "../../../lib/models/TodoModel";


export const LoadDB =async ()=>{
    await ConnectDB();

}
LoadDB();

export async function GET(request){

    const todos =await TodoModal.find({});
    return NextResponse.json({ todos : todos})
}

export async function POST(request){

    const {title,description} = await request.json();
    await TodoModal.create({
        title,
        description
    })
    return NextResponse.json({ msg : "Todo Created"})
}
