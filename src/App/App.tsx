import React, { useRef } from 'react';

import {
  Button,
  Container,
  FormControl,
  InputGroup,
  ListGroup,
  ListGroupItem,
} from 'react-bootstrap';
import { connect } from 'react-redux';
import { deleteTodo, markCompleto, markIncompleto } from 'action';
import storeTypes from 'Types/storeTypes';
import AppPropsTypes from './AppPropsTypes';

const App: React.FC<AppPropsTypes> = ({
  completo,
  incompleto,
  deleteTodo,
  markCompleto,
  markIncompleto,
}) => {
  const input = useRef<HTMLInputElement>(null);

  const renderizarLista = (type: 'Completo' | 'Incompleto') => {
    const looper = type === 'Completo' ? completo : incompleto;
    return (
      <ListGroup variant="flush" className="m-2">
        <h3>{type}</h3>
        {looper.map((item, i) => {
          return (
            <ListGroupItem
              key={i}
              variant={type === 'Completo' ? 'success' : 'danger'}
              style={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <div>{item}</div>
              <div>
                <i
                  className={`fas fa-${
                    type === 'Completo' ? 'minus' : 'check'
                  } m-2`}
                  onClick={() => {
                    type === 'Completo'
                      ? markIncompleto(item)
                      : markCompleto(item);
                  }}
                ></i>
                <i
                  className="fas fa-trash m-2"
                  onClick={() => deleteTodo(item)}
                ></i>
              </div>
            </ListGroupItem>
          );
        })}
      </ListGroup>
    );
  };

  const adicionar = () => {
    if (input.current) {
      const valor = input.current.value;
      markIncompleto(valor);
    }
  };

  return (
    <Container>
      <InputGroup className="m-3">
        <FormControl placeholder="Todo" ref={input} />
        <InputGroup.Append>
          <Button variant="secondary" onClick={() => adicionar()}>
            <i className="fas fa-plus mr-1"></i>
            Adicionar
          </Button>
        </InputGroup.Append>
      </InputGroup>
      {renderizarLista('Completo')}
      {renderizarLista('Incompleto')}
    </Container>
  );
};

const mapStateToProps = (state: storeTypes) => {
  return {
    completo: state.completo,
    incompleto: state.incompleto,
  };
};

export default connect(mapStateToProps, {
  deleteTodo,
  markCompleto,
  markIncompleto,
})(App);
