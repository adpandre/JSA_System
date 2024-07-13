import React from 'react'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import Stack from 'react-bootstrap/Stack'

export default function Atividade (props) {
  function prioridadeLabel (param) {
    switch (param) {
      case '1':
        return 'Baixa'
      case '2':
        return 'Normal'
      case '3':
        return 'Alta'
      default:
        return 'Não definido'
    }
  }

  function prioridadeFace (param, icone) {
    switch (param) {
      case '1':
        return icone ? 'smile' : 'success'
      case '2':
        return icone ? 'meh' : 'dark'
      case '3':
        return icone ? 'frown' : 'warning'
      default:
        return 'Não definido'
    }
  }

  return (
    <Card
      className={'mb-2 shadow border-' + prioridadeFace(props.ativ.prioridade)}
    >
      <Card.Body>
        <div className='d-flex justify-content-between'>
          <Card.Title>
            <Stack direction='horizontal' gap={1}>
              <Badge pill bg='secondary'>
                {props.ativ.id}
              </Badge>
              - {props.ativ.titulo}
            </Stack>
          </Card.Title>
          <Card.Subtitle className='mt-1'>
            Prioridade:
            <span
              className={'ms-1 text-' + prioridadeFace(props.ativ.prioridade)}
            >
              <i
                className={
                  'me-1 fa-regular fa-face-' +
                  prioridadeFace(props.ativ.prioridade, true)
                }
              ></i>
              {prioridadeLabel(props.ativ.prioridade)}
            </span>
          </Card.Subtitle>
        </div>
        <Card.Text>{props.ativ.descricao}</Card.Text>
        <div className='d-flex justify-content-end pt-2 m-0 border-top '>
          <button
            type='button'
            className='btn btn-sm btn-outline-primary me-2'
            onClick={() => props.pegarAtividade(props.ativ.id)}
          >
            <i className='fa-solid fa-pen'></i> Editar
          </button>
          <button
            type='button'
            className='btn btn-sm btn-outline-danger'
            onClick={() => props.deletarAtividade(props.ativ.id)}
          >
            <i className='fa-solid fa-trash'></i> Deletar
          </button>
        </div>
      </Card.Body>
    </Card>
  )
}
