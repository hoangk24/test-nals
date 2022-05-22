import { useEffectSkipFirstRender } from 'hooks/useEffectSkipFirstRender'
import { useLoading } from 'hooks/useLoading'
import React, { useMemo, useState } from 'react'

export default function useSigleFileUpload({ visble }: { visble: booelan }) {
  const [file, setFile] = useState()
  const [preview, setPreview] = useState()
  const loading = useLoading()

  const resetFile = () => {
    setFile(null as any)
    setPreview(null as any)
  }
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
  useEffectSkipFirstRender(() => {
    return () => resetFile()
  }, [visble])

  return { handleChange, file, preview }
}
