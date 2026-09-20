export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm">
        <h1 className="text-4xl font-bold mb-4">Quantum Deploy</h1>
        <p className="text-lg mb-8">
          Quantum Cloud featuring state of the art computation capabilities for modern DevOps Engineering Design
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <div className="p-6 border border-gray-300 rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">Node.js/TypeScript</h2>
            <p>Built with modern TypeScript for type safety and developer experience</p>
          </div>
          <div className="p-6 border border-gray-300 rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">Vercel Analytics</h2>
            <p>Integrated with Vercel Web Analytics for real-time insights</p>
          </div>
        </div>
      </div>
    </main>
  )
}
