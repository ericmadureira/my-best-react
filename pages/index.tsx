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
            <Link href='/users' passHref>
              <li>User list</li>
            </Link>
            <Link href='/form' passHref>
              <li>Form</li>
            </Link>
          </ul>
        </section>
      </section>
    </main>
  )
}

export default Home
