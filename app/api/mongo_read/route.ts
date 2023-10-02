import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(request: Request) {
    const users = await prisma.datasets.findMany()
    return NextResponse.json(users)
}