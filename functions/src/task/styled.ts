import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ProjectTitle = styled.h1`
  text-align: center;
  color: white;
  animation: ${fadeIn} 3s ease;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 5px;
`;

const TaskList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 10px;
`;

const TaskItemContainer = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 8px;
  min-width: 200px;
  width: calc(20% - 16px);
  box-sizing: border-box;
  position: relative;
`;

const TaskTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
  text-align: center;
`;

const AddButton = styled.button`
  padding: 12px;
  cursor: pointer;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  margin-top: 16px;
  transition: background-color 0.3s ease;
  box-sizing: border-box;
  width: 100%;
  max-width: 200px;
  margin: 0 auto;

  &:hover {
    background-color: #45a049;
  }
`;

const RemoveButton = styled.button`
  padding: 8px;
  cursor: pointer;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  margin-top: 8px;
  transition: background-color 0.3s ease;
  width: 100%;
  box-sizing: border-box;

  &:hover {
    background-color: #d32f2f;
  }
`;
const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ModalValueContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ModalContent = styled.div`
  padding: 24px;
  text-align: center;
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin: 0 auto;
  position: relative;
`;

const ModalInput = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 16px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
  margin-bottom: 16px;
  resize: vertical;
`;

const ModalButton = styled.button`
  padding: 12px;
  cursor: pointer;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  transition: background-color 0.3s ease;
  width: 100%;
  box-sizing: border-box;
  margin-top: 20px;

  &:hover {
    background-color: #45a049;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 8px;
  cursor: pointer;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d32f2f;
  }
`;

const CenterAlignmentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const MarkAsCompletedButton = styled.button`
  padding: 8px;
  cursor: pointer;
  background-color: #2196f3;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  margin-top: 8px;
  margin-right: 8px;
  transition: background-color 0.3s ease;
  box-sizing: border-box;

  &:hover {
    background-color: #0b7dda;
  }
`;

export {
  CenterAlignmentContainer,
  CloseButton,
  ModalButton,
  ModalContent,
  ModalInput,
  RemoveButton,
  AddButton,
  TaskItemContainer,
  TaskList,
  TaskTitle,
  ProjectTitle,
  ModalContainer,
  ModalValueContainer,
  StyledTextArea,
  MarkAsCompletedButton,
  ButtonContainer,
};
