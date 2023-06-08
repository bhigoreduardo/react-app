import axios from "axios";

const upload = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "fiverr");

  try {
    const { data } = await axios.post(
      import.meta.env.VITE_CLOUDINARY_UPLOAD_URL,
      formData
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default upload;
