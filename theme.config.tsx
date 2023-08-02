import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span style={{fontWeight: "bold", fontSize: "2rem"}}>musiur</span>,
  project: {
    link: 'https://github.com/musiur',
  },
  docsRepositoryBase: 'https://github.com/musiur/blog',
  footer: {
    text: '@musiur',
  },
}

export default config
