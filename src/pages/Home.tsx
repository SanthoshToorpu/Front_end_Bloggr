import { Link } from 'react-router-dom';

export default function Component() {
  return (
    <>
      <header className="bg-gray-100 dark:bg-gray-900 py-4 shadow">
        <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
          <a className="flex items-center gap-2" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-gray-600 dark:text-gray-400"
            >
              <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
            </svg>
            <span className="text-xl font-bold text-gray-800 dark:text-gray-200">Bloggr</span>
          </a>
          <nav className="hidden md:flex items-center gap-6">
            <a className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">
              Features
            </a>
            <a className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">
              Pricing
            </a>
            <a className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">
              About
            </a>
            <a className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <Link to="/signin" className="hidden md:inline-flex h-9 items-center justify-center rounded-md bg-gray-800 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:bg-gray-200 dark:text-gray-800 dark:hover:bg-gray-300 dark:focus:ring-gray-600 dark:focus:ring-offset-gray-900">
              Sign In
            </Link>
            <Link to={"/signup"} className="inline-flex h-9 items-center justify-center rounded-md bg-gray-800 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:bg-gray-200 dark:text-gray-800 dark:hover:bg-gray-300 dark:focus:ring-gray-600 dark:focus:ring-offset-gray-900">
              Sign Up
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section className="bg-gray-100 dark:bg-gray-900 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-200">Discover, Read, and Share</h1>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Bloggr is a platform where you can find and share stories that matter to you. Explore a wide range of
                  topics, from technology and business to personal growth and creativity.
                </p>
                <div className="flex gap-4">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-800 px-6 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:bg-gray-200 dark:text-gray-800 dark:hover:bg-gray-300 dark:focus:ring-gray-600 dark:focus:ring-offset-gray-900"
                    to={'/signup'}
                  >
                    Sign Up
                  </Link>
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-transparent border border-gray-600 px-6 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:border-gray-400 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-offset-gray-900"
                    to={"/signin"}
                  >
                    Sign In
                  </Link>
                </div>
              </div>
              <div className="hidden md:block">
                <img
                  src="https://images.pexels.com/photos/5052875/pexels-photo-5052875.jpeg?auto=compress&cs=tinysrgb&w=600"
                  width="600"
                  height="400"
                  alt="Hero Image"
                  className="rounded-lg shadow-lg"
                  style={{ aspectRatio: '600/400', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white dark:bg-gray-800 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <img
                  src="https://img.freepik.com/free-photo/story-author-journalism-plot-writer-title-text-concept_53876-121543.jpg?w=1060&t=st=1714657215~exp=1714657815~hmac=95982489390fbc8a8623b5daabcbda16a353eaf2b75a742307cc8d2b785b2c43"
                  width="600"
                  height="400"
                  alt="Feature Image"
                  className="rounded-lg shadow-lg"
                  style={{ aspectRatio: '600/400', objectFit: 'cover' }}
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200">
                  Discover Inspiring Stories
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Explore a wide range of topics and discover stories that resonate with you. From personal growth to
                  technology, there's something for everyone on Bloggr.
                </p>
                <a
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-800 px-6 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:bg-gray-200 dark:text-gray-800 dark:hover:bg-gray-300 dark:focus:ring-gray-600 dark:focus:ring-offset-gray-900"
                  href="#"
                >
                  Explore Stories
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gray-100 dark:bg-gray-900 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200">Share Your Story</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Whether you're an aspiring writer, a seasoned professional, or someone with a unique perspective,
                  Bloggr provides a platform for you to share your voice with the world.
                </p>
                <div className="flex gap-4">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-800 px-6 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:bg-gray-200 dark:text-gray-800 dark:hover:bg-gray-300 dark:focus:ring-gray-600 dark:focus:ring-offset-gray-900"
                    to="/signup"
                  >
                    Sign Up
                  </Link>
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-transparent border border-gray-600 px-6 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:border-gray-400 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-offset-gray-900"
                    to={"/signin"}
                  >
                    Sign In
                  </Link>
                </div>
              </div>
              <div className="hidden md:block">
                <img
                  src="https://as1.ftcdn.net/v2/jpg/02/12/41/94/1000_F_212419414_4ywVvYZsr7jtAAyc5pHv26IDQNn89NY4.jpg"
                  width="600"
                  height="400"
                  alt="Feature Image"
                  className="rounded-lg shadow-lg"
                  style={{ aspectRatio: '600/400', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-800 dark:bg-gray-900 py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-gray-400"
              >
                <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
              </svg>
              <span className="text-lg font-bold text-gray-400">Bloggr</span>
            </div>
            <nav className="flex items-center gap-6 mt-4 md:mt-0">
              <a className="text-gray-400 hover:text-gray-300 dark:text-gray-500 dark:hover:text-gray-400" href="#">
                Features
              </a>
              <a className="text-gray-400 hover:text-gray-300 dark:text-gray-500 dark:hover:text-gray-400" href="#">
                Pricing
              </a>
              <a className="text-gray-400 hover:text-gray-300 dark:text-gray-500 dark:hover:text-gray-400" href="#">
                About
              </a>
              <a className="text-gray-400 hover:text-gray-300 dark:text-gray-500 dark:hover:text-gray-400" href="#">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}
