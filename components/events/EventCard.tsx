import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Event } from "@/types/event"
import { CalendarDays, MapPin } from "lucide-react"

interface EventCardProps {
  event: Event
  showCategory?: boolean
}

export function EventCard({ event, showCategory = false }: EventCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="h-48 overflow-hidden">
        <img 
          src={event.image} 
          alt={event.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>{event.title}</CardTitle>
            <CardDescription className="flex items-center gap-2 mt-2">
              <CalendarDays className="h-4 w-4" />
              {event.date}
            </CardDescription>
            <CardDescription className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              {event.location}
            </CardDescription>
          </div>
          {showCategory && event.category && (
            <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
              {event.category}
            </span>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold">{event.price}</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Book Now</Button>
      </CardFooter>
    </Card>
  )
}