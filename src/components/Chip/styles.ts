import { Theme } from '@material-ui/core/styles';

const cardStyles = (theme: Theme) => ({
  root: {
    background: theme.palette.secondary.main,
  },
  label: {
    color: theme.palette.primary.main,
  },
});

export default cardStyles;
