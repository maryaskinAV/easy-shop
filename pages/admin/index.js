import AdminLayout from '../../layouts/admin'
import { Button } from '../../components/ui'

const AdminIndexView = ({ props }) => {

  return (
    <div>
      <h2>Admin index view</h2>
      <Button clsColor={'secondary'}>sdkjfbksjdbf</Button>
    </div>
  )

}

export default AdminIndexView

AdminIndexView.getLayout = (page) => <AdminLayout>{page}</AdminLayout>
