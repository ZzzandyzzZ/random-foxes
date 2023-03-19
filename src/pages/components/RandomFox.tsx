import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

interface RandomFoxProps {
  srcImage: string
}

export const RandomFox = ({ srcImage }: RandomFoxProps): JSX.Element => {
  const imgNode = useRef<HTMLImageElement>(null)
  const [src, setSrc] = useState('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=')
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSrc(srcImage)
        }
      })
    })
    if (imgNode.current != null) {
      observer.observe(imgNode.current)
    }
    return () => {
      observer.disconnect()
    }
  }, [srcImage])

  return (
    <div className="m-4">
      <Image ref={imgNode} alt='Fox' src={src} width={300} height={300} className='mx-auto rounded bg-gray-300'/>
    </div>
  )
}
