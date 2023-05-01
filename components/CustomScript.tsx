import Script from 'next/script';

interface CustomScriptProps {
  src: string;
  strategy: 'afterInteractive' | 'lazyOnload';
  onLoad?: () => void;
}

export default function CustomScript({
  src,
  strategy,
  onLoad,
}: CustomScriptProps) {
  return <Script src={src} strategy={strategy} onLoad={() => onLoad?.()} />;
}
