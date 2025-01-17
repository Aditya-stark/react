// src/components/CommandHandler.js
import React, { useState } from "react";

const CommandHandler = ({ command }) => {
  const [tasks, setTasks] = useState([]);

  // Define variations for each command
  const commandVariations = {
    add: ["add", "head", "ad", "at", "pad"],
    delete: ["delete", "remove", "del", "erase", "take out"],
    complete: ["complete", "finish", "done", "mark", "tick", "check"],
    update: ["update", "change", "modify", "edit"],
  };

  // Function to detect command type
  const getCommandType = (lowerCommand) => {
    if (commandVariations.add.some((word) => lowerCommand.startsWith(word))) return "add";
    if (commandVariations.delete.some((word) => lowerCommand.startsWith(word))) return "delete";
    if (commandVariations.complete.some((word) => lowerCommand.startsWith(word))) return "complete";
    if (commandVariations.update.some((word) => lowerCommand.startsWith(word))) return "update";
    return null;
  };

  const handleCommand = (command) => {
    const lowerCommand = command.toLowerCase();
    const commandType = getCommandType(lowerCommand);

    switch (commandType) {
      case "add":
        const addTask = lowerCommand.replace(/^(add|head|ad|at|pad)/, "").trim();
        if (addTask) {
          setTasks((prevTasks) => [...prevTasks, { task: addTask, completed: false }]);
          console.log("Added:", addTask);
        }
        break;

      case "delete":
        const deleteTask = lowerCommand.replace(/^(delete|remove|del|erase|take out)/, "").trim();
        setTasks((prevTasks) => {
          console.log("Deleted:", deleteTask);
          return prevTasks.filter((item) => item.task !== deleteTask);
        });
        break;

      case "complete":
        const completeTask = lowerCommand.replace(/^(complete|finish|done|mark|tick|check)/, "").trim();
        setTasks((prevTasks) =>
          prevTasks.map((item) =>
            item.task === completeTask ? { ...item, completed: true } : item
          )
        );
        console.log("Completed:", completeTask);
        break;

      case "update":
        const [oldTask, newTask] = lowerCommand.split(" to ").map((str) => str.trim().replace(/^(update|change|modify|edit)/, ""));
        if (oldTask && newTask) {
          setTasks((prevTasks) =>
            prevTasks.map((item) =>
              item.task === oldTask ? { ...item, task: newTask } : item
            )
          );
          console.log(`Updated: "${oldTask}" to "${newTask}"`);
        }
        break;

      default:
        console.log("Command not recognized");
        break;
    }
  };

  // Listen for incoming commands
  React.useEffect(() => {
    if (command) {
      handleCommand(command);
    }
  }, [command]);

  return (
    <div>
      <h2>📝 Your To-Do List:</h2>
      <ul>
        {tasks.map((item, index) => (
          <li key={index} style={{ textDecoration: item.completed ? "line-through" : "none" }}>
            {item.task}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommandHandler;
