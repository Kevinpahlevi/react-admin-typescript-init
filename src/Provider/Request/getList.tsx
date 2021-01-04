const getList = async (resource: any, params: any) => {
  console.log("GETLIST");

  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const fetchData = await response.json();
  console.log(fetchData);
  const data = {
    data: fetchData,
    total: fetchData.length,
  };
  return data;
};

export default getList;
