import { getAllCustomers, getAllEnrollments } from "@/lib/database"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default async function AdminCustomersPage() {
  const customers = await getAllCustomers()
  const enrollments = await getAllEnrollments()

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-[#5A68B0]">Customer Management</h1>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Customers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {customers?.slice(0, 10).map((customer) => (
                <div key={customer.id} className="flex justify-between items-center p-3 border rounded">
                  <div>
                    <p className="font-medium">
                      {customer.first_name} {customer.last_name}
                    </p>
                    <p className="text-sm text-gray-600">{customer.email}</p>
                    <p className="text-xs text-gray-500">{customer.country}</p>
                  </div>
                  <Badge variant="outline">{new Date(customer.created_at).toLocaleDateString()}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Enrollments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {enrollments?.slice(0, 10).map((enrollment) => (
                <div key={enrollment.id} className="flex justify-between items-center p-3 border rounded">
                  <div>
                    <p className="font-medium">{enrollment.course_name}</p>
                    <p className="text-sm text-gray-600">
                      {enrollment.customers?.first_name} {enrollment.customers?.last_name}
                    </p>
                    <p className="text-xs text-gray-500">${enrollment.payment_amount}</p>
                  </div>
                  <Badge variant={enrollment.payment_status === "completed" ? "default" : "secondary"}>
                    {enrollment.payment_status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
