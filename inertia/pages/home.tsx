import { Head } from '@inertiajs/react'
import "~/css/SomeName.scss"
import MyImg from '~/images/lrm2.webp'

export default function Home() {
  return (
    <>
      <Head title="Homepage" />


    <div className="splash">
      <div className="splash_logo">
        <img src={MyImg} alt="" />
      </div>
      <div className="splash_svg">
        <svg width="100%" height="100%">
          <rect width="100%" height="100%" />
        </svg>
      </div>
      <div className="splash_minimize">
        <svg width="100%" height="100%">
          <rect width="100%" height="100%" />
        </svg>
      </div>
    </div>
    <div className="text">
      <p>Duis quis</p>
      <p>nec sapien</p>
      <button>Moreц</button>
    </div>
    </>
  )
}