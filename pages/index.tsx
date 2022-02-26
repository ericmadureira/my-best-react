import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <main>
      <section>
        <Link href='/' passHref>
          <h1>My best React!</h1>
        </Link>
        <section>
          <h2>Demos:</h2>
          <ul>
            <Link href='/demos/resource-list' passHref>
              <li>Resource List</li>
            </Link>
            <Link href='/demos/forms' passHref>
              <li>Forms</li>
            </Link>
          </ul>
        </section>
      </section>
    </main>
  )
}

export default Home
