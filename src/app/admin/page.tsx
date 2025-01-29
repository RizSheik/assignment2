'use client'

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface Car {
  _id: string
  name: string
  type: string
  pricePerDay: string
}

export default function AdminPage() {
  const [cars, setCars] = useState<Car[]>([])

  useEffect(() => {
    const mockCars: Car[] = [
      { _id: "1", name: "Tesla Model 3", type: "Electric", pricePerDay: "100" },
      { _id: "2", name: "Toyota Camry", type: "Sedan", pricePerDay: "80" },
      { _id: "3", name: "Ford F-150", type: "Truck", pricePerDay: "120" },
    ]
    setCars(mockCars)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Total Cars</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{cars.length}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Total Rentals</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">27</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">$5,240</p>
            </CardContent>
          </Card>
        </div>
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Car Inventory</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Price per Day</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {cars.map((car) => (
                  <TableRow key={car._id}>
                    <TableCell>{car.name}</TableCell>
                    <TableCell>{car.type}</TableCell>
                    <TableCell>${car.pricePerDay}</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm" className="mr-2">
                        Edit
                      </Button>
                      <Button variant="destructive" size="sm">
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  )
}