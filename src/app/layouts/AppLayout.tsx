import { NavLink, Outlet } from 'react-router'

const navigation = [
  { label: '🗺 Bản đồ', to: '/map' },
  { label: '📊 Tổng quan', to: '/dashboard' },
  { label: '👥 Con người', to: '/people' },
  { label: '🚗 Phương tiện', to: '/vehicles' },
  { label: '🌡 Môi trường', to: '/environment' },
  { label: '🏢 Cơ sở vật chất', to: '/facilities' },
  { label: '🚨 Cảnh báo', to: '/alerts' },
  { label: '🧭 Sự kiện', to: '/events' },
  { label: '3D View', to: '/view3d' },
]

export function AppLayout() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-slate-800 bg-slate-900/80">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <NavLink to="/dashboard" className="text-lg font-semibold tracking-tight">
            CampusSentry
          </NavLink>
          <span className="text-sm text-slate-400">Smart campus monitoring · VKU</span>
        </div>
      </header>

      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl">
        <aside className="w-56 border-r border-slate-800 p-4">
          <nav aria-label="Điều hướng chính" className="space-y-1">
            {navigation.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `block rounded-lg px-3 py-2 text-sm transition ${
                    isActive
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </aside>

        <main className="min-w-0 flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}