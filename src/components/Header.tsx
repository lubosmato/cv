import { getPayload } from "@/lib/payload"
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"

export async function Header() {
  const payload = await getPayload()
  const profile = await payload.findGlobal({ slug: "profile", depth: 1 })
  const photo = typeof profile.photo !== "number" ? profile.photo : null
  const altPhoto = typeof profile.altPhoto !== "number" ? profile.altPhoto : null

  return (
    <header className="flex flex-col sm:flex-row gap-6 mb-8 print:mb-3">
      <div className="flex-shrink-0 mx-auto sm:mx-0">
        <div className="relative w-32 h-32 sm:w-40 sm:h-40 overflow-hidden rounded-lg border-2 border-gray-200 group">
          {photo && photo.url && (
            <Image
              src={photo.url}
              alt={photo.alt}
              width={160}
              height={160}
              className="object-cover w-full h-full absolute inset-0 transition-all duration-300 ease-in-out transform group-hover:-translate-y-3 group-hover:opacity-0"
              priority
            />
          )}
          {altPhoto && altPhoto.url && (
            <Image
              src={altPhoto.url}
              alt={altPhoto.alt}
              width={160}
              height={160}
              className="object-cover w-full h-full absolute inset-0 transition-all duration-300 ease-in-out transform translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
            />
          )}
        </div>
      </div>
      <div className="flex-grow text-center sm:text-left">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">{profile.name}</h1>
        <div className="relative h-8 sm:h-10 mb-4 group">
          <h2
            className="text-xl sm:text-2xl text-primary font-medium absolute inset-0 transition-all duration-300 ease-in-out transform group-hover:-translate-y-3 group-hover:opacity-0"
          >
            {profile.profession}
          </h2>
          <h2
            className="text-xl sm:text-2xl text-primary font-medium absolute inset-0 transition-all duration-300 ease-in-out transform translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
          >
            {profile.altProfession}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div className="flex items-center gap-2 justify-center sm:justify-start">
            <Mail className="w-4 h-4 text-gray-500 flex-shrink-0" />
            <a href={`mailto:${profile.email}`} className="text-sm">{profile.email}</a>
          </div>
          <div className="flex items-center gap-2 justify-center sm:justify-start">
            <Phone className="w-4 h-4 text-gray-500 flex-shrink-0" />
            <a href={`tel:${profile.phone}`} className="text-sm">{profile.phone}</a>
          </div>
          <div className="flex items-center gap-2 justify-center sm:justify-start">
            <MapPin className="w-4 h-4 text-gray-500 flex-shrink-0" />
            <span className="text-sm">{profile.place}</span>
          </div>
          <div className="flex items-center gap-2 justify-center sm:justify-start">
            <Linkedin className="w-4 h-4 text-gray-500 flex-shrink-0" />
            <a href={`https://www.linkedin.com/in/${profile.linkedinHandle}/`} target="_blank" className="text-sm">linkedin/{profile.linkedinHandle}</a>
          </div>
          <div className="flex items-center gap-2 justify-center sm:justify-start">
            <Github className="w-4 h-4 text-gray-500 flex-shrink-0" />
            <a href={`https://github.com/${profile.githubHandle}/`} target="_blank" className="text-sm">github/{profile.githubHandle}</a>
          </div>
        </div>
      </div>
    </header>
  )
}

