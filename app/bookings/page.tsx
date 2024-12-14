"use client"

import { BackButton } from "@/components/BackButton"
import { BookingCard } from "@/components/bookings/BookingCard"
import { Header } from "@/components/layout/Header"
import { useState } from "react"

const initialBookings = [
  {
    id: 1,
    title: "Summer Music Festival",
    date: "July 15, 2024",
    location: "Central Park",
    price: "$99",
    tickets: 2,
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&q=80&w=2940",
  },
  {
    id: 2,
    title: "Tech Conference 2024",
    date: "August 20, 2024",
    location: "Convention Center",
    price: "$149",
    tickets: 1,
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=2940",
  }
]

export default function BookingsPage() {
  const [bookings, setBookings] = useState(initialBookings)

  const handleCancelBooking = (id: number) => {
    setBookings(bookings.filter(booking => booking.id !== id))
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <BackButton />
        <h1 className="text-3xl font-bold mb-8">My Bookings</h1>

        {bookings.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">You have no bookings yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bookings.map((booking) => (
              <BookingCard 
                key={booking.id} 
                booking={booking}
                onCancel={handleCancelBooking}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}