import glamorous from 'glamorous';
import tokens from './tokens';

export const AppContainer = glamorous.div({
  width: `${tokens.space*70}px`,
  display: 'block',
  padding: `${tokens.space*3}px`,
});

export const TimeToTrack = glamorous.span({
  fontSize: tokens.font.size.title,
  fontFamily: tokens.font.family.primary,
  color: '#000',
  fontWeight: '600',
  textAlign: 'left',
  padding: `${tokens.space}px`,
  borderRadius: `${tokens.space/2}px`,
});

export const ButtonLogin = glamorous.button({
  color: '#F60',
  fontFamily: `${tokens.font.family.primary}`,
  fontSize: `${tokens.font.size.default}`,
  fontWeight: '600',
  cursor: 'pointer',
  ':hover': {
    textDecoration: 'underline',
  },
  ':active': {
    color: '#000',
  },
});

export const Hr = glamorous.hr({
  width: '100%',
  display: 'block',
  height: `1px`,
  margin: `${tokens.space*2}px 0`,
  position: 'relative',
  ":after": {
    content: '\"\"',
    borderBottom: '1px dashed #DDD',
    width: '75%;',
    position: 'absolute',
    left: '50%',
    marginLeft: `-${75/2}%`,
  }
});

export const ButtonSubmit = glamorous.button({
  background: '#FFF',
  color: "#F60",
  border: "1px solid #F60",
  fontFamily: `${tokens.font.family.primary}`,
  fontSize: `${tokens.font.size.default}`,
  cursor: 'pointer',
  borderRadius: `${tokens.space}px`,
  padding: `${tokens.space}px`,
  ':hover': {
    background: "#F60",
    color: '#FFF',
  },
  ':active': {
    background: "#FFF",
    color: '#F60',
  },
  ':focus ': {
    outline: `${tokens.focus.outline}`,
  }
});
