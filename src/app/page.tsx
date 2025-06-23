'use client'

export default function Home() {

  return (
    <div className="bg-white dark:bg-black">
      <div className="isolate relative px-6 lg:px-8 pt-14">
        <div
          aria-hidden="true"
          className="-top-40 sm:-top-80 -z-10 absolute inset-x-0 blur-3xl overflow-hidden transform-gpu"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="left-[calc(50%-11rem)] sm:left-[calc(50%-30rem)] relative bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 w-144.5 sm:w-288.75 aspect-1155/678 rotate-30 -translate-x-1/2"
          />
        </div>
        <div className="mx-auto py-32 sm:py-48 lg:py-56 max-w-2xl">
          <div className="hidden sm:flex sm:justify-center sm:mb-8">
            <div className="relative px-3 py-1 rounded-full ring-1 ring-gray-900/10 hover:ring-gray-900/20 text-gray-600 text-sm/6">
              Announcing our next round of funding.{' '}
              <a href="#" className="font-semibold text-indigo-600">
                <span aria-hidden="true" className="absolute inset-0" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="font-semibold text-gray-900 text-5xl sm:text-7xl text-balance tracking-tight">
              Data to enrich your online business
            </h1>
            <p className="mt-8 font-medium text-gray-500 text-lg sm:text-xl/8 text-pretty">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat
              commodo. Elit sunt amet fugiat veniam occaecat.
            </p>
            <div className="flex justify-center items-center gap-x-6 mt-10">
              <a
                href="#"
                className="bg-indigo-600 hover:bg-indigo-500 shadow-xs px-3.5 py-2.5 rounded-md focus-visible:outline-2 focus-visible:outline-indigo-600 focus-visible:outline-offset-2 font-semibold text-white text-sm"
              >
                Get started
              </a>
              <a href="#" className="font-semibold text-gray-900 text-sm/6">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="top-[calc(100%-13rem)] sm:top-[calc(100%-30rem)] -z-10 absolute inset-x-0 blur-3xl overflow-hidden transform-gpu"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="left-[calc(50%+3rem)] sm:left-[calc(50%+36rem)] relative bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 w-144.5 sm:w-288.75 aspect-1155/678 -translate-x-1/2"
          />
        </div>
      </div>
    </div>
  )
}
