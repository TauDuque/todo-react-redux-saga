import React from 'react';

import {
  Button,
  Container,
  FormControl,
  InputGroup,
  ListGroup,
  ListGroupItem,
} from 'react-bootstrap';

const App: React.FC = () => {
  return (
    <Container>
      <InputGroup className="m-3">
        <FormControl placeholder="Todo" />
        <InputGroup.Append>
          <Button variant="secondary">
            <i className="fas fa-plus mr-1"></i>
            Adicionar
          </Button>
        </InputGroup.Append>
      </InputGroup>
      <ListGroup variant="flush" className="m-2">
        <h3>Incompleto</h3>
        <ListGroupItem
          variant="danger"
          style={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <div>Cras justo odio</div>
          <div>
            <i className="fas fa-check m-2"></i>
            <i className="fas fa-trash m-2"></i>
          </div>
        </ListGroupItem>
      </ListGroup>
      <ListGroup variant="flush" className="m-2">
        <h3>Completo</h3>
        <ListGroupItem
          variant="success"
          style={{ display: 'flex', justifyContent: 'space-between' }}
          action
        >
          <div>Cras justo odio</div>
          <div>
            <i className="fas fa-minus m-2"></i>
            <i className="fas fa-trash m-2"></i>
          </div>
        </ListGroupItem>
      </ListGroup>
    </Container>
  );
};

export default App;
