import type { FlowLayout } from '@/lib/native/awt/FlowLayout'
import type { StaticProp } from '../utils/types'
import type { Color, Font } from '../entry'
import type { Dimension } from '@/lib/native/awt/Dimension'
import type { EJFLineType } from '@/lib/jcf/gui/JFLineType'

interface JCFPanelLayoutPropsWithSize {
  dimension?: StaticProp<Dimension>
}

export interface JCFPanelLayoutProps extends JCFPanelLayoutPropsWithSize {
  layout?: StaticProp<FlowLayout | null>
  font?: StaticProp<Font>
  background?: StaticProp<Color>
  foreground?: StaticProp<Color>
  borderType?: StaticProp<EJFLineType>
  
  // TODO: Add more props
}

export const JCFPanelLayoutName = 'JCFPanelLayout'
