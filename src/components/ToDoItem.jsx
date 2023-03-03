import { Row, Col } from 'react-bootstrap';
const ToDoItem = ({ toDo, onDelete }) => {
  const handleDelete = () => {
    onDelete(toDo.id);
  };
  return (
    <div style={{ margin: '1rem' }}>
      <Row>
        <Col>{toDo.text}</Col>
        <Col onClick={handleDelete} style={{ cursor: 'pointer' }}>
          x
        </Col>
      </Row>
    </div>
  );
};

export default ToDoItem;
