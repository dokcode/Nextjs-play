import { ConnectDB } from '../../../../lib/config/db';
import  TodoModel  from '../../../../lib/models/TodoModel';
import { NextResponse } from "next/server";

const loadDb = async () => {
    await ConnectDB();
}
loadDb();

export async function GET (request: Request) {
    const todos = await TodoModel.find({})
    return NextResponse.json({todos:todos})
}
export async function POST (request: Request) {
    const {title, description} = await request.json();
    await TodoModel.create({
        title,
        description
    })
    return NextResponse.json({msg:"Todo created"})
}