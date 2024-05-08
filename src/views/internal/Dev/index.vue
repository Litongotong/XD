<template>
  <Layout>
    <div :style="layoutStyle">
      <div :style="headerStyle"><SMSCommonHeaderPanel /></div>

      <div :style="contentStyle">
        <component :is="map[componentName]"></component>
      </div>

      <div :style="footerStyle">
        <button @click="handleClick('YBMKKSF620')">YBMKKSF620</button
        ><button @click="handleClick('YBMKKSF621')">YBMKKSF621</button
        ><button @click="handleClick('YBMKKSF624')">YBMKKSF624</button>
        <button @click="handleClick('YBMKKSF625')">YBMKKSF625</button>
        <button @click="handleClick('YBMKKSF626')">YBMKKSF626</button>
        <button @click="handleClick('YBMKKSF627')">YBMKKSF627</button>


        <!-- <SMSCommonFooterPanel /> -->
      </div>
    </div>
  </Layout>
</template>

<script setup lang="ts">
import { type CSSProperties, ref } from 'vue'

import Layout from '../Layout/index.vue'
import SMSCommonHeaderPanel from '@/lib/sms/sol/sys/cjf/panel/SMSCommonHeaderPanel.vue'
import SMSCommonFooterPanel from '@/lib/sms/sol/sys/cjf/panel/SMSCommonFooterPanel.vue'
import YBMKKSF620 from '@/views/YBM/YBMKKSF620/panel/YBMKKSF620MPanel.vue'
import YBMKKSF621 from '@/views/YBM/YBMKKSF620/panel/YBMKKSF621SPanel.vue'
import YBMKKSF624 from '@/views/YBM/YBMKKSF620/panel/YBMKKSF624SPanel.vue'
import YBMKKSF625 from '@/views/YBM/YBMKKSF620/panel/YBMKKSF625SPanel.vue'
import YBMKKSF626 from '@/views/YBM/YBMKKSF620/panel/YBMKKSF626SPanel.vue'
import YBMKKSF627 from '@/views/YBM/YBMKKSF620/panel/YBMKKSF627SPanel.vue'


const map: any = {
  YBMKKSF620: YBMKKSF620,
  YBMKKSF621: YBMKKSF621,
  YBMKKSF624: YBMKKSF624,
  YBMKKSF625: YBMKKSF625,
  YBMKKSF626: YBMKKSF626,
  YBMKKSF627: YBMKKSF627,
}

const componentName = ref('')

const handleClick = (target: string) => {
  componentName.value = target
}

const layoutStyle: CSSProperties = {
  position: 'relative',
  display: 'grid',
  width: '100%',
  height: '100%',
  gridTemplateRows: 'auto 1fr auto',
  gridTemplateColumns: '1fr',
  backgroundColor: '#000',
  gap: '1.5px',
}

const commonStyle: CSSProperties = {
  position: 'relative',
  backgroundColor: '#fff',
}

const contentStyle: CSSProperties = {
  ...commonStyle,
  height: '534px',
  width: '100%',
  gridArea: '2 / 1 / 3 / 2',
}

const headerStyle: CSSProperties = {
  ...commonStyle,
  height: '80px',
  width: '100%',
  gridArea: '1 / 1 / 2 / 2',
}
const footerStyle: CSSProperties = {
  ...commonStyle,
  height: '64px',
  width: '100%',
  gridArea: '3 / 1 / 4 / 2',
}
</script>
