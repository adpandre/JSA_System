import './App.css'
import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import Stack from 'react-bootstrap/Stack'

let initialState = [
  {
    id: 1,
    descricao: 'Primeira Atividade'
  },
  {
    id: 2,
    descricao: 'Segunda Atividade'
  }
]

function App () {
  const [atividades, setAtividades] = useState(initialState)

  function addAtividade (e) {
    e.preventDefault()

    const atividade = {
      id: document.getElementById('id').value,
      descricao: document.getElementById('descricao').value
    }
    setAtividades([...atividades, { ...atividade }])
  }

  return (
    <>
      <Form>
        <Row className='mb-3'>
          <Form.Group as={Col}>
            <Form.Label>Id</Form.Label>
            <Form.Control id='id' type='text' placeholder='id' />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Descricao</Form.Label>
            <Form.Control id='descricao' type='text' placeholder='descricao' />
          </Form.Group>
        </Row>

        <Button variant='outline-secondary' onClick={addAtividade}>
          + Atividade
        </Button>
      </Form>

      <div className='mt-3'>
        {atividades.map(ativ => (
          <Card key={ativ.id} className='mb-2 shadow'>
            <Card.Body>
              <div className='d-flex justify-content-between'>
                <Card.Title>
                  <Stack direction='horizontal' gap={1}>
                    <Badge pill bg='secondary'>
                      {ativ.id}
                    </Badge>
                    - Título
                  </Stack>
                </Card.Title>
                <Card.Subtitle className='mt-1'>
                  Prioridade:
                  <span className='me-1 text-black'>
                    <i className='ms-1 fa-regular fa-face-smile'></i>
                    Normal
                  </span>
                </Card.Subtitle>
              </div>
              <Card.Text>{ativ.descricao}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  )
}

export default App
