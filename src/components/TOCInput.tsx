'use client'
import { useState } from 'react'

export default function TOCInput({
  toc,
  setToc
}: {
  toc: string[]
  setToc: (sections: string[]) => void
}) {
  const [newSection, setNewSection] = useState('')

  const addSection = () => {
    if (newSection.trim() && !toc.includes(newSection.trim())) {
      setToc([...toc, newSection.trim()])
      setNewSection('')
    }
  }

  const removeSection = (index: number) => {
    const updatedToc = [...toc]
    updatedToc.splice(index, 1)
    setToc(updatedToc)
  }

  const moveSection = (index: number, direction: 'up' | 'down') => {
    if (
      (direction === 'up' && index === 0) ||
      (direction === 'down' && index === toc.length - 1)
    ) {
      return
    }

    const newIndex = direction === 'up' ? index - 1 : index + 1
    const updatedToc = [...toc]
    ;[updatedToc[index], updatedToc[newIndex]] = [updatedToc[newIndex], updatedToc[index]]
    setToc(updatedToc)
  }

  return (
    <div className="toc-input">
      <div className="toc-add-section">
        <input
          type="text"
          value={newSection}
          onChange={(e) => setNewSection(e.target.value)}
          placeholder="New section title"
          onKeyDown={(e) => e.key === 'Enter' && addSection()}
        />
        <button onClick={addSection}>Add Section</button>
      </div>
      
      <div className="toc-sections">
        {toc.map((section, index) => (
          <div key={index} className="toc-section-item">
            <span>{section}</span>
            <div className="toc-actions">
              <button onClick={() => moveSection(index, 'up')}>↑</button>
              <button onClick={() => moveSection(index, 'down')}>↓</button>
              <button onClick={() => removeSection(index)}>×</button>
            </div>
          </div>
        ))}
      </div>
      
      {toc.length === 0 && (
        <div className="toc-empty">
          No sections added yet. Start by adding your first section.
        </div>
      )}
    </div>
  )
}