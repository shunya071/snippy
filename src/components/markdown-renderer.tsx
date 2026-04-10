import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import Image from "next/image"

type ImageMap = {
  [slot: number]: { url: string; alt: string }
}

type Props = {
  content: string
  images?: ImageMap
}

function processImagePlaceholders(
  content: string,
  images: ImageMap
): string {
  return content.replace(/\[image\s+(\d+)\]/gi, (match, num) => {
    const slot = parseInt(num, 10)
    const img = images[slot]
    if (!img) return match
    return `![${img.alt || `image ${slot}`}](${img.url})`
  })
}

export default function MarkdownRenderer({ content, images = {} }: Props) {
  const processed = processImagePlaceholders(content, images)

  return (
    <div className="prose-snippy">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          img: ({ src, alt }) => {
            const imgSrc = typeof src === "string" ? src : ""
            return (
              <figure className="my-8">
                <Image
                  src={imgSrc}
                  alt={alt || ""}
                  width={800}
                  height={450}
                  className="rounded-lg w-full h-auto"
                />
                {alt && (
                  <figcaption className="text-center text-sm text-gray-400 mt-2">
                    {alt}
                  </figcaption>
                )}
              </figure>
            )
          },
        }}
      >
        {processed}
      </ReactMarkdown>
    </div>
  )
}
