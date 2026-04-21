import carts from "../data/data.json"

export const cartInfo = async () => {
    return carts;
}

export const getPost = async (newTask) => {
    newTask.id = carts.length + 1;
    carts.push(newTask)
    return {ok: true, messege: "SuccessFully Submit"}
}