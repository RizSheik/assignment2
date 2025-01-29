import { AdminSidebar } from "@/components/admin/sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const messages = [
  {
    id: 1,
    sender: "John Doe",
    avatar: "/placeholder.svg",
    subject: "Car Rental Inquiry",
    preview: "Hi, I would like to inquire about the availability of...",
    date: "10:30 AM",
    unread: true,
  },
  {
    id: 2,
    sender: "Jane Smith",
    avatar: "/placeholder.svg",
    subject: "Booking Confirmation",
    preview: "Thank you for your booking. This email confirms your...",
    date: "Yesterday",
    unread: false,
  },
]

export default function InboxPage() {
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 overflow-auto bg-gray-50">
        <div className="grid h-full lg:grid-cols-[280px_1fr]">
          <div className="border-r bg-white">
            <div className="p-4">
              <Button className="w-full">Compose</Button>
              <Input className="mt-4" placeholder="Search messages..." />
            </div>
            <nav className="space-y-1 p-2">
              {messages.map((message) => (
                <button
                  key={message.id}
                  className={`w-full rounded-lg p-3 text-left hover:bg-gray-100 ${
                    message.unread ? "font-semibold" : ""
                  }`}
                >
                  <div className="flex gap-3">
                    <Avatar>
                      <AvatarImage src={message.avatar} />
                      <AvatarFallback>{message.sender[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 overflow-hidden">
                      <div className="flex items-center justify-between">
                        <span className="truncate">{message.sender}</span>
                        <span className="text-xs text-gray-500">{message.date}</span>
                      </div>
                      <div className="truncate text-sm font-medium">{message.subject}</div>
                      <div className="truncate text-sm text-gray-500">{message.preview}</div>
                    </div>
                  </div>
                </button>
              ))}
            </nav>
          </div>
          <div className="flex items-center justify-center p-8 text-gray-500">
            Select a message to read
          </div>
        </div>
      </main>
    </div>
  )
}
