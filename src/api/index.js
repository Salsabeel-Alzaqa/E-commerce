import axios from "../axios";
export const fetchData = async (path,updateData) => {
  try {
      const response = await axios.get(path);
      const data = response.data;
      updateData(data);
    }
     catch (error) {
    console.error(error);
    }
};

export const updateData = async (path, updatedData) => {
    try {
        await axios.put(path, updatedData, {
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error(error);
    }
};