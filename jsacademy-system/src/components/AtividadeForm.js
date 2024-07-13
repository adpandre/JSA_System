import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'

export default function AtividadeForm (props) {
  const [atividade, setAtividade] = useState({})

  useEffect(() => {

  })

  const inputTextHandler = e => {
    const { name, value } = e.target

    setAtividade({ ...atividade, [name]: value })
  }
  /* 
  <Form.Group as={Col}>
  <Form.Label>Id</Form.Label>
  <Form.Control
    name='id'
    id='id'
    type='text'
    onChange={inputTextHandler}
    value={atividade.id}
  />
</Form.Group> */

  return (
    <Form>
      <Row className='mb-3'>
        <Form.Group as={Col}>
          <Form.Label className='color-green'>Título</Form.Label>
          <Form.Control
            name='titulo'
            value={atividade.titulo}
            onChange={inputTextHandler}
            id='titulo'
            type='text'
            placeholder='Título'
          />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Prioridade</Form.Label>
          <Form.Select
            name='prioridade'
            value={atividade.prioridade}
            onChange={inputTextHandler}
            id='prioridade'
          >
            <option defaultValue={0}>Selecione...</option>
            <option value='1'>Baixa</option>
            <option value='2'>Normal</option>
            <option value='3'>Alta</option>
          </Form.Select>
        </Form.Group>

        <Form.Group>
          <Form.Label>Descricao</Form.Label>
          <Form.Control
            as='textarea'
            rows={3}
            name='decricao'
            value={atividade.decricao}
            onChange={inputTextHandler}
            id='descricao'
            type='text'
            placeholder='descricao'
          />
        </Form.Group>
      </Row>

      <hr />

      <Button variant='outline-secondary' onClick={props.addAtividade}>
        + Atividade
      </Button>
    </Form>
  )
}
