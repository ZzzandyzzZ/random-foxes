import Image from 'next/image'

interface RandomFoxProps {
  srcImage: string
}

export const RandomFox = ({ srcImage }: RandomFoxProps): JSX.Element => {
  return (
    <div className="m-4">
      <Image alt='Fox' src={srcImage} width={300} height={300} className='mx-auto rounded bg-gray-300'/>
    </div>
  )
}
