import Image from "next/image"
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react"

interface HeaderProps {
  name: string
  title: string
  contact: {
    email: string
    phone: string
    location: string
    linkedin: string
    github: string
  }
}

export function Header({ name, title, contact }: HeaderProps) {
  return (
    <header className="flex flex-col sm:flex-row gap-6 mb-8 pb-6 border-b print:pb-4">
      <div className="flex-shrink-0 mx-auto sm:mx-0">
        <div className="relative w-32 h-32 sm:w-40 sm:h-40 overflow-hidden rounded-lg border-2 border-gray-200">
          <Image
            src="/placeholder.svg?height=400&width=400"
            alt="Profile Photo"
            width={160}
            height={160}
            className="object-cover"
            priority
          />
        </div>
      </div>
      <div className="flex-grow text-center sm:text-left">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">{name}</h1>
        <h2 className="text-xl sm:text-2xl text-primary font-medium mb-4">{title}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div className="flex items-center gap-2 justify-center sm:justify-start">
            <Mail className="w-4 h-4 text-gray-500 flex-shrink-0" />
            <span className="text-sm">{contact.email}</span>
          </div>
          <div className="flex items-center gap-2 justify-center sm:justify-start">
            <Phone className="w-4 h-4 text-gray-500 flex-shrink-0" />
            <span className="text-sm">{contact.phone}</span>
          </div>
          <div className="flex items-center gap-2 justify-center sm:justify-start">
            <MapPin className="w-4 h-4 text-gray-500 flex-shrink-0" />
            <span className="text-sm">{contact.location}</span>
          </div>
          <div className="flex items-center gap-2 justify-center sm:justify-start">
            <Linkedin className="w-4 h-4 text-gray-500 flex-shrink-0" />
            <span className="text-sm">{contact.linkedin}</span>
          </div>
          <div className="flex items-center gap-2 justify-center sm:justify-start">
            <Github className="w-4 h-4 text-gray-500 flex-shrink-0" />
            <span className="text-sm">{contact.github}</span>
          </div>
        </div>
      </div>
    </header>
  )
}

