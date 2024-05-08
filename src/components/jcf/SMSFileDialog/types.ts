import type {
  DynamicProp,
  JCFCommonStaticProps,
  JCFItemProps,
  StaticProp,
} from '../utils/types'

export interface SMSFileDialogProps
  extends JCFItemProps,
    SMSFileDialogStaticProps {
  value?: DynamicProp<string>
}

export interface SMSFileDialogStaticProps extends JCFCommonStaticProps {
  filetype?: StaticProp<string>
  title?: StaticProp<string>
  buttonWidth?: StaticProp<string>
  data?: StaticProp<File>
}
