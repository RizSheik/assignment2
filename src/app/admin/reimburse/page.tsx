import { AdminSidebar } from "@/components/admin/sidebar"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const reimbursements = [
  {
    id: "RMB-001",
    customer: "John Doe",
    amount: 150.00,
    date: "2024-01-15",
    status: "Pending",
    reason: "Fuel refill",
  },
  {
    id: "RMB-002",
    customer: "Jane Smith",
    amount: 75.50,
    date: "2024-01-14",
    status: "Approved",
    reason: "Car wash",
  },
]

export default function ReimbursePage() {
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 overflow-auto bg-gray-50 p-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Reimbursements</h1>
            <p className="text-gray-500">Manage customer reimbursement requests</p>
          </div>
          <Button>Export Report</Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent Reimbursements</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Reason</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {reimbursements.map((reimbursement) => (
                  <TableRow key={reimbursement.id}>
                    <TableCell>{reimbursement.id}</TableCell>
                    <TableCell>{reimbursement.customer}</TableCell>
                    <TableCell>${reimbursement.amount.toFixed(2)}</TableCell>
                    <TableCell>{reimbursement.date}</TableCell>
                    <TableCell>{reimbursement.reason}</TableCell>
                    <TableCell>
                      <Badge
                        variant={reimbursement.status === "Approved" ? "success" : "warning"}
                      >
                        {reimbursement.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                        {reimbursement.status === "Pending" && (
                          <Button size="sm">Approve</Button>
                        )}
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