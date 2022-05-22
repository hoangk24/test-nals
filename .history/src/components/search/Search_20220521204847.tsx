import useSearch from 'components/search/useSearch'
import { Blog } from 'constants/models/blog.model'
import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'

export default function Search() {
  const [search, setSearch] = useState(false)
  const { setText, blogs } = useSearch()
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
        <Modal.Body>
          <ul className='list-unstyled'>
            {blogs?.items?.map((it: Blog) => (
              <li className='media'>
                <img src='...' className='mr-3' alt='...' />
                <div className='media-body'>
                  <h5 className='mt-0 mb-1'>List-based media object</h5>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                  sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                  Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in
                  faucibus.
                </div>
              </li>
            ))}
          </ul>
        </Modal.Body>
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
