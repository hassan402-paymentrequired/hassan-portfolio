import { cn } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const notifications = [
  {
    title: "Your call has been confirmed.",
    description: "Backend Intern - 3 month",
  },
  {
    title: "You have a new message!",
    description: "Backend developer - full time",
  },
  {
    title: "Your subscription is expiring soon!",
    description: "Fullstack developer - remote",
  },
]

type CardProps = React.ComponentProps<typeof Card>

export function ExperinceCard({ className, ...props }: CardProps) {
  return (
    <Card className={cn("w-full border border-gray-800 bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-15 text-white ", className)} {...props}>
      <CardHeader>
        <CardTitle>Experience</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div>
          {notifications.map((notification, index) => (
            <div
              key={index}
              className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
            >
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-lime-400" />
              <div className="">
                <span className="text-sm font-medium leading-none">
                  {notification.title}
                </span>
                <p className="text-xs text-muted-foreground">
                  {notification.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}



