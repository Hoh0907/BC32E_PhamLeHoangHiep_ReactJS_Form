import React, { Component } from 'react'
import DSSV from './DSSV'
import FormDk from './FormDk'

export default class QLSV extends Component {
  render() {
    return (
      <div className='container m-auto lg:py-4'>
        <FormDk/>
        <DSSV/>
      </div>
    )
  }
}
