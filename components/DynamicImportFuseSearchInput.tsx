import { Input } from '@chakra-ui/react';
import { ViewCountry } from '../shared/countries';

interface DynamicImportFuseSearchInputProps {
  countries: ViewCountry[];
  onChange: (updatedResults: ViewCountry[]) => void;
}

export default function DynamicImportFuseSearchInput({
  countries,
  onChange,
}: DynamicImportFuseSearchInputProps) {
  async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.currentTarget;
    // Dynamically load libraries
    const Fuse = (await import('fuse.js')).default;
    const _ = (await import('lodash')).default;
    const format = (await import('date-fns/format')).default;

    const fuse = new Fuse(countries, {
      keys: ['name'],
      threshold: 0.3,
    });

    const searchResult = fuse.search(value).map((result) => result.item);
    const updatedResults = searchResult.length ? searchResult : countries;

    onChange?.(updatedResults);

    // Fake analytics hit
    console.info({
      searchedAt: format(_.now(), 'yyyy-MM-dd HH:mm:ss'),
    });
  }

  return (
    <Input
      type="text"
      placeholder="Country search..."
      onChange={handleChange}
    />
  );
}
