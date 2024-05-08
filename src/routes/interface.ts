import type { Component } from 'vue'
import type { IConfigJsonLoader } from './config/configs'

export interface IClassInfo {
  panel: string
  logic?: string
}

export interface IClassMap {
  [key: string]: IClassInfo
}

export interface IComponent {
  /**
   * panel class name
   */
  panel: string
  /**
   * logic class name
   */
  logic?: string
  /**
   * panel component, lazy load
   */
  component: () => Promise<Component>
  /**
   * page config loader
   */
  config: IConfigJsonLoader // promise result: IPanelConfig
}

export type IComponentWithoutConfig = Omit<IComponent, 'config'>

export interface IComponentMap {
  [className: string]: IComponent
}

export interface IComponentMapWithoutConfig {
  [className: string]: IComponentWithoutConfig
}
