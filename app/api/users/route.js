import { NextResponse } from 'next/server'
export async function GET(request){

    const users = [
        {id: 1, name: 'John'},
        {id: 2, name: 'Kris'},
        {id: 3, name: 'Lora'}
    ]

    return NextResponse.json(users);
}
