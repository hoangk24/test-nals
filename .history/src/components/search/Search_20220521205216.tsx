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
            {blogs?.map((it: Blog) => (
              <li key={it.id} className='card d-flex'>
                <img
                  src={it.image.url}
                  className='rounded'
                  style={{ width: 50, height: 50, marginRight: 10 }}
                />
                <div className='media-body'>
                  <h5 className='mt-0 mb-1'>{it.title}</h5>
                  {it.content}
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
