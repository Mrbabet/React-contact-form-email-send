import axios from "axios";

export const sendEmail = async (data) => {
  try {
    const response = await axios.post(
      "https://contact-form-server.onrender.com/api/sendemail",
      data
    );
    console.log(response);
  } catch (error) {
    throw new Error("Failed to send message");
  }
};
