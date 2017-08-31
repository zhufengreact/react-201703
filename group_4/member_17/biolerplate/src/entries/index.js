import React, {Component} from 'react'
import ReactDOM from 'React-dom'

import {FilterableProductTable, PRODUCTS} from 'components/FilterableProductTable'

 ReactDOM.render(
  <FilterableProductTable products={PRODUCTS} />,
  document.getElementById('app')
)
