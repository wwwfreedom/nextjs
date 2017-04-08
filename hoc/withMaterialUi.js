import '../util/tap_events.js'
import React, { Component, PropTypes } from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { loadGetInitialProps } from 'next/dist/lib/utils'

export default ComposedComponent =>
  class WithMaterialUi extends Component {
    static propTypes = {
      headers: PropTypes.object,
      userAgent: PropTypes.string
    }

    static async getInitialProps(ctx) {
      const { req } = ctx
      const headers = ctx.req ? ctx.req.headers : {}
      const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
      const subProps = await loadGetInitialProps(ComposedComponent, ctx)

      const props = {
        url: { query: ctx.query, pathname: ctx.pathname },
        ...subProps
      }

      /* if (!process.browser) {
       *   await getDataFromTree(
       *     <ApolloProvider client={apolloClient} store={reduxStore}>
       *       <MuiThemeProvider muiTheme={getMuiTheme({ userAgent: userAgent })}>
       *         <ComposedComponent {...props} />
       *       </MuiThemeProvider>
       *     </ApolloProvider>
       *   )
       * }*/

      return {
        /* initialState: {
         *   ...state,
         *   apollo: {
         *     data: apolloClient.getInitialState().data
         *   }
         * },*/
        headers,
        userAgent,
        ...props
      }
    }

    constructor(props) {
      super(props)
      /* this.apolloClient = initApollo(props.headers)*/
      /* this.reduxStore = initStore(this.apolloClient, props.initialState)*/
    }

    render() {
      return (
        <MuiThemeProvider
          muiTheme={getMuiTheme({ userAgent: this.props.userAgent })}
        >
          <ComposedComponent {...this.props} />
        </MuiThemeProvider>
      )
    }
  }
