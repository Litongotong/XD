import type {
  DynamicProp,
  JCFCommonStaticProps,
  JCFItemProps,
  StaticProp,
} from '../utils/types'

export interface SMSFileDialogProps
  extends JCFItemProps,
    SMSFileDialogStaticProps {
  chooseMode?: DynamicProp<number>
  title?: DynamicProp<string>
  fileType?: DynamicProp<string>
  defaultPath?: DynamicProp<string>
}

export interface SMSFileDialogStaticProps extends JCFCommonStaticProps {
  selectFileActionCode?: StaticProp<string>
}
