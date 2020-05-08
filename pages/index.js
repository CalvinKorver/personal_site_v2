import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import Landing from '../src/Landing/Landing';
import Menu from '../src/Landing/Menu'

export default function Index() {
  return (
      <div>
        <Landing/>
        <Workday/>
        {/* <Copyright /> */}
        </div>
  );
}
