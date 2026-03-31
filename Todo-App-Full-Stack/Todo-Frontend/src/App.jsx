import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { useState } from "react";
import {
  addItemToServer,
  deleteItemFromServer,
  getItemsFromServer,
  markItemCompletedOnServer,
} from "./services/itemServices";
import { useEffect } from "react";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  useEffect(() => {
    getItemsFromServer().then((initialItems) => {
      console.log("Initial items from server ", initialItems);
      setTodoItems(initialItems);
    });
  }, []);

  const handleNewItem = async (itemName, itemDueDate) => {
    console.log(`New Item Added: ${itemName} Date:${itemDueDate}`);
    // TODO: Add the new item to the server and then update the UI with the response from the server
    const item = await addItemToServer(itemName, itemDueDate);
    console.log("Item fom Server at App js ", item);
    const newTodoItems = [...todoItems, item];
    setTodoItems(newTodoItems);
  };

  const handleCompletedItem = async (id) => {
    const newTodoItems = await markItemCompletedOnServer(id);
    console.log("The Completed Items are: ", newTodoItems);
  };

  const handleDeleteItem = async (id) => {
    const deleteItemId = await deleteItemFromServer(id);
    const newTodoItems = todoItems.filter((item) => item.id !== deleteItemId);
    setTodoItems(newTodoItems);
  };

  return (
    <center className="todo-container ">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems
        todoItems={todoItems}
        onCompletedClick={handleCompletedItem}
        onDeleteClick={handleDeleteItem}
      ></TodoItems>
    </center>
  );
}

export default App;
