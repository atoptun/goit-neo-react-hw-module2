import Notification from '../Notification/Notification';
import style from './Feedback.module.css';

/**
 * @param {Object} props
 * @param {Object} props.stats
 * @param {number} props.total
 * @param {number} props.positive
 */
export default function Feedback({ stats, total, positive }) {
  return (
    <div className={style.wrapper}>
      {total ? (
        <ul className={style.list}>
          {Object.entries(stats).map(item => (
            <li key={item[0]} className={style.item}>
              {item[0]}: {item[1]}
            </li>
          ))}
          <li key="total" className={style.item}>
            total: {total}
          </li>
          <li key="positive" className={style.item}>
            positive: {Math.round((positive / total) * 100)}%
          </li>
        </ul>
      ) : (
        <Notification>No feedback yet</Notification>
      )}
    </div>
  );
}
