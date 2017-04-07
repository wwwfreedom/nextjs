import React from 'react'

export default function index() {
  return (
    <div className='hello'>
      <p>Hello World</p>
      <style jsx>{`
      :global(:root) {
        --bgColor: blue;
        --color: white;
      }
      .hello {
        font: 15px Helvetica, Arial, sans-serif;
        background: var(--bgColor);
        color: var(--color);
        padding: 100px;
        text-align: center;
        transition: 100ms ease-in background;
      }
      .hello:hover {
        color: color(var(--color) blackness(+80%));
      }
    `}</style>
    </div>
  )
}
