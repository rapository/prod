// @mui
import { Container, Typography } from '@mui/material';
// hooks
import useSettings from '../hooks/useSettings';
// components
import Page from '../components/Page';
// Table stuff
import PropTypes from 'prop-types';
import { Stack, InputAdornment, TextField } from '@mui/material';
// ----------------------------------------------------------------------

export default function PageOne() {
  const { themeStretch } = useSettings();

  return (
    <Page title="Page One">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        {/* Table Toolbar */}

      </Container>
    </Page>
  );
}
