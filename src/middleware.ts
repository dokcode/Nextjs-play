import { NextResponse } from "next/server";

export function middleware() {
    // return NextResponse.json({
    //     hello: "Middleware",
    // });
    return NextResponse.next();
}