"use client"

import { Bold, Italic, Underline, List, ListOrdered, AlignLeft, AlignCenter, AlignRight, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"

interface FormatToolbarProps {
  onFormat: (command: string, value?: string) => void
  onExport: () => void
  onSearch: (term: string) => void
  searchTerm: string
  setSearchTerm: (term: string) => void
}

export function FormatToolbar({ onFormat, onExport, onSearch, searchTerm, setSearchTerm }: FormatToolbarProps) {
  return (
    <div className="flex items-center p-1 bg-yellow-100 dark:bg-yellow-900 border-b border-yellow-300 dark:border-yellow-800">
      <div className="flex items-center space-x-1 mr-2">
        <Button variant="ghost" size="icon" onClick={() => onFormat("bold")} title="Bold">
          <Bold className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" onClick={() => onFormat("italic")} title="Italic">
          <Italic className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" onClick={() => onFormat("underline")} title="Underline">
          <Underline className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex items-center space-x-1 mr-2">
        <Button variant="ghost" size="icon" onClick={() => onFormat("insertUnorderedList")} title="Bullet List">
          <List className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" onClick={() => onFormat("insertOrderedList")} title="Numbered List">
          <ListOrdered className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex items-center space-x-1 mr-2">
        <Button variant="ghost" size="icon" onClick={() => onFormat("justifyLeft")} title="Align Left">
          <AlignLeft className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" onClick={() => onFormat("justifyCenter")} title="Align Center">
          <AlignCenter className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" onClick={() => onFormat("justifyRight")} title="Align Right">
          <AlignRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex-1 mx-2">
        <div className="relative">
          <Input
            type="search"
            placeholder="Search in note..."
            className="h-8 text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onSearch(searchTerm)
              }
            }}
          />
        </div>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" title="Export">
            <Download className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={onExport}>Export as TXT</DropdownMenuItem>
          <DropdownMenuItem onClick={onExport}>Export as HTML</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
