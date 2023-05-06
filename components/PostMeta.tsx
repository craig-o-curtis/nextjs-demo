import { HStack, Tag, TagLabel, useColorModeValue } from '@chakra-ui/react';

import DateTimeDisplay from './DateTimeDisplay';
// middle-end md processing

type PostMetaProps = {
  id: string;
  date: string;
};

export default function PostMeta({ id, date }: PostMetaProps) {
  const tagBg = useColorModeValue('purple.600', 'purple.300');

  return (
    <HStack>
      <Tag>
        <DateTimeDisplay dateString={date} />
      </Tag>
      <Tag>
        <TagLabel color={tagBg}>{id}</TagLabel>
      </Tag>
    </HStack>
  );
}
