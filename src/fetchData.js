const fetchData = async (URL) => {
  try {
    const response = await fetch(URL);
    // console.log('response', response);
    const data = await response.json();
    // console.log('fetchdata', data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export default fetchData;
