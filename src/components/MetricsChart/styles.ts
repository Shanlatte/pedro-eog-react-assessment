import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
  tooltipPaper: {
    background: theme.palette.primary.main,
    borderRadius: 10,
  },
  title: {
    color: 'white',
  },
}));

export default useStyles;