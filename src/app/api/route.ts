import { NextResponse } from "next/server";

export async function GET(params:any) {
    return NextResponse.json({
        hello:"World",
    });
}
export async function POST(request: Request) {
    const data = await request.json()
    return NextResponse.json({
        data,
    });
}
export async function PATCH(params:any) {
    return NextResponse.json({
        hello:"World",
    });
}
