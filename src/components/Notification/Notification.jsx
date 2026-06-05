import Text from '../Text/Text';

/**
 * @param {Object} props
 * @param {React.ReactNode} props.children
 */
export default function Notification({ children }) {
  return <Text>{children}</Text>;
}
