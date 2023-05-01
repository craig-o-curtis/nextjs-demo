import Image from 'next/image';

interface ProfilePicProps {
  height?: number;
  width?: number;
}

export default function ProfilePic({
  height = 144,
  width = 144,
}: ProfilePicProps) {
  return (
    <Image
      src="/images/profile.jpg" // Route of the image file
      height={height} // Desired size with correct aspect ratio
      width={width} // Desired size with correct aspect ratio
      alt="Your Name"
    />
  );
}
