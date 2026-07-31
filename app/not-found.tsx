import Link from "next/link"

export default function NotFound() {
  return (
    <html lang="es">
      <body>
        <main className="min-h-screen flex items-center justify-center bg-[#0f172a] text-white px-6">
          <div className="max-w-lg text-center space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-300">404</p>
            <h1 className="text-4xl md:text-5xl font-black">Página no encontrada</h1>
            <p className="text-white/70">
              La página que buscas no existe o fue movida.
            </p>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-3 font-semibold text-white transition-transform hover:scale-105"
            >
              Volver al inicio
            </Link>
          </div>
        </main>
      </body>
    </html>
  )
}