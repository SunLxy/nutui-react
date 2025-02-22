import React, { useState } from 'react'
import Taro from '@tarojs/taro'
import { Cell, Toast } from '@/packages/nutui.react.taro'
import Header from '@/sites/components/header'

const ToastDemo = () => {
  const [state, SetState] = useState({
    msg: 'toast',
    type: 'text',
    duration: 2,
    closeOnOverlayClick: false,
    title: '',
    bottom: '',
    icon: '',
    center: true,
  })
  const [showToast, SetShowToast] = useState(false)

  const openToast = (
    type: string,
    msg: string,
    duration?: number,
    icon?: string | React.ReactNode,
    closeOnOverlayClick?: boolean
  ) => {
    const changeState = Object.assign(state, {
      msg,
      type,
      duration,
      icon,
      closeOnOverlayClick,
    })
    SetState(changeState)
  }

  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <Toast
          msg={state.msg}
          visible={showToast}
          type={state.type}
          duration={state.duration}
          icon={state.icon}
          closeOnOverlayClick={state.closeOnOverlayClick}
          onClose={() => {
            SetShowToast(false)
          }}
        />
        <h2>基础用法</h2>
        <Cell
          title="Text文字提示"
          onClick={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
          ) => {
            openToast('text', '网络失败，请稍后再试~')
            SetShowToast(true)
          }}
        />

        <h2>成功提示</h2>
        <Cell
          title="Success 成功提示"
          onClick={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
          ) => {
            openToast('success', '成功提示')
            SetShowToast(true)
          }}
        />

        <h2>失败提示</h2>
        <Cell
          title="Error 失败提示"
          onClick={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
          ) => {
            openToast('fail', '失败提示')
            SetShowToast(true)
          }}
        />

        <h2>警告提示</h2>
        <Cell
          title=" Warning 警告提示"
          onClick={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
          ) => {
            openToast('warn', '警告提示')
            SetShowToast(true)
          }}
        />

        <h2>加载提示</h2>
        <Cell
          title=" Loading 加载提示"
          onClick={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
          ) => {
            openToast('loading', '加载中')
            SetShowToast(true)
          }}
        />

        <h2>展示时长设置</h2>
        <Cell
          title="设置展示时长为10秒提示"
          onClick={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
          ) => {
            openToast('text', '设置展示时长为10秒', 10, '', true)
            SetShowToast(true)
          }}
        />
        <Cell
          title="关闭正在显示的toast"
          onClick={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
          ) => {
            SetShowToast(false)
          }}
        />
        <h2>自定义icon图标</h2>
        <Cell
          title="传入icon组件中的'JD'图标"
          onClick={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
          ) => {
            openToast('text', '设置icon为JD', 2, 'JD')
            SetShowToast(true)
          }}
        />
      </div>
    </>
  )
}

export default ToastDemo
