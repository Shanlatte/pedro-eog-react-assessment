import { deepOrange } from '@material-ui/core/colors';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    marginLeft: theme.spacing(3),
    '& > *': {
      margin: theme.spacing(1),
    },
    alignItems: 'center',
    justifyContent: 'start',
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
    width: theme.spacing(9),
    height: theme.spacing(9),
  },
}));

export default useStyles;
