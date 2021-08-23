import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: 'flex',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tooltipPaper: {
    background: theme.palette.primary.main,
    borderRadius: 10,
  },
  title: {
    color: 'white',
  },
  datetTitle: {
    color: 'white',
    marginBottom: theme.spacing(1),
  },
  loading: {
    marginLeft: theme.spacing(30),
  },
}));

export default useStyles;
