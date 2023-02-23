import {Component} from 'react'
import {v4} from 'uuid'
import {
  AppContainer,
  CreateTaskContainer,
  FormContainer,
  FormHeading,
  InputLabelContainer,
  Label,
  Input,
  SelectOption,
  OptionInput,
  AddTaskButton,
  AddTaskContainer,
  TagHeading,
  TagsUnorderList,
  TagsList,
  TagsButton,
  TasksHeading,
  TasksUnorderList,
  NoTaskMessage,
  TaskList,
  TaskText,
  TaskTag,
} from './styledComponents'

// These are the lists used in the application. You can move them to any component needed.
const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class AddTask extends Component {
  state = {
    textInput: '',
    activeTagOption: tagsList[0].optionId,
    taskList: [],
    activeTag: 'INITIAL',
  }

  onChangeInput = event => {
    this.setState({textInput: event.target.value})
  }

  onChangeTagOption = event => {
    this.setState({activeTagOption: event.target.value})
  }

  submitForm = event => {
    event.preventDefault()
    const {textInput, activeTagOption} = this.state
    const newTask = {
      id: v4(),
      task: textInput,
      tag: activeTagOption,
    }
    if (textInput.length !== 0) {
      this.setState(prevState => ({
        taskList: [...prevState.taskList, newTask],
        textInput: '',
        activeTagOption: '',
      }))
    }
  }

  renderCreateTaskView = () => {
    const {textInput, activeTagOption} = this.state
    return (
      <CreateTaskContainer>
        <FormContainer onSubmit={this.submitForm}>
          <FormHeading>Create a task</FormHeading>
          <InputLabelContainer>
            <Label htmlFor="inputText">Task</Label>
            <Input
              id="inputText"
              type="text"
              placeholder="Enter the task here"
              onChange={this.onChangeInput}
              value={textInput}
            />
          </InputLabelContainer>
          <InputLabelContainer>
            <Label htmlFor="tagOption">Tags</Label>
            <SelectOption
              id="tagOption"
              value={activeTagOption}
              onChange={this.onChangeTagOption}
            >
              {tagsList.map(eachTag => {
                const {optionId, displayText} = eachTag
                return (
                  <OptionInput key={optionId} value={optionId}>
                    {displayText}
                  </OptionInput>
                )
              })}
            </SelectOption>
          </InputLabelContainer>
          <AddTaskButton type="submit">Add Task</AddTaskButton>
        </FormContainer>
      </CreateTaskContainer>
    )
  }

  onClickActiveTag = event => {
    this.setState(prevState => ({
      activeTag:
        prevState.activeTag === event.target.value
          ? 'INITIAL'
          : event.target.value,
    }))
  }

  renderTaskCard = () => {
    const {taskList, activeTag} = this.state
    const filterTasksList =
      activeTag === 'INITIAL'
        ? taskList
        : taskList.filter(eachTask => eachTask.tag === activeTag)
    return (
      <>
        {filterTasksList.map(eachTask => (
          <TaskList>
            <TaskText>{eachTask.task}</TaskText>
            <TaskTag>{eachTask.tag}</TaskTag>
          </TaskList>
        ))}
      </>
    )
  }

  renderAddTaskView = () => {
    const {taskList, activeTag} = this.state
    return (
      <AddTaskContainer>
        <TagHeading>Tags</TagHeading>
        <TagsUnorderList>
          {tagsList.map(eachTag => {
            const {optionId, displayText} = eachTag
            const isActive = activeTag === optionId
            return (
              <TagsList key={optionId}>
                <TagsButton
                  type="button"
                  value={optionId}
                  onClick={this.onClickActiveTag}
                  isActive={isActive}
                >
                  {displayText}
                </TagsButton>
              </TagsList>
            )
          })}
        </TagsUnorderList>
        <TasksHeading>Tasks</TasksHeading>
        <TasksUnorderList>
          {taskList.length === 0 ? (
            <NoTaskMessage>No Tasks Added Yet</NoTaskMessage>
          ) : (
            this.renderTaskCard()
          )}
        </TasksUnorderList>
      </AddTaskContainer>
    )
  }

  render() {
    return (
      <AppContainer>
        {this.renderCreateTaskView()}
        {this.renderAddTaskView()}
      </AppContainer>
    )
  }
}

export default AddTask
