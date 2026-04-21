import { revalidatePath } from "next/cache"
import { getPost } from "./cart"

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