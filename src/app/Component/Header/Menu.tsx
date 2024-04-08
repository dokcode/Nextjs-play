import Image from 'next/image'


export default function Menu() {
  return (
    <div className='flex justify-center'>
      <Image className='border rounded-full'
      src={'/profile.png'}
      width={300}
      height={400}
      quality={100}
      alt="Profile Picture"
      priority={true}
    />
    </div>
  )
}
