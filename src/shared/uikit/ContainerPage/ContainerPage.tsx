import { PropsWithChildren } from 'react';
import styles from './styles.module.scss';

export const ContainerPage: React.FC<PropsWithChildren<{ className?: string }>> = ({
  children,
  className,
}) => {
  return <section className={styles.container + ' ' + className}>{children}</section>;
};
