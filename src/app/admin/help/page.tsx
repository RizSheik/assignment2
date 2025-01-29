import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button";

export default function HelpPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-semibold mb-6 text-center">Help & Support Center</h1>
      
      <div className="mb-8 text-center">
        <p className="text-lg text-gray-600">
          Find answers to common questions, guides, and support to help you get the most out of our services.
        </p>
      </div>

      
      <Card>
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
        </CardHeader>
        <CardContent>
          {/* FAQ List */}
          <div className="space-y-4">
            <div className="border-b pb-4">
              <h3 className="text-lg font-medium text-gray-800">What is the car rental process?</h3>
              <p className="text-sm text-gray-600 mt-2">
                To rent a car, simply browse our available cars, select the one you like, choose your rental dates, 
                and proceed with the payment. You will then receive a confirmation email with the details.
              </p>
            </div>

            <div className="border-b pb-4">
              <h3 className="text-lg font-medium text-gray-800">How do I apply a discount code?</h3>
              <p className="text-sm text-gray-600 mt-2">
                On the checkout page, you will find an option to enter a promo code. Simply type in your code and the discount will be applied.
              </p>
            </div>

            <div className="border-b pb-4">
              <h3 className="text-lg font-medium text-gray-800">Can I cancel my reservation?</h3>
              <p className="text-sm text-gray-600 mt-2">
                Yes, you can cancel or modify your reservation up to 24 hours before the scheduled pickup time without any charge.
              </p>
            </div>

            <div className="border-b pb-4">
              <h3 className="text-lg font-medium text-gray-800">What types of cars are available for rent?</h3>
              <p className="text-sm text-gray-600 mt-2">
                We offer a variety of cars including sport cars, SUVs, sedans, hatchbacks, and more. You can filter available cars by type and location.
              </p>
            </div>

          
          </div>
        </CardContent>
      </Card>


      <div className="mt-8 text-center">
        <h3 className="text-xl font-medium text-gray-800 mb-4">Need More Help?</h3>
        <p className="text-sm text-gray-600 mb-4">
          If you can&amp;apos;t find what you&amp;apos;re looking for, feel free to contact our support team. We&amp;apos;re here to assist you.
        </p>
        <Button variant="outline" className="w-full max-w-md mx-auto">Contact Support</Button>
      </div>
    </div>
  )
}
