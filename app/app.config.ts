export default defineAppConfig({
  global: {
    picture: {
      dark: 'https://media.licdn.com/dms/image/v2/C5103AQGUjEJAw5H88A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1572930243131?e=1766620800&v=beta&t=qBbo5O_6WS_yZa0MGNQQ_IvAYfR5_bd9PYlGNAY6RyI',
      light: 'https://media.licdn.com/dms/image/v2/C5103AQGUjEJAw5H88A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1572930243131?e=1766620800&v=beta&t=qBbo5O_6WS_yZa0MGNQQ_IvAYfR5_bd9PYlGNAY6RyI',
      alt: 'My profile picture'
    },
    meetingLink: 'https://api.whatsapp.com/send/?phone=6281219863459&text=Hi%2C+Mas+Syamsul+&type=phone_number&app_absent=0',
    email: 'cybanjar@gmail.com',
    available: true
  },
  ui: {
    colors: {
      primary: 'green',
      neutral: 'neutral'
    },
    pageHero: {
      slots: {
        container: 'py-18 sm:py-24 lg:py-32',
        title: 'mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl',
        description: 'mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted'
      }
    }
  },
  footer: {
    credits: `Built with Nuxt UI • © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [{
      'icon': 'i-lucide-linkedin',
      'to': 'https://www.linkedin.com/in/syamsul-amin',
      'target': '_blank',
      'aria-label': 'Syamsul Amin on LinkedIn'
    }, {
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/cybanjar',
      'target': '_blank',
      'aria-label': 'Syamsul Amin on GitHub'
    }]
  }
})
