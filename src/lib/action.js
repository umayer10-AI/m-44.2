export const createTask = async (formData) => {
    "use server"

    const newTask = Object.fromEntries(formData.entries())
    console.log(newTask)
}