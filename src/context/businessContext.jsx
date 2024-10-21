import axios from "axios";

export async function testing() {
    const res = await axios.get("api/business/businessCheck")
    console.log("businessContext Test: ", res.data.success)
    return res.data
}

export async function updateBusiness(field, input) {
    console.log(`Sending package E`, {field, input})
    const res = await axios.post("api/business/businessUpdate", { field, input })
    return res.data
}

export async function photoUpdate(type, image) {
    console.log("Context: ", {type, image})
    const res = await axios.post("api/business/updatePhoto", { type, image })
    return res.data
}