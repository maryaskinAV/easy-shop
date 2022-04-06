import DefaultLayout from '../layouts/default'

export default function About ({ props }) {
  return (
    <div className="about-page">
      About page view.
    </div>
  )
}

About.getLayout = (page) => {
  return <DefaultLayout>{page}</DefaultLayout>
}
