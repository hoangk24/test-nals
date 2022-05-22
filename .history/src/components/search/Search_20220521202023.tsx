import React from 'react'

export default function Search() {
  return (
    <Modal show={visible} onHide={hide} backdrop='static' keyboard={false}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Header closeButton>
          <Modal.Title>Update Blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Input
            control={control}
            rules={{
              validate: (value: string) => RULE.required(value, 'Tiêu đề'),
            }}
            name='title'
            label='Tiêu đề'
          />
          <Input
            rules={{
              validate: (value: string) => RULE.required(value, 'Nội dung'),
            }}
            control={control}
            name='content'
            label='Nội dung'
          />
          <div>{preview && <img src={preview} alt='' />}</div>
          <input type='file' onChange={handleChange} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={hide}>
            Close
          </Button>
          <Button type='submit' variant='primary'>
            Create
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  )
}
