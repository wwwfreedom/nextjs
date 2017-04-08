import injectTapEventPlugin from 'react-tap-event-plugin'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
// check back in the future to see if you can remove this in the new version

try {
  injectTapEventPlugin()
} catch (e) {
  // Dont do anything,
  // just prevent the eror
}
