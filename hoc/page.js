import withMaterialUi from './withMaterialUi.js'

export const pageWithMaterialUi = withMaterialUi

import { compose } from 'redux'
/* import withAnalytics from './withAnalytics'*/
/* import withData from './withData'*/
import withDefaultLayout from './withDefaultLayout'
/* import withNavlessLayout from './withNavlessLayout'*/

export const pageWithDefaultLayout = compose(
  pageWithMaterialUi,
  /* withAnalytics,*/
  withDefaultLayout
)

/* export const pageWithNavlessLayout = compose(
 *   withData,
 *   withAnalytics,
 *   withNavlessLayout
 * )*/

export default pageWithDefaultLayout
