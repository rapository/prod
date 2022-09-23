import { memo } from 'react';
// @mui
import { styled } from '@mui/material/styles';
import { Container } from '@mui/material';
// config
import { HEADER } from '../../../config';


// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  transition: theme.transitions.create('top', {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  width: '100%',
  position: 'fixed',
  zIndex: theme.zIndex.appBar,
  padding: theme.spacing(1, 0),
  top: HEADER.DASHBOARD_DESKTOP_OFFSET_HEIGHT,
  backgroundColor: theme.palette.background.default,
}));

// ----------------------------------------------------------------------

function NavbarHorizontal() {
  return (
    <RootStyle>
      <Container maxWidth={false} />
    </RootStyle>
  );
}

export default memo(NavbarHorizontal);
