import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    float: 'right',
    margin: '2%',
    width: 600,
    '& > * + *': {
      marginTop: theme.spacing(3),
    },
  },
}));

export default useStyles;
