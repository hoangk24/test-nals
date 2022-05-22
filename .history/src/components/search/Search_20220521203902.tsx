import useSearch from 'components/search/useSearch'
import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'

export default function Search() {
  const [search, setSearch] = useState(false)
  const { setText, blog } = useSearch()
  return (
    <>
      <div className='input-group w-25'>
        <input
          onClick={() => setSearch(true)}
          type='text'
          className='form-control'
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby='basic-addon2'
        />
        <div className='input-group-append'>
          <span className='input-group-text' id='basic-addon2'>
            Search
          </span>
        </div>
      </div>
      <Modal show={search} onHide={() => setSearch(false)} backdrop='static' keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>
            <div className='input-group'>
              <input
                onChange={(e) => setText(e.target.value)}
                type='text'
                className='form-control'
                placeholder='Search'
                aria-label='Search'
                aria-describedby='basic-addon1'
              />
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={() => setSearch(false)}>
            Close
          </Button>
          <Button type='submit' variant='primary'>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
