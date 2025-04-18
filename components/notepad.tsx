"use client"

import { useEffect, useState, useRef } from "react"
import { useDebounce } from "@/hooks/use-debounce"
import { NotepadTabs } from "./notepad-tabs"
import { FormatToolbar } from "./format-toolbar"
import { v4 as uuidv4 } from "uuid"

interface Note {
  id: string
  title: string
  content: string
}

export default function Notepad() {
  const [notes, setNotes] = useState<Note[]>([])
  const [activeNoteId, setActiveNoteId] = useState<string>("")
  const [searchTerm, setSearchTerm] = useState("")
  const editorRef = useRef<HTMLDivElement>(null)

  // Initialize notes from localStorage
  useEffect(() => {
    const savedNotes = localStorage.getItem("notepad-notes")
    const savedActiveId = localStorage.getItem("notepad-active-id")

    if (savedNotes) {
      setNotes(JSON.parse(savedNotes))
    } else {
      // Create a default note if none exist
      const defaultNote = { id: uuidv4(), title: "New Note", content: "" }
      setNotes([defaultNote])
      setActiveNoteId(defaultNote.id)
    }

    if (savedActiveId) {
      setActiveNoteId(savedActiveId)
    }
  }, [])

  // Save notes to localStorage when they change
  const debouncedNotes = useDebounce(notes, 500)
  useEffect(() => {
    if (debouncedNotes.length > 0) {
      localStorage.setItem("notepad-notes", JSON.stringify(debouncedNotes))
    }
  }, [debouncedNotes])

  // Save active note ID
  useEffect(() => {
    if (activeNoteId) {
      localStorage.setItem("notepad-active-id", activeNoteId)
    }
  }, [activeNoteId])

  // Get the active note
  const activeNote = notes.find((note) => note.id === activeNoteId) || notes[0]

  // Create a new note
  const handleCreateNote = () => {
    const newNote = {
      id: uuidv4(),
      title: "New Note",
      content: "",
    }
    setNotes([...notes, newNote])
    setActiveNoteId(newNote.id)
  }

  // Delete a note
  const handleDeleteNote = (id: string) => {
    if (notes.length <= 1) {
      // Don't delete the last note
      return
    }

    const newNotes = notes.filter((note) => note.id !== id)
    setNotes(newNotes)

    // If we're deleting the active note, switch to another one
    if (id === activeNoteId) {
      setActiveNoteId(newNotes[0].id)
    }
  }

  // Rename a note
  const handleRenameNote = (id: string, title: string) => {
    setNotes(notes.map((note) => (note.id === id ? { ...note, title } : note)))
  }

  // Update note content
  const handleContentChange = () => {
    if (!editorRef.current) return

    const content = editorRef.current.innerHTML
    setNotes(notes.map((note) => (note.id === activeNoteId ? { ...note, content } : note)))
  }

  // Format text
  const handleFormat = (command: string, value?: string) => {
    document.execCommand(command, false, value)
    handleContentChange()
  }

  // Export note
  const handleExport = () => {
    if (!activeNote) return

    const element = document.createElement("a")
    const file = new Blob([activeNote.content.replace(/<[^>]*>/g, " ")], { type: "text/plain" })
    element.href = URL.createObjectURL(file)
    element.download = `${activeNote.title || "note"}.txt`
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  // Search in note
  const handleSearch = (term: string) => {
    if (!term || !editorRef.current) return

    const text = editorRef.current.textContent || ""
    const index = text.toLowerCase().indexOf(term.toLowerCase())

    if (index >= 0) {
      // Create a range and selection
      const range = document.createRange()
      const selection = window.getSelection()

      // Find the text node that contains the search term
      let currentNode = editorRef.current.firstChild
      let currentIndex = 0

      while (currentNode) {
        if (currentNode.nodeType === Node.TEXT_NODE) {
          const nodeText = currentNode.textContent || ""
          if (currentIndex + nodeText.length > index) {
            // This node contains our search term
            const offset = index - currentIndex
            range.setStart(currentNode, offset)
            range.setEnd(currentNode, offset + term.length)
            selection?.removeAllRanges()
            selection?.addRange(range)
            break
          }
          currentIndex += nodeText.length
        } else if (currentNode.nodeType === Node.ELEMENT_NODE) {
          // For element nodes, add their text content length
          currentIndex += (currentNode.textContent || "").length
        }

        // Move to next node
        const nextNode = currentNode.firstChild || currentNode.nextSibling
        if (!nextNode) {
          let parentNode = currentNode.parentNode
          while (parentNode && parentNode !== editorRef.current && !parentNode.nextSibling) {
            parentNode = parentNode.parentNode
          }
          if (parentNode && parentNode !== editorRef.current) {
            currentNode = parentNode.nextSibling
          } else {
            break
          }
        } else {
          currentNode = nextNode
        }
      }
    }
  }

  return (
    <div className="flex-1 flex flex-col bg-yellow-50 dark:bg-yellow-950 border border-yellow-300 dark:border-yellow-800 rounded shadow-md">
      <NotepadTabs
        activeNoteId={activeNoteId}
        notes={notes}
        onSelectNote={setActiveNoteId}
        onCreateNote={handleCreateNote}
        onDeleteNote={handleDeleteNote}
        onRenameNote={handleRenameNote}
      />

      <FormatToolbar
        onFormat={handleFormat}
        onExport={handleExport}
        onSearch={handleSearch}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <div
        ref={editorRef}
        className="flex-1 p-4 overflow-auto focus:outline-none font-mono bg-yellow-50 dark:bg-yellow-950 text-yellow-900 dark:text-yellow-100"
        contentEditable
        dangerouslySetInnerHTML={{ __html: activeNote?.content || "" }}
        onInput={handleContentChange}
        onBlur={handleContentChange}
      />

      <div className="flex justify-between items-center px-4 py-2 bg-yellow-100 dark:bg-yellow-900 text-xs text-yellow-700 dark:text-yellow-300 border-t border-yellow-300 dark:border-yellow-800">
        <div>Auto-saving...</div>
        <div>{editorRef.current?.textContent?.length || 0} characters</div>
      </div>
    </div>
  )
}
