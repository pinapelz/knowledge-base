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
          { text: 'Patchwork Archive API', link: '/docs/patchwork-archive-api' },
          { text: 'I Miss Someone VT', link: '/docs/i-miss-someone-vt' },
          { text: 'VTuber Captcha', link: '/docs/vtuber-captcha' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/pinapelz' }
    ]
  }
})
