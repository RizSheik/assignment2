'use client'

import { AdminSidebar } from "@/components/admin/sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { month: 'Jan', rentals: 4000 },
  { month: 'Feb', rentals: 3000 },
  { month: 'Mar', rentals: 2000 },
  { month: 'Apr', rentals: 2780 },
  { month: 'May', rentals: 1890 },
  { month: 'Jun', rentals: 2390 },
]

export default function InsightPage() {
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 overflow-auto bg-gray-50 p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold">Insights</h1>
          <p className="text-gray-500">View your business analytics and statistics</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Total Rentals</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">72,030</div>
              <p className="text-sm text-gray-500">+12.5% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$528,490</div>
              <p className="text-sm text-gray-500">+8.2% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Active Cars</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">892</div>
              <p className="text-sm text-gray-500">+3.1% from last month</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Rentals</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="rentals" fill="#3b82f6" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}