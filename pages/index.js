import DefaultLayout from '../layouts/default'

export default function Home () {
  return (
    <div className="home-page">
      Home page view.
    </div>
  )
}

Home.getLayout = function getLayout(page) {
  return <DefaultLayout>{page}</DefaultLayout>
}
