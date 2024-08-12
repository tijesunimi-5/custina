import SiderProduct from '@/component/SiderProduct'
import SiderResources from '@/component/SiderResources'
import SiderSolution from '@/component/SiderSolution'
import React from 'react'

const Sider = (props) => {
  const dashoff = props
  return (
    <div>
      <SiderProduct />
      <SiderSolution />
      <SiderResources />
    </div>
  )
}

export default Sider
