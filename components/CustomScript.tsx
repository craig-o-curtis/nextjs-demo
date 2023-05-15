import Script from 'next/script';

interface CustomScriptProps {
  src: string;
  strategy?: 'afterInteractive' | 'lazyOnload' | 'beforeInteractive' | 'worker'; // afterInteractive immediately after page becomes active, or lazyOnload during idle browser time
  onLoad?: () => void;
  onError?: (e: ErrorEvent) => void;
}

export default function CustomScript({
  src,
  strategy = 'lazyOnload',
  onLoad,
  onError,
}: CustomScriptProps) {
  return (
    <Script
      src={src}
      strategy={strategy}
      onLoad={() => onLoad?.()}
      onError={(e) => onError?.(e)}
    />
  );
}
