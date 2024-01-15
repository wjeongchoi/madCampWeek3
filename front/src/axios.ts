import axios from "axios";

export const getRequest = async (
  url: string,
  handleSuccess: (arg0: any) => void,
  handleError?: (error: any) => void
) => {
  console.log(`${process.env.API_URL}/${url}`);
  await axios
    .get(`${process.env.API_URL}/${url}`, {
      withCredentials: true,
    })
    .then((response) => handleSuccess(response.data))
    .catch((error) => {
      console.error("Error fetching data:", error);
      if (handleError) {
        handleError(error);
      }
    });
};


export const postRequest = async (
  url: string,
  data: any,
  handleSuccess: (responseData: any) => void,
  handleError?: (error: any) => void
) => {

    await axios.post(
      `${process.env.API_URL}/${url}`,
      data,
      { withCredentials: true }
    ).then((response) => {handleSuccess(response); console.log('su')})
    .catch((error) => {
      console.error("Error fetching data:", error);
      if (handleError) {
        handleError(error);
      }
    })
};

export const putRequest = async (
  url: string,
  data: any,
  handleSuccess: (responseData: any) => void,
  handleError?: (error: any) => void
) => {
  try {
    console.log('request', `${process.env.API_URL}/${url}`);
    const response = await axios.put(
      `${process.env.API_URL}/${url}`,
      data,
      { withCredentials: true }
    );
    handleSuccess(response);
  } catch (error) {
    console.error("Error updating data:", error);
    if (handleError) {
      handleError(error);
    }
  }
};


export const deleteRequest = async (
  url: string,
  handleSuccess: (responseData: any) => void,
  handleError?: (error: any) => void
) => {
  try {
    console.log('request', `${process.env.API_URL}/${url}`);
    const response = await axios.delete(
      `${process.env.API_URL}/${url}`,
      { withCredentials: true }
    );
    handleSuccess(response);
  } catch (error) {
    console.error("Error deleting data:", error);
    if (handleError) {
      handleError(error);
    }
  }
};
