"use client"
import { Plus, X, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

interface Note {
  id: string
  title: string
  content: string
}

interface NotepadTabsProps {
  activeNoteId: string
  notes: Note[]
  onSelectNote: (id: string) => void
  onCreateNote: () => void
  onDeleteNote: (id: string) => void
  onRenameNote: (id: string, title: string) => void
}

export function NotepadTabs({
  activeNoteId,
  notes,
  onSelectNote,
  onCreateNote,
  onDeleteNote,
  onRenameNote,
}: NotepadTabsProps) {
  return (
    <div className="border-b border-yellow-300 dark:border-yellow-800 bg-yellow-100 dark:bg-yellow-900">
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex items-center">
          {notes.map((note) => (
            <div
              key={note.id}
              className={`group inline-flex items-center px-3 py-2 border-r border-yellow-300 dark:border-yellow-800 cursor-pointer ${
                activeNoteId === note.id
                  ? "bg-yellow-200 dark:bg-yellow-800"
                  : "bg-yellow-100 dark:bg-yellow-900 hover:bg-yellow-200 dark:hover:bg-yellow-800"
              }`}
              onClick={() => onSelectNote(note.id)}
            >
              <FileText className="h-4 w-4 mr-2 text-yellow-800 dark:text-yellow-200" />
              <span className="text-sm font-medium text-yellow-900 dark:text-yellow-100 mr-2">
                {note.title || "Untitled"}
              </span>
              <Button
                variant="ghost"
                size="icon"
                className="h-5 w-5 rounded-full opacity-0 group-hover:opacity-100"
                onClick={(e) => {
                  e.stopPropagation()
                  onDeleteNote(note.id)
                }}
              >
                <X className="h-3 w-3" />
                <span className="sr-only">Close</span>
              </Button>
            </div>
          ))}
          <Button variant="ghost" size="icon" className="h-9 w-9 ml-1" onClick={onCreateNote}>
            <Plus className="h-4 w-4" />
            <span className="sr-only">New note</span>
          </Button>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  )
}
