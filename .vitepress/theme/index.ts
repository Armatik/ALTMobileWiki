import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import AMWContribution from './components/AMWContribution.vue'
import AMWDocsAsideMeta from './components/AMWDocsAsideMeta.vue'
import AMWHomeSponsors from './components/AMWHomeSponsors.vue'
import AMWVideo from './components/AMWVideo.vue'

import { 
  NolebaseEnhancedReadabilitiesMenu,
  NolebaseEnhancedReadabilitiesScreenMenu
} from '@nolebase/vitepress-plugin-enhanced-readabilities/client'
import type { Options } from '@nolebase/vitepress-plugin-enhanced-readabilities/client'
import { NolebaseEnhancedReadabilitiesPlugin } from '@nolebase/vitepress-plugin-enhanced-readabilities/client'
import '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css'
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'

import './styles/style.css' 
import './styles/theme.css'
import 'uno.css'
import '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css'
import "vitepress-markdown-timeline/dist/theme/index.css"
import { ERlocales } from '../data/lexicon'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'nav-bar-content-after': () => h(NolebaseEnhancedReadabilitiesMenu),
      'nav-screen-content-after': () => h(NolebaseEnhancedReadabilitiesScreenMenu),
      'aside-outline-after': () => h(AMWDocsAsideMeta),
      'home-features-after': () => h(AMWHomeSponsors)
    })
  },
  enhanceApp({ app }) {
    app.use(NolebaseEnhancedReadabilitiesPlugin, {locales: ERlocales} as Options)
    app.component('contribution', AMWContribution)
    app.component('Video', AMWVideo)
    enhanceAppWithTabs(app)
  }
} satisfies Theme
