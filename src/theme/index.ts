import { createMuiTheme } from '@material-ui/core/styles';
import { colors } from '../constants';

/***************
 *  VARIABLES  *
 ***************/
const typography = {
  useNextVariants: true
};

const palette = {
  primary: {
    main: colors.PRIMARY_COLOR,
    dark: colors.DARK_COLOR,
    grey: colors.GREY_COLOR,
    light: colors.LIGHT_COLOR
  }
};

const theme = createMuiTheme({
  typography,
  palette
});

export default theme;