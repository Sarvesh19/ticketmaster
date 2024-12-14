import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Booking } from "@/types/booking"
import { CalendarDays, MapPin, Trash2 } from "lucide-react"

interface BookingCardProps {
  booking: Booking
  onCancel: (id: number) => void
}

export function BookingCard({ booking, onCancel }: BookingCardProps) {
  return (
    <Card className="flex flex-col md:flex-row overflow-hidden">
      <div className="w-full md:w-48 h-48 md:h-auto">
        <img 
          src={booking.image} 
          alt={booking.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1">
        <CardHeader>
          <CardTitle>{booking.title}</CardTitle>
          <CardDescription className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4" />
            {booking.date}
          </CardDescription>
          <CardDescription className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            {booking.location}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-muted-foreground">Number of tickets</p>
              <p className="text-lg font-semibold">{booking.tickets}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total price</p>
              <p className="text-lg font-semibold">
                ${parseInt(booking.price.slice(1)) * booking.tickets}
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button 
            variant="destructive" 
            className="w-full"
            onClick={() => onCancel(booking.id)}
          >
            <Trash2 className="h-4 w-4 mr-2" />
            Cancel Booking
          </Button>
        </CardFooter>
      </div>
    </Card>
  )
}