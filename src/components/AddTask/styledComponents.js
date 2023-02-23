import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  background-color: #131213;
  min-height: 100vh;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 40px;
`

/* renderCreateTaskView */
export const CreateTaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 36%;
  padding: 20px;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 90%;
`
export const FormHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 48px;
  font-weight: 500;
  color: #f3aa4e;
  text-align: center;
`
export const InputLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 90%;
`
export const Label = styled.label`
  font-family: 'Roboto';
  font-size: 22px;
  color: #f8f8f8;
  margin-bottom: 10px;
`
export const Input = styled.input`
  height: 50px;
  width: 100%;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  color: #000000;
  padding-left: 15px;
  margin-bottom: 25px;
  outline: none;
`
export const SelectOption = styled.select`
  height: 50px;
  width: 100%;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  color: #000000;
  padding-left: 15px;
  margin-bottom: 25px;
  outline: none;
`
export const OptionInput = styled.option`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 700;
  color: #000000;
`
export const AddTaskButton = styled.button`
  height: 50px;
  width: 160px;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  color: #f1f5f9;
  background-color: #f3aa4e;
  border: none;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  margin-top: 20px;
`

/* renderAddTaskView */
export const AddTaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 66%;
  padding: 20px;
`
export const TagHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 28px;
  font-weight: 500;
  color: #ffffff;
`
export const TagsUnorderList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
`
export const TagsList = styled.li`
  display: flex;
  margin: 5px;
`
export const TagsButton = styled.button`
  background-color: ${props => (props.isActive ? '#f3aa4e' : 'transparent')};
  border: 1px solid #f3aa4e;
  border-radius: 50px;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  padding: 10px;
  padding-left: 25px;
  padding-right: 25px;
`
export const TasksHeading = styled(TagHeading)``
export const TasksUnorderList = styled.ul`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  min-height: 100vh;
  padding: 0px;
`
export const NoTaskMessage = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 28px;
  align-self: center;
  text-align: center;
  margin-top: 150px;
`

/* renderTaskCard */
export const TaskList = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #1a171d;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 15px;
  border-radius: 10px;
`
export const TaskText = styled.p`
  color: #f1f5f9;
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 700;
`
export const TaskTag = styled.p`
  background-color: #f3aa4e;
  color: #323f4b;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 700;
  padding: 10px;
  padding-left: 25px;
  padding-right: 25px;
  border-radius: 50px;
  border: none;
`
