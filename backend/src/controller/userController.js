import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();


export const getAllUsers = async (
    req,
    res,
    next
) => {
    const data = await prisma.user.findMany()

    res.status(200).json({
        data,
    });
}

export const createUser = async (
    req,
    res,
    next
) => {
    const { name, email } = req.body

    const createdUser = await prisma.user.create({
        data: {
            name,
            email,
        }
    })

    res.status(200).json({
        message: 'user created',
        data: createdUser,
    });
}

export const deleteUser = async (
    req,
    res,
    next
) => {
    
    const id = parseInt(req.params.id)

    const deleteUser = await prisma.user.delete({
        where: {
            id
        }
    })

    res.status(200).json({
        message: 'user deleted',
        data: deleteUser,
    });
}

export const updateUser = async (
    req,
    res,
    next
) => {
    
    const id = parseInt(req.params.id)
    const { name, email } = req.body
    
    const updateUser = await prisma.user.update({
        where: {
            id: id
        },
        data: {
            name: name,
            email: email,
        }
    })

    res.status(200).json({
        message: 'user updateUser',
        data: updateUser,
    });
}
