import clsx from 'clsx';
import styles from './Text.module.css';

export default function Text({
  children,
  align = 'start',
  top,
  bottom,
  left,
  right,
  color,
  tag: Tag = 'p',
}) {
  const inlineStyles = {
    '--text-align': align,
    '--text-color': color,

    '--text-margin-top': top ? `${top}px` : undefined,
    '--text-margin-bottom': bottom ? `${bottom}px` : undefined,
    '--text-padding-left': left ? `${left}px` : undefined,
    '--text-padding-right': right ? `${right}px` : undefined,
  };

  return (
    <Tag style={inlineStyles} className={styles.text}>
      {children}
    </Tag>
  );
}
