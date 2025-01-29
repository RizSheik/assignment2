'use client'

import { useState } from 'react'
import { AdminSidebar } from "@/components/admin/sidebar"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const events = [
  {
    id: 1,
    title: "Car Maintenance - Nissan GT-R",
    date: "2024-01-15",
    time: "10:00 AM",
    type: "maintenance",
  },
  {
    id: 2,
    title: "Rental Pickup - John Doe",
    date: "2024-01-15",
    time: "2:00 PM",
    type: "pickup",
  },
  // Add more events...
]

export default function CalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 overflow-auto bg-gray-50 p-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Calendar</h1>
            <p className="text-gray-500">Manage your schedule and appointments</p>
          </div>
          <Button>Add Event</Button>
        </div>

        <div className="grid gap-8 lg:grid-cols-[400px_1fr]">
          <Card>
            <CardContent className="p-4">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Events for {date?.toLocaleDateString()}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {events.map((event) => (
                  <div
                    key={event.id}
                    className="flex items-center justify-between rounded-lg border p-4"
                  >
                    <div>
                      <h3 className="font-medium">{event.title}</h3>
                      <p className="text-sm text-gray-500">
                        {event.date} at {event.time}
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}