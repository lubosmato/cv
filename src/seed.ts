/**
 * Seed script — fills the CV with Pepe the Frog themed demo data.
 *
 * Run with:  pnpm seed        (alias for: payload run src/seed.ts)
 *
 * Re-runnable: it wipes the content collections it manages and re-creates them,
 * so running it twice leaves the same result (no duplicates).
 *
 * Images are real, freely-licensed "Pepe the Frog" photos from Wikimedia Commons.
 * They are downloaded and downscaled with sharp at seed time, then stored as media.
 */
import { createRequire } from 'module'

// The collection/global hooks call revalidatePath("/") from "next/cache", which
// throws "static generation store missing" outside of a Next.js request context
// (i.e. here, in a standalone CLI script). Neutralise it before Payload loads.
const require = createRequire(import.meta.url)
const nextCache = require('next/cache')
nextCache.revalidatePath = () => {}
nextCache.revalidateTag = () => {}

const { getPayload } = await import('payload')
const config = (await import('./payload.config')).default
const sharp = (await import('sharp')).default

const UA = 'cv-seed/1.0 (https://github.com/; lubos.matejcik@gmail.com)'

// ---------- helpers ----------

/** Minimal valid Lexical rich-text value from one or more paragraphs of plain text. */
const richText = (...paragraphs: string[]) => ({
  root: {
    type: 'root',
    format: '',
    indent: 0,
    version: 1,
    direction: 'ltr' as const,
    children: paragraphs.map((text) => ({
      type: 'paragraph',
      format: '',
      indent: 0,
      version: 1,
      direction: 'ltr' as const,
      textFormat: 0,
      children: [
        { type: 'text', text, format: 0, style: '', mode: 'normal', detail: 0, version: 1 },
      ],
    })),
  },
})

/** Download an image and downscale it with sharp into a small JPEG buffer. */
const grabImage = async (
  url: string,
  opts: { square?: boolean; size?: number } = {},
): Promise<Buffer> => {
  const res = await fetch(url, { headers: { 'User-Agent': UA } })
  if (!res.ok) throw new Error(`fetch failed ${res.status} for ${url}`)
  const input = Buffer.from(await res.arrayBuffer())
  const pipeline = sharp(input).rotate()
  if (opts.square) {
    pipeline.resize(opts.size ?? 512, opts.size ?? 512, { fit: 'cover' })
  } else {
    pipeline.resize({ width: opts.size ?? 700, withoutEnlargement: true })
  }
  return pipeline.jpeg({ quality: 82 }).toBuffer()
}

const COMMONS = 'https://upload.wikimedia.org/wikipedia/commons'

// ---------- seed ----------

const payload = await getPayload({ config })

const log = (msg: string) => payload.logger.info(`[seed] ${msg}`)

// 1. Wipe the content collections we manage (keeps re-runs idempotent).
const contentCollections = [
  'projects',
  'jobs',
  'educations',
  'skills',
  'languages',
  'certifications',
  'technologies',
] as const
for (const collection of contentCollections) {
  await payload.delete({ collection, where: { id: { exists: true } } })
}
log('cleared content collections')

// 2. Upload the Pepe images.
const uploadMedia = async (
  url: string,
  alt: string,
  filename: string,
  opts: { square?: boolean; size?: number } = {},
) => {
  const data = await grabImage(url, opts)
  const doc = await payload.create({
    collection: 'media',
    data: { alt },
    file: { data, mimetype: 'image/jpeg', name: filename, size: data.length },
  })
  return doc.id
}

