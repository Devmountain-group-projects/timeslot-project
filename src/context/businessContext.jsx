import axios from "axios";

export async function testing() {
  const res = await axios.get("api/business/businessCheck");
  console.log("businessContext Test: ", res.data.success);
  return res.data;
}

export async function updateBusiness(field, input) {
  console.log(`Sending package E`, { field, input });
  const res = await axios.post("api/business/businessUpdate", { field, input });
  return res.data;
}

export async function photoUpdate(type, image) {
  const formData = new FormData();
  formData.append("type", type);
  formData.append("image", image);

  // Log the formData to see if the correct values are being appended
  console.log("Form Data before sending:");
  for (const pair of formData.entries()) {
    console.log(`${pair[0]}: ${pair[1]}`);
  }
  const res = await axios.post("api/business/updatePhoto", formData);
  return res.data;
}

export async function getPhotos() {
    const res = await axios.post("api/business/getPhoto")
    console.log("Photos", res)
    return res.data
}
