import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Felipe Russi | Portafolio de Desarrollador Full Stack',
  description:
    'Portafolio de Felipe Russi, desarrollador de software y frontend. Proyectos, experiencia, habilidades y contacto.',
  keywords: ['Felipe Russi', 'portafolio', 'desarrollador full stack', 'frontend', 'software developer', 'React', 'Next.js'],
  authors: [{ name: 'Felipe Russi' }],
  creator: 'Felipe Russi',
  publisher: 'Felipe Russi',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Felipe Russi | Portafolio de Desarrollador Full Stack',
    description:
      'Portafolio de Felipe Russi, desarrollador de software y frontend. Proyectos, experiencia, habilidades y contacto.',
    type: 'website',
    locale: 'es_CO',
  },
  twitter: {
    card: 'summary',
    title: 'Felipe Russi | Portafolio de Desarrollador Full Stack',
    description:
      'Portafolio de Felipe Russi, desarrollador de software y frontend. Proyectos, experiencia, habilidades y contacto.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
