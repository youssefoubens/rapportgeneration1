/* eslint-disable @next/next/no-img-element */
// components/ImageUploader.tsx
'use client'
import { useCallback, useState } from 'react'
import { FiUpload, FiFolder, FiX, FiImage, FiChevronLeft, FiChevronRight } from 'react-icons/fi'

interface ImageUploaderProps {
  images: File[]
  setImages: (files: File[]) => void
}

export default function ImageUploader({ images, setImages }: ImageUploaderProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [isDragging, setIsDragging] = useState(false)

  const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files).filter(file => file.type.startsWith('image/'))
      setImages([...images, ...newFiles])
    }
  }, [images, setImages])

  const handleFolderChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files).filter(file => file.type.startsWith('image/'))
      setImages([...images, ...newFiles])
    }
  }, [images, setImages])

  const removeImage = useCallback((index: number) => {
    const newImages = [...images]
    newImages.splice(index, 1)
    setImages(newImages)
    if (selectedImage !== null && selectedImage >= index) {
      setSelectedImage(selectedImage > 0 ? selectedImage - 1 : null)
    }
  }, [images, setImages, selectedImage])

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)
    if (e.dataTransfer.files) {
      const newFiles = Array.from(e.dataTransfer.files).filter(file => file.type.startsWith('image/'))
      setImages([...images, ...newFiles])
    }
  }

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return
    if (direction === 'prev' && selectedImage > 0) {
      setSelectedImage(selectedImage - 1)
    } else if (direction === 'next' && selectedImage < images.length - 1) {
      setSelectedImage(selectedImage + 1)
    }
  }

  return (
    <div className={`image-uploader ${isDragging ? 'dragging' : ''}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}>
      
      <div className="upload-header">
        <h3>Upload Images</h3>
        <p>Drag & drop images or select files/folder</p>
      </div>

      <div className="upload-options">
        <div className="upload-button">
          <input
            id="file-upload"
            type="file"
            multiple
            accept="image/*"
            onChange={handleFileChange}
          />
          <label htmlFor="file-upload">
            <FiUpload /> Select Files
          </label>
        </div>
        
        <div className="upload-button">
          <input
            id="folder-upload"
            type="file"
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore - webkitdirectory is not in the type definition
            webkitdirectory=""
            directory=""
            multiple
            accept="image/*"
            onChange={handleFolderChange}
          />
          <label htmlFor="folder-upload">
            <FiFolder /> Select Folder
          </label>
        </div>
      </div>

      {images.length > 0 ? (
        <div className="image-display-container">
          <div className="thumbnail-grid">
            {images.map((file, index) => (
              <div 
                key={index} 
                className={`thumbnail-item ${selectedImage === index ? 'selected' : ''}`}
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={URL.createObjectURL(file)}
                  alt={file.name}
                  className="thumbnail-image"
                />
                <div className="thumbnail-overlay">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation()
                      removeImage(index)
                    }}
                    className="remove-thumbnail"
                  >
                    <FiX />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {selectedImage !== null && (
            <div className="image-preview">
              <div className="preview-header">
                <h4>{images[selectedImage].name}</h4>
                <span>{(images[selectedImage].size / 1024).toFixed(2)} KB</span>
              </div>
              
              <div className="preview-content">
                <button 
                  className="nav-button prev"
                  onClick={() => navigateImage('prev')}
                  disabled={selectedImage === 0}
                >
                  <FiChevronLeft />
                </button>
                
                <div className="main-image-container">
                  <img
                    src={URL.createObjectURL(images[selectedImage])}
                    alt={images[selectedImage].name}
                    className="main-image"
                  />
                </div>
                
                <button 
                  className="nav-button next"
                  onClick={() => navigateImage('next')}
                  disabled={selectedImage === images.length - 1}
                >
                  <FiChevronRight />
                </button>
              </div>
              
              <div className="preview-footer">
                <span>Image {selectedImage + 1} of {images.length}</span>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="empty-state">
          <FiImage size={48} />
          <p>No images selected</p>
        </div>
      )}
    </div>
  )
}