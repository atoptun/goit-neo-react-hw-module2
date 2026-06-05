import styles from './Heading.module.css';
import clsx from 'clsx';

export default function Heading({
  children,
  top,
  bottom,
  color,
  align = 'center', // 'center', 'left', 'right'
  underline = false,
  tag: Tag = 'h2',
}) {
  const inlineStyles = {
    '--heading-top': top ? `${top}px` : undefined,
    '--heading-bottom': bottom ? `${bottom}px` : undefined,
    '--heading-align': align,
    '--heading-color': color,
  };

  return (
    <Tag
      style={inlineStyles}
      className={clsx(styles.title, {
        [styles.withUnderline]: underline,
      })}
    >
      {children}
    </Tag>
  );
}