const avatar = await uploadMedia(
  `${COMMONS}/b/b1/Pyrkon_2022_-_Pepe_the_Frog.jpg`,
  'Pepe the Frog mascot',
  'pepe-avatar.jpg',
  { square: true },
)
const avatarAlt = await uploadMedia(
  `${COMMONS}/2/20/Crying_Pepe_mask%2C_8_December_2019.jpg`,
  'Crying Pepe — feels bad man',
  'pepe-avatar-alt.jpg',
  { square: true },
)
const imgPumpkin = await uploadMedia(
  `${COMMONS}/8/81/Pepe_the_Frog_Jack-o-lantern.jpg`,
  'Pepe the Frog Jack-o-lantern',
  'pepe-pumpkin.jpg',
)
const imgSanta = await uploadMedia(
  `${COMMONS}/0/0c/Pepe_the_Frog_Santa_plush.jpg`,
  'Pepe the Frog Santa plush',
  'pepe-santa.jpg',
)
const imgMask = await uploadMedia(
  `${COMMONS}/5/5f/Pepe_the_Frog_mask%2C_8_December_2019.jpg`,
  'Pepe the Frog mask',
  'pepe-mask.jpg',
)
const imgPlush = await uploadMedia(
  `${COMMONS}/3/3f/Pepe_the_Frog_plush_at_food_stand%2C_2020.jpg`,
  'Pepe the Frog plush at a food stand',
  'pepe-plush.jpg',
)
log('uploaded Pepe images')

// 3. Technologies — created first so we can reference them by relationship.
const techLabels = [
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'PostgreSQL',
  'PayloadCMS',
  'Tailwind CSS',
  'GraphQL',
  'Docker',
  'Kubernetes',
  'Rust',
  'Python',
]
const tech: Record<string, number> = {}
for (const label of techLabels) {
  const doc = await payload.create({ collection: 'technologies', data: { label } })
  tech[label] = doc.id as number
}
log(`created ${techLabels.length} technologies`)

// 4. Jobs (sorted by -since on the page).
const jobs = [
  {
    since: '2021-03-01',
    to: null,
    company: 'FeelsGoodMan Inc.',
    position: 'Senior Meme Engineer',
    description: richText(
      'Lead engineer for the Rare Pepe distribution platform serving 4 billion smug frogs per day.',
      'Scaled the greentext ingestion pipeline 40x while keeping p99 latency below one keket. Mentored a pond of junior developers and championed a "feels good, ships good" engineering culture.',
    ),
    technologies: [tech['TypeScript'], tech['Next.js'], tech['PostgreSQL'], tech['Kubernetes']],
  },
  {
    since: '2018-06-01',
    to: '2021-02-28',
    company: 'Rare Pepe Foundation',
    position: 'Full-Stack Developer',
    description: richText(
      'Built the authenticity ledger that certifies whether a Pepe is genuinely rare or a normie counterfeit.',
      'Designed the public API consumed by collectors worldwide and reduced infrastructure cost by 60% by migrating from a swamp of VMs to containers.',
    ),
    technologies: [tech['React'], tech['Node.js'], tech['GraphQL'], tech['Docker']],
  },
  {
    since: '2015-09-01',
    to: '2018-05-31',
    company: 'Kek Industries',
    position: 'Junior Software Developer',
    description: richText(
      'Maintained internal meme-tooling and wrote the first version of the "Press F to pay respects" service.',
      'Learned to write tests, read logs, and never deploy on a Friday — feels good man.',
    ),
    technologies: [tech['Python'], tech['PostgreSQL'], tech['Rust']],
  },
]
for (const job of jobs) {
  await payload.create({ collection: 'jobs', data: job as never })
}
log(`created ${jobs.length} jobs`)

// 5. Educations.
const educations = [
  {
    since: '2012-09-01',
    to: '2015-06-30',
    title: 'BSc in Computer Science',
    subtitle: 'University of the Internet',
    description: 'Specialised in distributed systems and applied memetics. Thesis: "On the Scarcity of Rare Pepes".',
  },
  {
    since: '2010-09-01',
    to: '2012-06-30',
    title: 'Gymnasium, focus on Informatics',
    subtitle: 'Greentext High School',
    description: 'Graduated with honours. Founded the school meme review club.',
  },
]
for (const education of educations) {
  await payload.create({ collection: 'educations', data: education })
}
log(`created ${educations.length} educations`)

// 6. Skills (sorted by -percentage on the page).
const skills = [
  { label: 'TypeScript / JavaScript', percentage: 95 },
  { label: 'React & Next.js', percentage: 92 },
  { label: 'Node.js', percentage: 90 },
  { label: 'PostgreSQL', percentage: 85 },
  { label: 'Meme Curation', percentage: 99 },
  { label: 'Docker & Kubernetes', percentage: 78 },
  { label: 'Rust', percentage: 65 },
]
for (const skill of skills) {
  await payload.create({ collection: 'skills', data: skill })
}
log(`created ${skills.length} skills`)

