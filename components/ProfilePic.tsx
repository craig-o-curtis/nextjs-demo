import Image from 'next/image';

interface ProfilePicProps {
  className?: string;
  height?: number;
  width?: number;
  priority?: boolean;
}

export default function ProfilePic({
  height = 144,
  width = 144,
  className,
  priority,
}: ProfilePicProps) {
  return (
    <Image
      priority={priority}
      src="/images/profile.jpg" // Route of the image file
      className={className}
      height={height} // Desired size with correct aspect ratio
      width={width} // Desired size with correct aspect ratio
      alt="Your Name here"
    />
  );
}
