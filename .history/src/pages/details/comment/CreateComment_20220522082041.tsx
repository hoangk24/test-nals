import Input from 'components/input/Input'
import { RULE } from 'constants/rules/rule'
import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

export default function CreateComment() {
  const [show, setShow] = useState(false)
  return (
    <div>
      <Button onClick={() => setShow(true)}>Create Comment</Button>
      <Modal show={show} onHide={() => setShow(false)} backdrop='static' keyboard={false}>
        <form>
          <Modal.Header closeButton>
            <Modal.Title>Create Comment</Modal.Title>
          </Modal.Header>
          <Modal.Body></Modal.Body>
          <Modal.Footer>
            {/* <Button variant='secondary' onClick={()=>setShow(false))}>
              Close
            </Button>
            <Button type='submit' variant='primary'>
              Update
            </Button> */}
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  )
}
