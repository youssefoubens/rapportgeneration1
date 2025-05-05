/* eslint-disable @next/next/no-img-element */
'use client'
import { useCallback, useState } from 'react'
import { FileRejection, useDropzone } from 'react-dropzone'

export default function ImageUploader({
  images,
  setImages
}: {
  images: File[]
  setImages: (files: File[]) => void
}) {
  const [previews, setPreviews] = useState<string[]>([])
  const [error, setError] = useState<string | null>(null)

  const onDrop = useCallback(
    (acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
      setError(null)
      
      // Handle rejected files
      if (rejectedFiles.length > 0) {
        setError('Only image files (JPEG, PNG) up to 5MB are allowed')
        return
      }

      // Create previews
      const newPreviews = acceptedFiles.map(file => URL.createObjectURL(file))
      setPreviews([...previews, ...newPreviews])
      setImages([...images, ...acceptedFiles])
    },
    [images, previews, setImages]
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/jpeg': ['.jpeg', '.jpg'],
      'image/png': ['.png']
    },
    maxSize: 5 * 1024 * 1024, // 5MB
    multiple: true
  })

  const removeImage = (index: number) => {
    const newImages = [...images]
    const newPreviews = [...previews]
    newImages.splice(index, 1)
    newPreviews.splice(index, 1)
    setImages(newImages)
    setPreviews(newPreviews)
  }

  return (
    <div className="image-uploader">
      <div
        {...getRootProps()}
        className={`dropzone ${isDragActive ? 'active' : ''}`}
      >
        <input {...getInputProps()} />
        <p>{isDragActive ? 'Drop images here' : 'Drag & drop images, or click to select'}</p>
      </div>
      
      {error && <div className="upload-error">{error}</div>}
      
      <div className="image-previews">
        {previews.map((preview, index) => (
          <div key={index} className="image-preview">
            <img src={preview} alt={`Preview ${index + 1}`} />
            <button 
              type="button" 
              onClick={() => removeImage(index)}
              className="remove-image"
            >
              ×
            </button>
          </div>
        ))}
      </div>
      
      {images.length > 0 && (
        <div className="upload-info">
          {images.length} image(s) ready for processing
        </div>
      )}
    </div>
  )
}