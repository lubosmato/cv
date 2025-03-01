import { Technology } from "@/payload-types";

export function Technologies({ technologies }: { technologies: (number | Technology)[] }) {
  return technologies?.filter(t => typeof t !== "number").map((technology, technologyIndex) => (
    <span key={technologyIndex} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
      {technology.label}
    </span>
  ))

}
