import axios from "axios";

export const sendEmail = async (data) => {
  try {
    const response = await axios.post("/api/sendemail", data);
  } catch (error) {
    throw new Error("Failed to send message");
  }
};
