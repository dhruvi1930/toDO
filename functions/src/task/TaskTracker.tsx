import React, { useState } from "react";
import useLocalStorage from "../useLocalStorage";
import { Task } from "./types";
import {
  AddButton,
  CenterAlignmentContainer,
  CloseButton,
  ModalButton,
  ModalContent,
  ModalInput,
  ProjectTitle,
  RemoveButton,
  TaskItemContainer,
  TaskList,
  TaskTitle,
  StyledTextArea,
  ButtonContainer,
} from "./styled";
import Modal from "react-modal";

interface TaskTrackerProps {
  completedTasks: Task[];
  setCompletedTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskTracker: React.FC<TaskTrackerProps> = ({
  completedTasks,
  setCompletedTasks,
}) => {
  const [tasks, setTasks] = useLocalStorage<Task[]>("tasks", []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskTitle, setTaskTitle] = useState<string>("");
  const [taskDate, setTaskDate] = useState<string>("");
  const [taskDescription, setTaskDescription] = useState<string>("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTaskTitle("");
    setTaskDate("");
    setTaskDescription("");
    setErrors({});
    setEditingTask(null);
  };

  const isDateExpired = (date: string): boolean => {
    return date < new Date().toISOString().split("T")[0];
  };

  const addTask = () => {
    const validationErrors: { [key: string]: string } = {};

    if (!taskTitle.trim()) {
      validationErrors.title = "Title is required";
    }

    if (!taskDate) {
      validationErrors.date = "Date is required";
    } else if (isDateExpired(taskDate)) {
      validationErrors.date =
        "Selected date is expired. Please choose a valid date.";
    }

    if (!taskDescription.trim()) {
      validationErrors.description = "Description is required";
    }

    if (Object.keys(validationErrors).length === 0) {
      const newTask: Task = {
        id: Math.random().toString(36).substring(7),
        title: taskTitle,
        date: taskDate,
        description: taskDescription,
      };
      setTasks([...tasks, newTask]);
      closeModal();
    } else {
      setErrors(validationErrors);
    }
  };

  const updateTask = () => {
    if (editingTask) {
      // Logic to update the existing task based on editingTask details
      const updatedTasks = tasks.map((task) =>
        task.id === editingTask.id
          ? {
              ...task,
              title: taskTitle,
              date: taskDate,
              description: taskDescription,
            }
          : task
      );

      setTasks(updatedTasks);
      closeModal();
    }
  };

  const removeTask = (taskId: string) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  };

  const markAsCompleted = (taskId: string) => {
    const taskToComplete = tasks.find((task) => task.id === taskId);

    if (taskToComplete) {
      setCompletedTasks([...completedTasks, taskToComplete]);
      const updatedTasks = tasks.filter((task) => task.id !== taskId);
      setTasks(updatedTasks);
    }
  };

  const editTask = (task: Task) => {
    setEditingTask(task);
    setTaskTitle(task.title);
    setTaskDate(task.date);
    setTaskDescription(task.description);
    openModal();
  };

  return (
    <>
      <CenterAlignmentContainer>
        <ProjectTitle>Tasks</ProjectTitle>
        <TaskList>
          {tasks.map((task) => (
            <TaskItemContainer key={task.id}>
              <input
                type="checkbox"
                onChange={() => markAsCompleted(task.id)}
                style={{ float: "right" }}
              />
              <TaskTitle>{task.title}</TaskTitle>
              <p>Date: {task.date}</p>
              <p>Description: {task.description}</p>
              <ButtonContainer>
                <RemoveButton onClick={() => removeTask(task.id)}>
                  Remove
                </RemoveButton>
                <RemoveButton onClick={() => editTask(task)}>Edit</RemoveButton>
              </ButtonContainer>
            </TaskItemContainer>
          ))}
        </TaskList>
        <AddButton onClick={openModal}>Add Task</AddButton>
      </CenterAlignmentContainer>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Task Modal"
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            transform: "translate(-50%, -50%)",
          },
        }}
      >
        <ModalContent>
          <CloseButton onClick={closeModal}>Close</CloseButton>
          <h2>{editingTask ? "Edit Task" : "Add a New Task"}</h2>
          <ModalInput
            type="text"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            placeholder="Enter task title"
          />
          {errors.title && <p style={{ color: "red" }}>{errors.title}</p>}
          <div style={{ width: "100%", marginBottom: "16px" }}>
            <ModalInput
              type="date"
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
            />
          </div>
          {errors.date && <p style={{ color: "red" }}>{errors.date}</p>}
          <StyledTextArea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            placeholder="Enter task description"
          />
          {errors.description && (
            <p style={{ color: "red" }}>{errors.description}</p>
          )}
          <ModalButton onClick={editingTask ? updateTask : addTask}>
            {editingTask ? "Update Task" : "Add Task"}
          </ModalButton>
        </ModalContent>
      </Modal>
    </>
  );
};

export default TaskTracker;
