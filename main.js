const host = "http://localhost:8081";
const roomId = "";
const data = {
  open: false,
};

export const updateRoom = (roomId, data) => {
  return fetch(`${host}/rooms/${roomId}/update/all`, {
    body: JSON.stringify(data),
    method: "PUT",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH",
      "Content-Type": "application/json",
    },
  });
};

updateRoom()
  .then(() => {
    console.log("Success to fetch");
  })
  .catch((error) => {
    console.error(error);
  });
