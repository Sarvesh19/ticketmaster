"use client"

import { BackButton } from "@/components/BackButton"
import { CategoryFilter } from "@/components/events/CategoryFilter"
import { EventCard } from "@/components/events/EventCard"
import { SearchInput } from "@/components/events/SearchInput"
import { Header } from "@/components/layout/Header"
import { events } from "@/data/events"
import { useState } from "react"

export default function EventsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = !selectedCategory || event.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <BackButton />
        <h1 className="text-3xl font-bold mb-8">All Events</h1>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <SearchInput value={searchTerm} onChange={setSearchTerm} />
          <CategoryFilter value={selectedCategory} onValueChange={setSelectedCategory} />
        </div>

        {filteredEvents.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No events found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} showCategory />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}