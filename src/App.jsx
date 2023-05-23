import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import AppLayout from './layout/AppLayout'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import Favorites from './pages/Favorites'
import Contacts from './pages/Contacts'
import Policy from './pages/Policy'
import Error from './pages/Error'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="NEOFLEX-INVITE-APP" element={<AppLayout />}>
      <Route index element={<Shop />} />
      <Route path="cart" element={<Cart />} />
      <Route path="favorites" element={<Favorites />} />
      <Route path="contacts" element={<Contacts />} />
      <Route path="policy" element={<Policy />} />
      <Route path="*" element={<Error />} />
    </Route>,
  ),
)

export default function App() {
  return <RouterProvider router={router} />
}
