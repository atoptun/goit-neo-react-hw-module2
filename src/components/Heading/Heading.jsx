import styles from './Heading.module.css';
import clsx from 'clsx';

export default function Heading({ title, top, bottom, tag: Tag = 'h2' }) {
  return (
    <Tag
      className={clsx(styles.title, {
        [styles.top]: top,
        [styles.bottom]: bottom,
      })}
    >
      {title}
    </Tag>
  );
}
