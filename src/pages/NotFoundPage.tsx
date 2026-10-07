import { Link } from 'react-router'

export function NotFoundPage() {
  return (
    <section>
      <h1 className="text-3xl font-semibold">Không tìm thấy trang</h1>
      <Link to="/dashboard" className="mt-4 inline-block text-blue-400 hover:text-blue-300">
        Quay về tổng quan
      </Link>
    </section>
  )
}
