import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

const cars = [
  {
    id: "9761",
    name: "Nissan GT-R",
    type: "Sport Car",
    image: "https://cdn.sanity.io/images/2yow5vzi/production/db21552aead2a561b7291136fdd93fe715a02090-204x64.jpg",
    status: "Available",
    pickupLocation: "Kota Semarang",
    dropoffLocation: "Kota Semarang",
    pickupDate: "20 July 2022",
    dropoffDate: "21 July 2022",
    price: 80.00,
  },
  // Add more cars...
]

export default function AdminCarsPage() {
  return (
    <div className="flex min-h-screen">
      <main className="flex-1 overflow-auto bg-gray-50 p-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Car Management</h1>
            <p className="text-gray-500">Manage and track your rental cars</p>
          </div>
          <Button>Add New Car</Button>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Filters</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-4">
              <Input placeholder="Search by car name..." />
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Car Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sport">Sport Car</SelectItem>
                  <SelectItem value="suv">SUV</SelectItem>
                  <SelectItem value="sedan">Sedan</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="available">Available</SelectItem>
                  <SelectItem value="rented">Rented</SelectItem>
                  <SelectItem value="maintenance">Maintenance</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="price-asc">Price: Low to High</SelectItem>
                  <SelectItem value="price-desc">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Car Details</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Pick-up</TableHead>
                  <TableHead>Drop-off</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {cars.map((car) => (
                  <TableRow key={car.id}>
                    <TableCell>
                      <div className="flex items-center gap-4">
                        <Image
                          src={car.image || "/placeholder.svg"}
                          alt={car.name}
                          width={80}
                          height={48}
                          className="rounded-lg"
                        />
                        <div>
                          <div className="font-medium">{car.name}</div>
                          <div className="text-sm text-gray-500">{car.type}</div>
                          <div className="text-sm text-gray-500">#{car.id}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="inline-flex rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-800">
                        {car.status}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="font-medium">{car.pickupLocation}</div>
                        <div className="text-sm text-gray-500">{car.pickupDate}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="font-medium">{car.dropoffLocation}</div>
                        <div className="text-sm text-gray-500">{car.dropoffDate}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="font-medium">${car.price.toFixed(2)}/day</div>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">Edit</Button>
                        <Button variant="destructive" size="sm">Delete</Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

