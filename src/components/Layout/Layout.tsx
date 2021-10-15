import { Box } from '@material-ui/core'
import React from 'react'

import Content from './Content'
import Footer from './Footer'
import Header from './Header'

function Layout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <Box height="100vh" display="flex" flexDirection="column">
      {children}
    </Box>
  )
}

Layout.Header = Header
Layout.Content = Content
Layout.Footer = Footer

export default Layout
