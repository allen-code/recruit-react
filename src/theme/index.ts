import { createMuiTheme } from '@material-ui/core/styles';
import { colors } from '../constants';

/***************
 *  VARIABLES  *
 ***************/
const typography: any = {
  useNextVariants: true
};

const palette: any = {
  primary: {
    main: colors.PRIMARY_COLOR,
    dark: colors.DARK_COLOR,
    grey: colors.GREY_COLOR,
    light: colors.LIGHT_COLOR
  }
};

const themeOptions = {
  typography,
  palette
};

const theme = createMuiTheme(themeOptions);

export default theme;