import style from './Options.module.css';

/**
 * @param {Object} props
 * @param {Object} props.stats
 * @param {number} props.total
 * @param {(value: string) => void} props.onUpdate
 * @param {() => void} props.onReset
 */
export default function Options({ stats, total, onUpdate, onReset }) {
  return (
    <ul className={style.list}>
      {Object.entries(stats).map(item => (
        <li key={item[0]} className={style.item}>
          <button
            className={style.button}
            onClick={() => onUpdate(item[0])}
            type="button"
          >
            {item[0]}
          </button>
        </li>
      ))}
      {total > 0 && (
        <button className={style.button} onClick={() => onReset()}>
          Reset
        </button>
      )}
    </ul>
  );
}
