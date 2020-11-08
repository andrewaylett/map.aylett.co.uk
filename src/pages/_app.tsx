import App from 'next/app'
import 'normalize.css'
import './global.scss'
import React from 'react'
import { AppProps } from 'next/dist/pages/_app'

const WrappedApp: React.VoidFunctionComponent<AppProps> = (props, context) => <App {...props} context={context} />

// noinspection JSUnusedGlobalSymbols
export default WrappedApp
