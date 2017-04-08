import React from 'react'
import Link from 'next/link'
import page from '../hoc/page.js'

import RaisedButton from 'material-ui/RaisedButton'

/* export default function index() {
 *   return (
 *     <div className='hello'>
 *       <p>Hello World</p>
 *       <ul>
 *         <li><Link href='/test' as='/test'><a>test</a></Link></li>
 *         <li><Link href='/login' as='/login'><a>login</a></Link></li>
 *       </ul>
 *       <style jsx>{`
 *       :global(:root) {
 *         --bgColor: blue;
 *         --color: white;
 *       }
 *       .hello {
 *         font: 15px Helvetica, Arial, sans-serif;
 *         background: var(--bgColor);
 *         color: var(--color);
 *         padding: 100px;
 *         text-align: center;
 *         transition: 100ms ease-in background;
 *       }
 *       .hello:hover {
 *         color: color(var(--color) blackness(+80%));
 *       }
 *     `}</style>
 *     </div>
 *   )
 * }*/

export default page(() => (
  <div>
    <RaisedButton label="Primary" primary={true} />
  </div>
))
