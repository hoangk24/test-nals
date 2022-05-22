import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

export default function CreateComment() {
  const [show, setShow] = useState(false)
  return (
    <div>
      <Button onClick={() => setShow(true)}>Create Comment</Button>
    </div>
  )
}
