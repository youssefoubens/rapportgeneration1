'use client'
import { useState } from 'react'
import { FiPlus, FiTrash2, FiArrowUp, FiArrowDown, FiEdit2 } from 'react-icons/fi'

export default function TOCInput({
  toc,
  setToc
}: {
  toc: string[]
  setToc: (sections: string[]) => void
}) {
  const [newSection, setNewSection] = useState('')
  const [editingIndex, setEditingIndex] = useState<number | null>(null)
  const [editValue, setEditValue] = useState('')

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
    if (editingIndex === index) setEditingIndex(null)
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
    if (editingIndex === index) setEditingIndex(newIndex)
  }

  const startEditing = (index: number) => {
    setEditingIndex(index)
    setEditValue(toc[index])
  }

  const saveEdit = (index: number) => {
    if (editValue.trim() && !toc.some((s, i) => i !== index && s === editValue.trim())) {
      const updatedToc = [...toc]
      updatedToc[index] = editValue.trim()
      setToc(updatedToc)
      setEditingIndex(null)
    }
  }

  return (
    <div className="space-y-4">
      {/* Add Section Input */}
      <div className="flex gap-2">
        <input
          type="text"
          value={newSection}
          onChange={(e) => setNewSection(e.target.value)}
          placeholder="Enter section title"
          onKeyDown={(e) => e.key === 'Enter' && addSection()}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <button
          onClick={addSection}
          disabled={!newSection.trim()}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-blue-400 flex items-center gap-2"
        >
          <FiPlus /> Add
        </button>
      </div>

      {/* Sections List */}
      <div className="border rounded-lg divide-y divide-gray-200">
        {toc.length === 0 ? (
          <div className="p-4 text-center text-gray-500">
            No sections added yet. Start by adding your first section.
          </div>
        ) : (
          toc.map((section, index) => (
            <div key={index} className="p-3 flex items-center justify-between group hover:bg-gray-50">
              {editingIndex === index ? (
                <div className="flex-1 flex gap-2">
                  <input
                    type="text"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && saveEdit(index)}
                    autoFocus
                    className="flex-1 px-3 py-1 border border-blue-300 rounded focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    onClick={() => saveEdit(index)}
                    className="px-2 py-1 bg-green-600 text-white rounded text-sm"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditingIndex(null)}
                    className="px-2 py-1 bg-gray-200 text-gray-800 rounded text-sm"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex-1 flex items-center">
                    <span className="text-gray-700">{section}</span>
                  </div>
                  <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => startEditing(index)}
                      className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-full"
                      title="Edit"
                    >
                      <FiEdit2 size={16} />
                    </button>
                    <button
                      onClick={() => moveSection(index, 'up')}
                      disabled={index === 0}
                      className="p-2 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-full disabled:opacity-30"
                      title="Move up"
                    >
                      <FiArrowUp size={16} />
                    </button>
                    <button
                      onClick={() => moveSection(index, 'down')}
                      disabled={index === toc.length - 1}
                      className="p-2 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-full disabled:opacity-30"
                      title="Move down"
                    >
                      <FiArrowDown size={16} />
                    </button>
                    <button
                      onClick={() => removeSection(index)}
                      className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-full"
                      title="Remove"
                    >
                      <FiTrash2 size={16} />
                    </button>
                  </div>
                </>
              )}
            </div>
          ))
        )}
      </div>

      {/* Help Text */}
      <div className="text-sm text-gray-500">
        Tip: Drag sections to reorder or click the edit icon to rename them.
      </div>
    </div>
  )
}