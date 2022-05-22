import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

export default function CreateComment() {
  const [show, setShow] = useState(false)
  return (
    <div>
      <Button>Create Comment</Button>
    </div>
  )
}
