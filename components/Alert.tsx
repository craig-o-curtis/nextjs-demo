import { Box } from '@chakra-ui/react';
import styles from './Alert.module.css';
import { clsx } from 'clsx';

interface AlertProps {
  children: React.ReactNode;
  type: 'success' | 'error';
}

export default function Alert({ type, children }: AlertProps) {
  return (
    <Box
      className={clsx({
        [styles.success]: type === 'success',
        [styles.error]: type === 'error',
      })}
    >
      {children}
    </Box>
  );
}
