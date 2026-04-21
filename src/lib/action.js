"use server"
import { revalidatePath } from "next/cache"
import { getPost } from "./cart"
import { redirect } from "next/navigation"

export const createTask = async (formData) => {

    const newTask = Object.fromEntries(formData.entries())
    console.log(newTask)

    // if(!newTask.title){
    //     return {success: false, messege: "Title is required"}
    // }

    const res = await getPost(newTask)
    if(res.ok){
        revalidatePath('/cart')
    }
    return res
}

export const newCreateTask = async (formData) => {

    const newTask = Object.fromEntries(formData.entries())
    console.log(newTask)

    if(!newTask.title){
        return {success: false, error: "Title is required"}
    }

    if(newTask.title.trim().length < 5){
        return {success: false, error: "Title is must be 5 character or longer"}
    }

    const res = await getPost(newTask)
    if(res.ok) {
        revalidatePath('/cart')
        redirect('/cart')
    }
    return res
}