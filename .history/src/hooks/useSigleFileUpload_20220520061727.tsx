import React from 'react'

export default function useSigleFileUpload() {
  const [file, setFile] = useState()
  const [preview, setPreview] = useState()
  async function handleChange(event: any) {
    loading.show()
    setFile(event.target.files[0])
    getBase64(event.target.files[0])
      .then((res: any) => setPreview(res))
      .finally(() => loading.hide())
  }
  function getBase64(file: any) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
      reader.onerror = (error) => reject(error)
    })
  }
  return {}
}