// 7. Languages (sorted by -proficiency on the page).
const languages = [
  { name: 'Frog (native)', level: 'Native', proficiency: 100 },
  { name: 'English', level: 'Fluent (C2)', proficiency: 95 },
  { name: 'Czech', level: 'Conversational (B2)', proficiency: 70 },
  { name: 'Greentext', level: 'Fluent', proficiency: 88 },
]
for (const language of languages) {
  await payload.create({ collection: 'languages', data: language })
}
log(`created ${languages.length} languages`)

// 8. Certifications.
const certifications = [
  { label: 'Certified Rare Pepe Appraiser (CRPA)', link: 'https://knowyourmeme.com/memes/pepe-the-frog' },
  { label: 'AWS Certified Swamp Architect', link: null },
  { label: 'Advanced Greentext Storytelling', link: null },
]
for (const certification of certifications) {
  await payload.create({ collection: 'certifications', data: certification as never })
}
log(`created ${certifications.length} certifications`)

// 9. Projects (sorted by -type then -date on the page).
const projects = [
  {
    title: 'RarePepe Vault',
    type: 'professional',
    date: '2023-10-01',
    photo: imgPumpkin,
    description: richText(
      'A self-hostable vault for cataloguing and verifying rare Pepes, with on-chain provenance and a slick gallery.',
    ),
    technologies: [tech['Next.js'], tech['TypeScript'], tech['PostgreSQL'], tech['Tailwind CSS']],
  },
  {
    title: 'FeelsAPI',
    type: 'professional',
    date: '2022-04-15',
    photo: imgMask,
    description: richText(
      'A public REST + GraphQL API that returns the perfect reaction Pepe for any emotion. Powers dozens of chat bots.',
    ),
    technologies: [tech['Node.js'], tech['GraphQL'], tech['Docker']],
  },
  {
    title: 'Greentext Generator',
    type: 'hobby',
    date: '2024-02-20',
    photo: imgSanta,
    description: richText(
      'A weekend project that turns boring stories into classic > greentext, complete with implications.',
    ),
    technologies: [tech['Python'], tech['React']],
  },
  {
    title: 'Pepe Plush Tracker',
    type: 'hobby',
    date: '2021-12-05',
    photo: imgPlush,
    description: richText(
      'A tiny app that maps every food stand still selling Pepe plushies. Built for fun, surprisingly popular.',
    ),
    technologies: [tech['Rust'], tech['PostgreSQL']],
  },
]
for (const project of projects) {
  await payload.create({ collection: 'projects', data: project as never })
}
log(`created ${projects.length} projects`)

// 10. Profile global.
await payload.updateGlobal({
  slug: 'profile',
  data: {
    name: 'Pepe Frogman',
    profession: 'Senior Meme Engineer',
    altProfession: 'Rare Pepe Connoisseur',
    email: 'pepe@feelsgoodman.dev',
    place: 'The Swamp, Internet',
    phone: '+1 (555) 364-3577',
    githubHandle: 'rare-pepe',
    linkedinHandle: 'pepethefrog',
    photo: avatar,
    altPhoto: avatarAlt,
    summary: richText(
      'Senior software engineer with 9+ years of experience building delightful, well-tested products at scale — and an unhealthy obsession with frogs.',
      'I care about clean architecture, fast feedback loops, and shipping things that feel good to use. Comfortable across the stack, from PostgreSQL schemas to pixel-perfect React. Feels good, ships good. man.',
    ),
  } as never,
})
log('updated profile global')

// 11. Now that nothing references the old media anymore, drop any media that is
// not part of this seed (leftovers from earlier manual uploads or failed runs).
const keepMedia = [avatar, avatarAlt, imgPumpkin, imgSanta, imgMask, imgPlush]
await payload.delete({ collection: 'media', where: { id: { not_in: keepMedia } } })
log('removed stale media')

log('✅ seed complete — feels good man')
process.exit(0)
