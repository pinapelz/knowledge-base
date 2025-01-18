import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Knowledge Base",
  description: "Another Knowledge Base",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'Projects',
        items: [
          { text: 'Patchwork Archive API', link: '/repos/patchwork-archive-api' },
          { text: 'I Miss Someone VT (Legacy)', link: '/repos/i-miss-someone-vt' },
          { text: 'VTuber Captcha', link: '/repos/vtuber-captcha' },
          { text: 'JHolodex', link: '/repos/jholodex' },
        ]
      },
      {
        text: 'Personal',
        items: [
          {text: 'Fun Tools', link: '/personal/tools.md'},
          {text: 'arisu-ffxiv', link: '/personal/arisu.md'}

        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/pinapelz' }
    ]
  }
})
