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
          { text: 'I Miss Someone VT', link: '/repos/i-miss-someone-vt' },
          { text: 'VTuber Captcha', link: '/repos/vtuber-captcha' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/pinapelz' }
    ]
  }
})
