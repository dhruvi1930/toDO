// App.tsx
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { AppContainer, AppHeader } from "./global";
import TaskTracker from "./task/TaskTracker";
import { Task } from "./task/types";
import Navbar from "./nav/Navbar";

function App() {
  // State for completed tasks
  const [completedTasks, setCompletedTasks] = useState<Task[]>([]);

  return (
    <AppContainer>
      <AppHeader>
        <Navbar />
        <Routes>
          <Route
            path="toDo"
            element={
              <TaskTracker
                completedTasks={completedTasks}
                setCompletedTasks={setCompletedTasks}
              />
            }
          />
        </Routes>
      </AppHeader>
    </AppContainer>
  );
}

export default App;
