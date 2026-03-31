export const addItemToServer = async (task, date) => {
  try {
    const response = await fetch("http://localhost:3000/api/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ task, date }),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const item = await response.json();
    return mapServerItemToUIItem(item);
  } catch (error) {
    console.error("Error adding item to server:", error);
    throw error;
  }
};

export const getItemsFromServer = async () => {
  const response = await fetch("http://localhost:3000/api/todo");
  const items = await response.json();
  return items.map(mapServerItemToUIItem);
};

export const markItemCompletedOnServer = async (id) => {
  const response = await fetch(
    "http://localhost:3000/api/todo/" + id + "/completed",
    {
      method: "PUT",
    },
  );
  const item = await response.json();
  return mapServerItemToUIItem(item);
};

export const deleteItemFromServer = async (id) => {
  await fetch(
    "http://localhost:3000/api/todo/" + id,
    {
      method: "DELETE",
    }
  );

  return id;
};

const mapServerItemToUIItem = (serverItem) => {
  console.log("The Server Item from server ", serverItem);
  return {
    id: serverItem._id,
    name: serverItem.task,
    dueDate: serverItem.date,
    completed: serverItem.completed,
    createAt: serverItem.createdAt,
    updatedAt: serverItem.updatedAt,
  };
};
