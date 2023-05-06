import { Box, BoxProps } from '@chakra-ui/react';
import { parseISO, format } from 'date-fns';

interface DateTimeDisplayProps extends BoxProps {
  dateString: string;
  boxProps?: BoxProps;
}

export default function DateTimeDisplay({
  dateString,
  boxProps,
}: DateTimeDisplayProps) {
  const date = parseISO(dateString);
  return (
    <Box {...boxProps}>
      <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
    </Box>
  );
}
