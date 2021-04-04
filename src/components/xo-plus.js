import React from 'react'

import './xo-plus.css'

export class XO_Plus extends React.Component {
  state = {
    grid: [[0,0,0],[0,0,0],[0,0,0]]
  }

  render() {
    const { grid } = this.state
    return (
      <div className='xo-plus-container'>
        {
          grid.map((col, index) => (
            <div key={index} className='each-col'>
              {
                col.map((item, i) => (
                  <div key={i} className='each-cell'></div>
                ))
              }
            </div>
          ))
        }
      </div>
    );
  }
}