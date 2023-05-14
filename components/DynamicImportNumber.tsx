import { useState, useEffect } from 'react';

export default function DynamicImportNumber({ num }: { num: number }) {
  const [formattedNum, setFormattedNum] = useState(null as unknown);

  useEffect(() => {
    async function formatNumber(num: number) {
      const numbro = (await import('numbro')).default;
      const formatted = numbro(num).format({ thousandSeparated: true });
      return formatted;
    }

    formatNumber(num).then((result) => setFormattedNum(result));
  }, [num]);

  return <>{formattedNum}</>;
}
