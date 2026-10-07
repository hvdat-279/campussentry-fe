import { createBrowserRouter } from 'react-router'
import { AppLayout } from '@/app/layouts/AppLayout'
import { DashboardPage } from '@/pages/dashboard/DashboardPage'
import { EventsPage } from '@/pages/events/EventsPage'
import { MapPage } from '@/pages/map/MapPage'
import { EnvironmentPage } from '@/pages/environment/EnvironmentPage'
import { FacilitiesPage } from '@/pages/facilities/FacilitiesPage'
import { AlertsPage } from '@/pages/alerts/AlertsPage'
import { PeoplePage } from '@/pages/people/PeoplePage'
import { VehiclesPage } from '@/pages/vehicles/VehiclesPage'
import { View3DPage } from '@/pages/view3d/View3DPage'
import { NotFoundPage } from '@/pages/NotFoundPage'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: AppLayout,
    children: [
      { index: true, Component: DashboardPage },
      { path: 'dashboard', Component: DashboardPage },
      { path: 'map', Component: MapPage },
      { path: 'people', Component: PeoplePage },
      { path: 'vehicles', Component: VehiclesPage },
      { path: 'environment', Component: EnvironmentPage },
      { path: 'facilities', Component: FacilitiesPage },
      { path: 'alerts', Component: AlertsPage },
      { path: 'view3d', Component: View3DPage },
      { path: 'events', Component: EventsPage },
      { path: '*', Component: NotFoundPage },
    ],
  },
])
