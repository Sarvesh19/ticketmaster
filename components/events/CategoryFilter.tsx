"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface CategoryFilterProps {
  value: string | null
  onValueChange: (value: string | null) => void
}

export function CategoryFilter({ value, onValueChange }: CategoryFilterProps) {
  return (
    <Select 
      value={value || "all"} 
      onValueChange={(val) => onValueChange(val === "all" ? null : val)}
    >
      <SelectTrigger className="w-full md:w-[180px]">
        <SelectValue placeholder="Category" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All Categories</SelectItem>
        <SelectItem value="Music">Music</SelectItem>
        <SelectItem value="Technology">Technology</SelectItem>
        <SelectItem value="Comedy">Comedy</SelectItem>
      </SelectContent>
    </Select>
  )
}