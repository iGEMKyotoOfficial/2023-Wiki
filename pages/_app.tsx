import '../styles/globals.css'
import Layout from 'components/layout'
import { MDXProvider } from '@mdx-js/react'
import { ReactNode } from 'react'

// Markdown style settings
function H1(props: { children?: ReactNode }) {
  return <h1 className="text-blue">{props.children}</h1>
}

const components = {
  h1: H1
}

export default function MyApp({ Component, pageProps }:
  { Component: any, pageProps: any }) {
  return (
    <MDXProvider components={components}>
      <Layout>
        <Component{...pageProps} />
      </Layout>
    </MDXProvider>
  )
}