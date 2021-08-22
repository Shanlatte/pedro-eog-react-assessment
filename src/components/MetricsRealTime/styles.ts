import { deepOrange } from '@material-ui/core/colors';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'start',
    marginTop: theme.spacing(2),
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    width: theme.spacing(24),
  },
}));

export default useStyles;
