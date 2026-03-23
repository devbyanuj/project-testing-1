export default function AuthLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div 
      className="min-h-screen flex items-center justify-center"
      style={{
        background: 'linear-gradient(135deg, #84b179 0%, #a2cb8b 50%, #c7eabe 100%)',
        backgroundAttachment: 'fixed'
      }}
    >
      <div 
        className="w-full max-w-md rounded-2xl shadow-2xl p-8 border backdrop-blur-md"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          borderColor: 'rgba(132, 177, 121, 0.2)',
          backdropFilter: 'blur(10px)'
        }}
      >
        {children}
      </div>
    </div>
  )
}