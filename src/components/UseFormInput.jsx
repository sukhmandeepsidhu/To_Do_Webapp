import { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const UseFormInput = () => {
  const [toDoList, setToDoList] = useState([]);
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const random = Math.floor(Math.random() * 100);
    setToDoList((prevData) => [...prevData, { id: random, text: text }]);
    setText('');
  };
  const handleDelete = (id) => {
    setToDoList((prevData) => {
      return prevData.filter((toDo) => toDo.id !== id);
    });
  };

  return {
    toDoList,
    handleDelete,
    render: (
      <div style={{ marginTop: '1em' }}>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col>
              <Form.Control
                type="text"
                placeholder="To Do"
                value={text}
                onChange={handleChange}
              />
            </Col>
            <Col>
              <Button variant="primary" type="submit">
                Add
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    ),
  };
};
export default UseFormInput;
