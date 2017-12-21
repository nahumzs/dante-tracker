import glamorous from 'glamorous';
import tokens from './tokens';

export const AppContainer = glamorous.div({
  width: `${tokens.space*70}px`,
  display: 'block',
  padding: `0`,
  border: '1px solid #DDD',
});
