"use server"
import { revalidatePath } from "next/cache"
import { getPost } from "./cart"
import { redirect } from "next/navigation"

export const createTask = async (formData) => {
    "use server"

    const newTask = Object.fromEntries(formData.entries())
    console.log(newTask)

    const res = await getPost(newTask)
    if(res.ok){
        revalidatePath('/cart')
    }
    return res
}

export const newCreateTask = async (formData) => {

    const newTask = Object.fromEntries(formData.entries())
    console.log(newTask)

    const res = await getPost(newTask)
    if(res.ok) {
        revalidatePath('/cart')
        redirect('/cart')
    }
    return res
}