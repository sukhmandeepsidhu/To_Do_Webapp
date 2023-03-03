import { Container } from 'react-bootstrap';
import TopNavbar from './components/TopNavbar';
import UseFormInput from './components/UseFormInput';
import ToDoItem from './components/ToDoItem';
const App = () => {
  const { toDoList, handleDelete, render: ToDoForm } = UseFormInput();
  return (
    <div>
      <TopNavbar />
      <Container>
        {ToDoForm}
        {toDoList.map((toDo) => (
          <ToDoItem toDo={toDo} onDelete={handleDelete} key={toDo.id} />
        ))}
      </Container>
    </div>
  );
};
export default App;
