import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
  tooltipPaper: {
    background: theme.palette.primary.main,
    borderRadius: 10,
  },
  title: {
    color: 'white',
  },
  datetitle: {
    color: 'white',
    marginBottom: theme.spacing(1),
  },
  root: {
    display: 'flex',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loading: {
    marginLeft: theme.spacing(30),
  },
}));

export default useStyles;
