import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Index() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <section
          className='pb-24'
          style={{
            background:
              'linear-gradient(131deg, #E8E5FE 26.82%, #FFEED8 96.89%)',
          }}
        >
          <nav className='relative px-10 md:px-12 py-7 lg:py-4'>
            <div className='flex items-center justify-between'>
              <a
                className='navbar-burger flex items-center order-1 lg:order-none gap-10'
                href='#'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width={34}
                  height={14}
                  viewBox='0 0 34 14'
                  fill='none'
                >
                  <g clipPath='url(#clip0_231_4713)'>
                    <rect width={34} height={3} rx='1.5' fill='#19191B' />
                    <rect
                      y={11}
                      width={34}
                      height={3}
                      rx='1.5'
                      fill='#19191B'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_231_4713'>
                      <rect width={34} height={14} fill='white' />
                    </clipPath>
                  </defs>
                </svg>
                <span className='hidden lg:block text-lg font-semibold'>
                  Menu
                </span>
              </a>
              <a
                className='lg:absolute lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-y-1/2 lg:-translate-x-1/2 pr-4 lg:pr-0'
                href='#'
              >
                <img
                  className='h-14'
                  src='images/logowithname2.svg'
                  alt=''
                />
              </a>
              <div className='hidden lg:flex items-center gap-5'>
                <a
                  className='inline-flex justify-center items-center text-center h-16 p-5 font-semibold tracking-tight text-lg focus:text-neutral-900 bg-transparent hover:bg-transparent focus:bg-transparent border border-transparent rounded-lg focus:ring-4 focus:ring-transparent transition duration-200'
                  href='#'
                >
                  Login
                </a>
                <a
                  className='inline-flex justify-center items-center text-center h-16 p-5 font-semibold tracking-tight text-xl hover:text-white focus:text-white bg-transparent hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200'
                  href='#'
                >
                  Sign up free
                </a>
              </div>
            </div>
          </nav>
          <div className='hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-xs z-50'>
            <div className='navbar-backdrop fixed inset-0 bg-black opacity-20' />
            <nav className='relative p-8 w-full h-full bg-white overflow-y-auto'>
              <div className='flex flex-col justify-between h-full'>
                <div className='flex items-center justify-between mb-16'>
                  <a className='pr-4' href='#'>
                    <img
                      className='h-10'
                      src='mirga-assets/images/logos/mirga-dark-dark.svg'
                      alt=''
                    />
                  </a>
                  <a className='navbar-close' href='#'>
                    <svg
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M6 18L18 6M6 6L18 18'
                        stroke='#252E4A'
                        strokeWidth={2}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </a>
                </div>
                <div className='flex flex-col items-center gap-2'>
                  <a
                    className='inline-flex justify-center items-center text-center w-full h-16 p-5 font-semibold tracking-tight text-lg focus:text-neutral-900 bg-transparent hover:bg-transparent focus:bg-transparent border border-transparent rounded-lg focus:ring-4 focus:ring-transparent transition duration-200'
                    href='#'
                  >
                    Login
                  </a>
                  <a
                    className='inline-flex justify-center items-center text-center w-full h-16 p-5 font-semibold tracking-tight text-xl hover:text-white focus:text-white bg-transparent hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200'
                    href='#'
                  >
                    Sign up free
                  </a>
                </div>
              </div>
            </nav>
          </div>
          <div className='container mx-auto px-4'>
            <div className='relative mt-32 mb-20 lg:mt-64 lg:mb-40'>
              <h1 className='font-heading tracking-tight text-7xl sm:text-8xl md:text-10xl xl:text-12xl 2xl:text-15xl text-center font-semibold'>
                Digital Arena
              </h1>
              <div className='hidden sm:block absolute -top-6 lg:-top-8 xl:-top-12 -left-2 sm:left-12 md:left-16 lg:left-32 xl:left-40 2xl:left-16 3xl:left-40'>
                <h6 className='font-heading md:text-xl lg:text-2xl font-semibold w-40 md:w-48 lg:w-56 tracking-tight'>
                  Empowering Brands in the
                </h6>
              </div>
              <div className='hidden sm:block absolute -bottom-12 lg:-bottom-16 xl:-bottom-18 right-2 md:right-8 lg:right-20 2xl:right-24 3xl:right-48'>
                <h6 className='font-heading md:text-xl lg:text-2xl font-semibold w-32 md:w-48 text-right tracking-tight'>
                  Don’t wait again — start now
                </h6>
              </div>
              <div className='absolute left-1/2 transform -translate-x-1/2 sm:transform-none sm:left-auto -top-16 sm:-top-4 sm:right-12 md:right-16 lg:right-48 xl:right-48 2xl:top-2 2xl:right-16 3xl:right-48'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width={48}
                  height={48}
                  viewBox='0 0 48 48'
                  fill='none'
                >
                  <path
                    d='M48 24C48 19.2532 46.5924 14.6131 43.9553 10.6663C41.3181 6.71953 37.5698 3.64339 33.1844 1.82689C28.799 0.010388 23.9734 -0.464892 19.3178 0.461153C14.6623 1.3872 10.3859 3.67298 7.02944 7.02944C3.67298 10.3859 1.3872 14.6623 0.461153 19.3178C-0.464892 23.9734 0.0103881 28.799 1.82689 33.1844C3.64339 37.5698 6.71953 41.3181 10.6663 43.9553C14.6131 46.5924 19.2532 48 24 48V24H48Z'
                    fill='#FF8C68'
                  />
                  <circle cx={24} cy={24} r={19} fill='#19191B' />
                  <line
                    x1='30.4727'
                    y1='13.1763'
                    x2='18.9422'
                    y2='24.7068'
                    stroke='white'
                    strokeWidth={2}
                  />
                  <line
                    x1={30}
                    y1={25}
                    x2={18}
                    y2={25}
                    stroke='white'
                    strokeWidth={2}
                  />
                  <line
                    x1='30.4727'
                    y1='24.7071'
                    x2='18.9422'
                    y2='36.2376'
                    stroke='white'
                    strokeWidth={2}
                  />
                </svg>
              </div>
            </div>
            <div className='flex flex-wrap justify-center -mx-4'>
              <div className='w-full sm:w-1/2 lg:w-3/12 p-4'>
                <div className='relative h-48 sm:h-full'>
                  <img
                    className='absolute inset-0 w-full h-full object-cover rounded-3xl'
                    src='mirga-assets/images/hero/background4.jpg'
                    alt=''
                  />
                  <div className='absolute left-3 right-3 bottom-5'>
                    <div className='flex items-center justify-between flex-wrap gap-4'>
                      <h6 className='font-heading text-white font-semibold w-40 tracking-tight'>
                        Empowering Brands in the DF.
                      </h6>
                      <img
                        className='object-cover w-20 h-20 rounded-full'
                        src='mirga-assets/images/hero/logo-dark.svg'
                        alt=''
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full sm:w-1/2 lg:w-1/2 xl:w-5/12 2xl:w-4/12 p-4'>
                <div className='bg-neutral-900 rounded-3xl py-8 px-12 max-w-md lg:max-w-none mx-auto flex flex-col items-center h-full'>
                  <h2 className='font-heding text-center text-white text-xl font-semibold mb-7 tracking-tight'>
                    Subscription level
                  </h2>
                  <div className='flex lg:items-center justify-between flex-wrap -m-2'>
                    <div className='w-full sm:w-1/2 p-2'>
                      <img
                        className='mb-3 w-14 h-14 object-cover rounded-full'
                        src='mirga-assets/images/hero/avatar1.png'
                        alt=''
                      />
                      <h2 className='text-white font-semibold mb-2 tracking-tight'>
                        Julia Hamsdale
                      </h2>
                      <a href='#'>
                        <div className='w-6 h-6 rounded-full bg-white border border-neutral-50 group-hover:border-neutral-200 transition duration-200 inline-flex items-center justify-center'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width={12}
                            height={12}
                            viewBox='0 0 12 12'
                            fill='none'
                          >
                            <path
                              fillRule='evenodd'
                              clipRule='evenodd'
                              d='M6 1L5.2825 1.6965L9.086 5.5H1V6.5H9.086L5.293 10.293L6 11L11 6L6 1Z'
                              fill='#19191B'
                            />
                          </svg>
                        </div>
                      </a>
                    </div>
                    <div className='w-full sm:w-1/2 p-2'>
                      <div className='flex flex-wrap sm:justify-end -m-2'>
                        <div className='w-auto p-2'>
                          <img
                            className='w-16 h-16 object-cover rounded-2xl'
                            src='mirga-assets/images/hero/battery.png'
                            alt=''
                          />
                        </div>
                        <div className='w-auto p-2'>
                          <img
                            className='w-16 h-16 object-cover rounded-2xl'
                            src='mirga-assets/images/hero/foto.png'
                            alt=''
                          />
                        </div>
                        <div className='w-auto p-2'>
                          <img
                            className='w-16 h-16 object-cover rounded-2xl'
                            src='mirga-assets/images/hero/play.png'
                            alt=''
                          />
                        </div>
                        <div className='w-auto p-2'>
                          <img
                            className='w-16 h-16 object-cover rounded-2xl'
                            src='mirga-assets/images/hero/social.png'
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full lg:w-3/12 p-4'>
                <div className='rounded-3xl relative overflow-hidden h-full py-14 px-10'>
                  <img
                    className='absolute top-0 left-0 object-cover w-full h-full'
                    src='mirga-assets/images/hero/background5.jpg'
                    alt=''
                  />
                  <div className='relative z-10'>
                    <div className='flex justify-center mb-2'>
                      <img
                        className='w-14 h-14 object-cover rounded-full'
                        src='mirga-assets/images/hero/icon.svg'
                        alt=''
                      />
                    </div>
                    <h5 className='font-heading text-center text-5xl sm:text-7xl font-semibold mb-2 tracking-tight'>
                      Pro plan
                    </h5>
                    <div className='flex justify-center'>
                      <a
                        className='inline-flex text-neutral-600 hover:text-neutral-800 transition duration-200 font-semibold tracking-tight'
                        href='#'
                      >
                        Start now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-wrap justify-center -mx-4'>
              <div className='w-full sm:w-1/2 lg:w-1/3 xl:flex-1 p-4'>
                <div className='h-full bg-white rounded-3xl pt-10 pb-8 px-12'>
                  <div className='flex flex-wrap -m-4 mb-5'>
                    <div className='w-full lg:w-full xl:w-1/2 p-4'>
                      <h6 className='font-heading text-4xl font-semibold tracking-tight'>
                        Shape tommorow.
                      </h6>
                    </div>
                    <div className='w-full lg:w-full xl:w-1/2 p-4'>
                      <img
                        className='mx-auto w-28 h-28 xl:mr-0 object-cover rounded-full'
                        src='mirga-assets/images/hero/circle3.svg'
                        alt=''
                      />
                    </div>
                  </div>
                  <a
                    className='inline-flex items-center gap-3 group mr-auto'
                    href='#'
                  >
                    <span className='text-neutral-600 font-semibold group-hover:text-neutral-800 transition duration-200 tracking-tight'>
                      Learn more now
                    </span>
                    <div>
                      <div className='w-6 h-6 rounded-full border border-neutral-50 group-hover:border-neutral-200 transition duration-200 flex items-center justify-center'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width={12}
                          height={12}
                          viewBox='0 0 12 12'
                          fill='none'
                        >
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M6 1L5.2825 1.6965L9.086 5.5H1V6.5H9.086L5.293 10.293L6 11L11 6L6 1Z'
                            fill='#19191B'
                          />
                        </svg>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className='w-full sm:w-1/2 lg:w-1/3 xl:max-w-sm p-4'>
                <div className='h-full lg:h-auto flex flex-col justify-center bg-white rounded-3xl py-12 px-9'>
                  <img
                    className='mx-auto w-16 h-16 object-cover mb-5 rounded-2xl'
                    src='mirga-assets/images/hero/checked.svg'
                    alt=''
                  />
                  <h6 className='font-heading text-center text-4xl font-semibold tracking-tight'>
                    Connecting notes
                  </h6>
                </div>
              </div>
              <div className='w-full lg:w-1/3 xl:flex-1 p-4'>
                <div className='h-full bg-white rounded-3xl pt-10 pb-8 px-12'>
                  <div className='flex flex-wrap -m-4 mb-5'>
                    <div className='w-full sm:w-1/2 lg:w-full xl:w-1/2 p-4'>
                      <h6 className='font-heading text-4xl font-semibold tracking-tight'>
                        Font starter pack
                      </h6>
                    </div>
                    <div className='w-full sm:w-1/2 lg:w-full xl:w-1/2 p-4'>
                      <img
                        className='mx-auto w-36 h-28 object-cover sm:mr-0 lg:mx-auto xl:mr-0'
                        src='mirga-assets/images/hero/draw1.svg'
                        alt=''
                      />
                    </div>
                  </div>
                  <a
                    className='inline-flex items-center gap-3 group mr-auto'
                    href='#'
                  >
                    <span className='text-neutral-600 font-semibold group-hover:text-neutral-800 transition duration-200 tracking-tight'>
                      Learn more now
                    </span>
                    <div>
                      <div className='w-6 h-6 rounded-full border border-neutral-50 group-hover:border-neutral-200 transition duration-200 flex items-center justify-center'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width={12}
                          height={12}
                          viewBox='0 0 12 12'
                          fill='none'
                        >
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M6 1L5.2825 1.6965L9.086 5.5H1V6.5H9.086L5.293 10.293L6 11L11 6L6 1Z'
                            fill='#19191B'
                          />
                        </svg>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='bg-neutral-50 py-12 md:py-24 relative'>
          <div className='container mx-auto px-4'>
            <p className='text-xl font-medium mb-14 text-center tracking-tight'>
              Trusted by top brands
            </p>
            <div className='flex items-center justify-center gap-28 absolute left-0 right-0'>
              <img
                className='h-9 mx-auto mix-blend-multiply'
                src='mirga-assets/images/logos/placeholder-logo1.svg'
                alt=''
              />
              <img
                className='h-9 mx-auto'
                src='mirga-assets/images/logos/placeholder-logo2.svg'
                alt=''
              />
              <img
                className='h-9 mx-auto'
                src='mirga-assets/images/logos/placeholder-logo3.svg'
                alt=''
              />
              <img
                className='h-9 mx-auto'
                src='mirga-assets/images/logos/placeholder-logo4.svg'
                alt=''
              />
              <img
                className='h-9 mx-auto mix-blend-multiply'
                src='mirga-assets/images/logos/placeholder-logo5.svg'
                alt=''
              />
              <img
                className='h-9 mx-auto'
                src='mirga-assets/images/logos/placeholder-logo6.svg'
                alt=''
              />
              <img
                className='h-9 mx-auto'
                src='mirga-assets/images/logos/placeholder-logo4.svg'
                alt=''
              />
              <img
                className='h-9 mx-auto mix-blend-multiply'
                src='mirga-assets/images/logos/placeholder-logo1.svg'
                alt=''
              />
              <img
                className='h-9 mx-auto'
                src='mirga-assets/images/logos/placeholder-logo2.svg'
                alt=''
              />
              <img
                className='h-9 mx-auto'
                src='mirga-assets/images/logos/placeholder-logo3.svg'
                alt=''
              />
            </div>
          </div>
        </section>
        <section className='py-12 md:py-24 bg-neutral-50'>
          <div className='container mx-auto px-4'>
            <div className='mb-12 md:mb-24 text-center max-w-6xl mx-auto'>
              <h1 className='mb-16 font-semibold text-6xl sm:text-9xl xl:text-11xl font-heading'>
                <span>Join the community, and change</span>
                <span className='bg-orange-50 rounded-lg px-4 mt-1 inline-block'>
                  the future.
                </span>
              </h1>
              <p className='font-semibold text-2xl text-neutral-600 tracking-tight'>
                Your journey to digital excellence starts here.
              </p>
            </div>
            <div className='mb-20'>
              <div className='flex flex-wrap -m-2.5'>
                <div className='w-full md:w-1/2 xl:w-8/12 p-2.5'>
                  <div className='h-full p-10 bg-white rounded-5xl'>
                    <div className='mb-24'>
                      <h4 className='mb-2 text-5xl font-medium tracking-tight font-heading'>
                        Digital app
                      </h4>
                      <p className='font-medium text-lg text-neutral-600 tracking-tight max-w-xl'>
                        Can create, connect, verify, and search across all you
                        knowledge platforms is one centralized, secure place -
                        accelarating productivity.
                      </p>
                    </div>
                    <div className='flex flex-wrap justify-between items-end -m-8'>
                      <div className='w-auto p-8'>
                        <a
                          className='inline-flex justify-center items-center text-center h-16 p-5 font-semibold tracking-tight text-xl hover:text-white focus:text-white bg-white hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200'
                          href='#'
                        >
                          More
                        </a>
                      </div>
                      <div className='w-auto p-8'>
                        <img
                          className='h- object-cover'
                          src='mirga-assets/images/services/draw.png'
                          alt=''
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='w-full md:w-1/2 xl:w-4/12 p-2.5'>
                  <div className='h-full p-10 bg-white rounded-5xl'>
                    <div className='flex flex-col justify-between h-full'>
                      <div className='w-full'>
                        <h4 className='mb-2 text-4xl font-medium tracking-tight font-heading'>
                          Content marketing
                        </h4>
                        <p className='mb-4 font-medium text-lg text-neutral-600 tracking-tight max-w-xs'>
                          Our company provides content strategies and creates
                          valuable...
                        </p>
                        <img
                          className='mx-auto mb-8 h-64 object-cover'
                          src='mirga-assets/images/services/draw2.png'
                          alt=''
                        />
                      </div>
                      <div className='w-full'>
                        <a
                          className='inline-flex justify-center items-center text-center h-16 p-5 font-semibold tracking-tight text-xl hover:text-white focus:text-white bg-white hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200'
                          href='#'
                        >
                          More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='w-full md:w-1/2 xl:w-1/3 p-2.5'>
                  <div className='h-full p-10 bg-white rounded-5xl'>
                    <div className='flex flex-col justify-between h-full'>
                      <div className='w-full'>
                        <h4 className='mb-2 text-4xl font-medium tracking-tight font-heading'>
                          Email marketing
                        </h4>
                        <p className='mb-12 font-medium text-lg text-neutral-600 tracking-tight max-w-xs'>
                          We design personalized email marketing campaigns that
                          help build lasting customer...
                        </p>
                        <img
                          className='mb-8 h-44 mx-auto object-cover'
                          src='mirga-assets/images/services/draw3.png'
                          alt=''
                        />
                      </div>
                      <div className='w-full'>
                        <a
                          className='inline-flex justify-center items-center text-center h-16 p-5 font-semibold tracking-tight text-xl hover:text-white focus:text-white bg-white hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200'
                          href='#'
                        >
                          More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='w-full md:w-1/2 xl:w-1/3 p-2.5'>
                  <div className='h-full p-10 bg-white rounded-5xl'>
                    <div className='flex flex-col justify-between h-full'>
                      <div className='w-full'>
                        <h4 className='mb-2 text-4xl font-medium tracking-tight font-heading'>
                          User-flow
                        </h4>
                        <p className='mb-12 font-medium text-lg text-neutral-600 tracking-tight max-w-xs'>
                          Our data analysis service provides accurate insights
                          into the results of your marketing efforts.
                        </p>
                        <img
                          className='mb-8 h-24 object-cover mx-auto'
                          src='mirga-assets/images/services/draw4.png'
                          alt=''
                        />
                      </div>
                      <div className='w-full'>
                        <a
                          className='inline-flex justify-center items-center text-center h-16 p-5 font-semibold tracking-tight text-xl hover:text-white focus:text-white bg-white hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200'
                          href='#'
                        >
                          More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='w-full md:w-full xl:w-1/3 p-2.5'>
                  <div className='h-full p-10 bg-white rounded-5xl'>
                    <div className='flex flex-col justify-between h-full'>
                      <div className='w-full'>
                        <h4 className='mb-2 text-4xl font-medium tracking-tight font-heading'>
                          Email marketing
                        </h4>
                        <p className='mb-12 font-medium text-lg text-neutral-600 tracking-tight max-w-xs'>
                          We design personalized email marketing campaigns that
                          help build lasting customer...
                        </p>
                        <img
                          className='mb-8 h-36 object-cover mx-auto'
                          src='mirga-assets/images/services/draw5.png'
                          alt=''
                        />
                      </div>
                      <div className='w-full'>
                        <a
                          className='inline-flex justify-center items-center text-center h-16 p-5 font-semibold tracking-tight text-xl hover:text-white focus:text-white bg-white hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200'
                          href='#'
                        >
                          More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-wrap justify-center'>
              <div className='w-auto'>
                <a
                  className='inline-flex justify-center items-center text-center h-20 p-5 font-semibold tracking-tight text-2xl text-white bg-neutral-900 hover:bg-neutral-800 focus:bg-neutral-800 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200'
                  href='#'
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className='py-12 md:py-24 xl:pb-64 bg-neutral-900'>
          <div className='container mx-auto px-4'>
            <div className='mb-12 md:mb-20 max-w-5xl'>
              <h1 className='relative text-6xl sm:text-9xl xl:text-11xl text-white font-semibold font-heading'>
                <span className='mr-3'>Innovate, educate, and</span>
                <span className='relative inline-block'>
                  <span className='relative z-10'>Dominate Online</span>
                  <span className='absolute -bottom-2 left-0 h-2.5 w-full bg-green-100 rounded-full' />
                </span>
              </h1>
            </div>
            <h3 className='mb-8 text-4xl text-white font-semibold tracking-tight font-heading'>
              The most important news
            </h3>
            <div className='flex flex-wrap -m-3'>
              <div className='w-full md:w-1/2 xl:w-1/3 p-3'>
                <div className='flex flex-col h-full justify-center p-10 bg-white rounded-5xl'>
                  <div className='flex flex-wrap items-center -m-3 mb-5'>
                    <div className='w-auto p-3'>
                      <div className='flex items-center justify-center w-16 h-16 bg-neutral-900 rounded-full'>
                        <img
                          src='mirga-assets/images/features/sticker.svg'
                          alt=''
                        />
                      </div>
                    </div>
                    <div className='flex-1 p-3'>
                      <h4 className='text-4xl font-medium tracking-tight font-heading max-w-xs'>
                        Customized Campaigns
                      </h4>
                    </div>
                  </div>
                  <p className='text-neutral-600 font-medium tracking-tight max-w-sm'>
                    Tailor your marketing approach with our customizable
                    campaigns. We work closely with you to understand your
                    unique goals and audience, designing personalized strategies
                    that ensure your message reaches the right people at the
                    right time.
                  </p>
                </div>
              </div>
              <div className='relative xl:top-20 w-full md:w-1/2 xl:w-1/3 p-3'>
                <div className='mb-6 p-10 bg-white rounded-5xl'>
                  <div className='flex flex-wrap items-center -m-3 mb-5'>
                    <div className='w-auto p-3'>
                      <div className='flex items-center justify-center w-16 h-16 bg-neutral-900 rounded-full'>
                        <img
                          src='mirga-assets/images/features/sticker.svg'
                          alt=''
                        />
                      </div>
                    </div>
                    <div className='flex-1 p-3'>
                      <h4 className='text-4xl font-medium tracking-tight font-heading max-w-xs'>
                        Data-Driven Insights
                      </h4>
                    </div>
                  </div>
                  <p className='text-neutral-600 font-medium tracking-tight max-w-sm'>
                    Unlock the power of data with our advanced analytics tools.
                    Gain actionable insights into customer behavior, market
                    trends, and campaign performance
                  </p>
                </div>
                <div className='p-10 bg-white rounded-5xl'>
                  <div className='flex flex-wrap items-center -m-3 mb-5'>
                    <div className='w-auto p-3'>
                      <div className='flex items-center justify-center w-16 h-16 bg-neutral-900 rounded-full'>
                        <img
                          src='mirga-assets/images/features/sticker.svg'
                          alt=''
                        />
                      </div>
                    </div>
                    <div className='flex-1 p-3'>
                      <h4 className='text-4xl font-medium tracking-tight font-heading max-w-xs'>
                        Customer Support
                      </h4>
                    </div>
                  </div>
                  <p className='text-neutral-600 font-medium tracking-tight max-w-sm'>
                    We're here for you around the clock. Our dedicated support
                    team is ready to assist with any questions or concerns you
                    may have.
                  </p>
                </div>
              </div>
              <div className='relative xl:top-40 w-full xl:w-1/3 p-3'>
                <div className='flex flex-col h-full justify-center p-10 bg-white rounded-5xl'>
                  <div className='flex flex-wrap items-center -m-3 mb-5'>
                    <div className='w-auto p-3'>
                      <div className='flex items-center justify-center w-16 h-16 bg-neutral-900 rounded-full'>
                        <img
                          src='mirga-assets/images/features/sticker.svg'
                          alt=''
                        />
                      </div>
                    </div>
                    <div className='flex-1 p-3'>
                      <h4 className='text-4xl font-medium tracking-tight font-heading max-w-xs'>
                        A/B Testing and Optimization
                      </h4>
                    </div>
                  </div>
                  <p className='text-neutral-600 font-medium tracking-tight max-w-sm'>
                    Maximize the effectiveness of your digital campaigns through
                    A/B testing and continuous optimization. We fine-tune your
                    content, ads, and user experience to increase engagement,
                    conversions, and overall success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='py-12 md:py-24 bg-neutral-50'>
          <div className='container mx-auto px-4'>
            <div className='pb-14 mb-2 border-b border-neutral-900'>
              <h1 className='text-6xl sm:text-9xl xl:text-11xl font-semibold font-heading'>
                Blog
              </h1>
            </div>
            <p className='text-4xl font-semibold mb-10 tracking-tight'>
              The most important news
            </p>
            <div className='flex flex-wrap -m-4 mb-8'>
              <div className='w-full md:w-1/2 p-3'>
                <div className='bg-white rounded-4xl px-6 md:px-12 py-12 h-full'>
                  <div className='flex flex-wrap items-center -m-4 mb-8 lg:mb-18'>
                    <div className='w-full lg:w-2/3 p-4'>
                      <span className='block text-neutral-600 text-xl font-semibold mb-6 tracking-tight'>
                        Big news
                      </span>
                      <a
                        className='block text-neutral-800 text-3xl font-medium hover:underline mb-3 tracking-tight max-w-xs'
                        href='#'
                      >
                        The Rise of Video Marketing: Engage Your Audience Like
                        Never Before!
                      </a>
                      <p className='text-neutral-600 text-lg font-medium mb-11 max-w-xs tracking-tight'>
                        Video marketing is taking the digital world by storm.
                      </p>
                      <div className='flex flex-wrap gap-6'>
                        <div className='flex items-center gap-2'>
                          <div className='w-3 h-3 bg-green-100' />
                          <p className='text-neutral-600 font-medium tracking-tight'>
                            design
                          </p>
                        </div>
                        <div className='flex items-center gap-2'>
                          <div className='w-3 h-3 bg-orange-200' />
                          <p className='text-neutral-600 font-medium tracking-tight'>
                            vid marketing
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='w-full lg:w-1/3 p-4'>
                      <img
                        className='mx-auto h-64 object-cover rounded-3xl'
                        src='mirga-assets/images/blog/blog-picture1.png'
                        alt=''
                      />
                    </div>
                  </div>
                  <div className='flex items-center justify-between flex-wrap gap-4'>
                    <p className='text-neutral-600 text-xl font-semibold tracking-tight'>
                      Thu 12 Oct, 4 AM
                    </p>
                    <a
                      className='inline-flex justify-center items-center text-center h-16 p-5 font-semibold tracking-tight text-xl hover:text-white focus:text-white bg-white hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200'
                      href='#'
                    >
                      Read more
                    </a>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-1/2 p-3'>
                <div className='bg-white rounded-4xl px-6 md:px-12 py-12 h-full'>
                  <div className='flex flex-wrap items-center -m-2 mb-8 lg:mb-18'>
                    <div className='w-full lg:w-2/3 p-4'>
                      <span className='block text-neutral-600 text-xl font-semibold mb-6 tracking-tight'>
                        Main room
                      </span>
                      <a
                        className='block text-neutral-800 text-3xl font-medium hover:underline mb-3 tracking-tight max-w-xs'
                        href='#'
                      >
                        Email Marketing Done Right: Crafting Campaigns That
                        Convert
                      </a>
                      <p className='text-neutral-600 text-lg font-medium mb-11 max-w-xs tracking-tight'>
                        Email marketing remains a powerful tool for conversions.
                      </p>
                      <div className='flex flex-wrap gap-6'>
                        <div className='flex items-center gap-2'>
                          <div className='w-3 h-3 bg-purple-50' />
                          <p className='text-neutral-600 font-medium tracking-tight'>
                            campaigns
                          </p>
                        </div>
                        <div className='flex items-center gap-2'>
                          <div className='w-3 h-3 bg-orange-200' />
                          <p className='text-neutral-600 font-medium tracking-tight'>
                            vid marketing
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='w-full lg:w-1/3 p-4'>
                      <img
                        className='mx-auto h-64 object-cover rounded-3xl'
                        src='mirga-assets/images/blog/blog-picture2.png'
                        alt=''
                      />
                    </div>
                  </div>
                  <div className='flex items-center justify-between flex-wrap gap-4'>
                    <p className='text-neutral-600 text-xl font-semibold tracking-tight'>
                      Thu 11 Oct, 8 AM
                    </p>
                    <a
                      className='inline-flex justify-center items-center text-center h-16 p-5 font-semibold tracking-tight text-xl hover:text-white focus:text-white bg-white hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200'
                      href='#'
                    >
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <a
              className='inline-flex justify-center items-center text-center w-full h-16 p-5 font-semibold tracking-tight text-xl hover:text-white focus:text-white bg-transparent hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200'
              href='#'
            >
              More articles
            </a>
          </div>
        </section>
        <section className='bg-neutral-50 p-5 sm:p-10'>
          <div className='py-24 md:py-52 rounded-4xl bg-white px-4'>
            <div className='flex flex-col justify-center items-center h-full'>
              <h1 className='mb-16 text-center text-6xl sm:text-9xl xl:text-11xl font-semibold max-w-lg xl:max-w-5xl mx-auto font-heading'>
                <span className='mr-3'>Turn inspiration</span>
                <span className='relative inline-block'>
                  <span className='relative z-10'>into reality</span>
                  <span className='absolute -bottom-2 left-0 h-2.5 w-full bg-green-100 rounded-full' />
                </span>
              </h1>
              <p className='text-center text-neutral-600 text-2xl font-semibold mb-16 tracking-tight'>
                Your journey to digital excellence starts here.
              </p>
              <a
                className='inline-flex justify-center items-center text-center h-20 p-5 font-semibold tracking-tight text-2xl text-white bg-neutral-900 hover:bg-neutral-800 focus:bg-neutral-800 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200'
                href='#'
              >
                Start using Mirga
              </a>
            </div>
          </div>
        </section>
        <section className='overflow-hidden'>
          <div className='bg-neutral-50'>
            <div className='py-3 border-b border-neutral-100'>
              <div className='container mx-auto px-4'>
                <div className='flex items-center justify-end gap-6 sm:gap-18 flex-wrap'>
                  <a
                    className='font-medium hover:text-opacity-80 tracking-tight transition duration-200'
                    href='#'
                  >
                    Contact
                  </a>
                  <div className='flex items-center gap-6 flex-wrap'>
                    <a
                      className='font-medium hover:text-opacity-80 tracking-tight transition duration-200'
                      href='#'
                    >
                      Back to top
                    </a>
                    <a
                      className='relative text-white hover:text-opacity-80 border border-neutral-50 rounded-full transition duration-200'
                      href='#'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width={40}
                        height={40}
                        viewBox='0 0 40 40'
                        fill='none'
                      >
                        <circle
                          cx={20}
                          cy={20}
                          r='19.5'
                          transform='rotate(90 20 20)'
                          fill='currentColor'
                          stroke='#E5E5E7'
                        />
                      </svg>
                      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width={20}
                          height={20}
                          viewBox='0 0 20 20'
                          fill='none'
                        >
                          <path
                            d='M6.41225 12.1235L9.60066 8.93506L12.7891 12.1235'
                            stroke='#19191B'
                            strokeMiterlimit={10}
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='pt-12 pb-20 md:pb-40'>
              <div className='container mx-auto px-4'>
                <div className='pb-9 border-b border-neutral-100 mb-10'>
                  <div className='flex items-center justify-between flex-wrap gap-4'>
                    <a href='#'>
                      <img
                        src='images/logowithname2.svg'
                        alt=''
                        className='h-14'
                      />
                    </a>
                    <div className='flex flex-wrap gap-3'>
                      <a
                        className='relative text-white hover:text-opacity-80 transition duration-200'
                        href='#'
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width={46}
                          height={46}
                          viewBox='0 0 46 46'
                          fill='none'
                        >
                          <circle
                            cx={23}
                            cy={23}
                            r={23}
                            transform='rotate(-180 23 23)'
                            fill='currentColor'
                          />
                        </svg>
                        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width={20}
                            height={20}
                            viewBox='0 0 20 20'
                            fill='none'
                          >
                            <path
                              d='M8.59391 18.8946V12.6047H6.30815V10.002H8.59391V8.01827C8.59391 5.76115 9.93802 4.51549 11.9934 4.51549C12.9781 4.51549 14.0083 4.69145 14.0083 4.69145V6.9068H12.8731C11.7542 6.9068 11.4062 7.60179 11.4062 8.31323V10.002H13.902L13.5033 12.6047H11.4062V18.8946C15.7088 18.2194 19 14.4951 19 10.0019C19 5.03029 14.9706 1 10 1C5.02944 1 1 5.03029 1 10.0019C1 14.4951 4.29123 18.2194 8.59391 18.8946Z'
                              fill='#19191B'
                            />
                          </svg>
                        </div>
                      </a>
                      <a
                        className='relative text-white hover:text-opacity-80 transition duration-200'
                        href='#'
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width={46}
                          height={46}
                          viewBox='0 0 46 46'
                          fill='none'
                        >
                          <circle
                            cx={23}
                            cy={23}
                            r={23}
                            transform='rotate(-180 23 23)'
                            fill='currentColor'
                          />
                        </svg>
                        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width={20}
                            height={20}
                            viewBox='0 0 20 20'
                            fill='none'
                          >
                            <g clipPath='url(#clip0_231_2346)'>
                              <path
                                fillRule='evenodd'
                                clipRule='evenodd'
                                d='M19.0827 5.83317C19.0827 3.11983 16.8793 0.916504 14.166 0.916504H5.83268C3.11935 0.916504 0.916016 3.11983 0.916016 5.83317V14.1665C0.916016 16.8798 3.11935 19.0832 5.83268 19.0832H14.166C16.8793 19.0832 19.0827 16.8798 19.0827 14.1665V5.83317ZM17.5827 5.83317V14.1665C17.5827 16.0523 16.0518 17.5832 14.166 17.5832H5.83268C3.94685 17.5832 2.41602 16.0523 2.41602 14.1665V5.83317C2.41602 3.94733 3.94685 2.41649 5.83268 2.41649H14.166C16.0518 2.41649 17.5827 3.94733 17.5827 5.83317ZM14.0743 9.36484C13.8118 7.59067 12.4085 6.18733 10.6343 5.92483C10.436 5.89483 10.236 5.88067 10.0352 5.88067C7.79518 5.88067 5.95185 7.724 5.95185 9.964C5.95185 12.204 7.79518 14.0473 10.0352 14.0473C12.2752 14.0473 14.1185 12.204 14.1185 9.964C14.1185 9.76317 14.1043 9.56317 14.0743 9.36484ZM12.591 9.58483C12.6093 9.71066 12.6185 9.83733 12.6185 9.964C12.6185 11.3807 11.4527 12.5473 10.0352 12.5473C8.61852 12.5473 7.45185 11.3807 7.45185 9.964C7.45185 8.5465 8.61852 7.38066 10.0352 7.38066C10.1618 7.38066 10.2885 7.38983 10.4144 7.40816C11.5368 7.57483 12.4243 8.46233 12.591 9.58483ZM14.5827 4.6665C14.9968 4.6665 15.3327 5.00233 15.3327 5.4165C15.3327 5.83067 14.9968 6.16649 14.5827 6.16649C14.1685 6.16649 13.8327 5.83067 13.8327 5.4165C13.8327 5.00233 14.1685 4.6665 14.5827 4.6665Z'
                                fill='#19191B'
                              />
                            </g>
                            <defs>
                              <clipPath id='clip0_231_2346'>
                                <rect width={20} height={20} fill='white' />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                      </a>
                      <a
                        className='relative text-white hover:text-opacity-80 transition duration-200'
                        href='#'
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width={46}
                          height={46}
                          viewBox='0 0 46 46'
                          fill='none'
                        >
                          <circle
                            cx={23}
                            cy={23}
                            r={23}
                            transform='rotate(-180 23 23)'
                            fill='currentColor'
                          />
                        </svg>
                        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width={20}
                            height={20}
                            viewBox='0 0 20 20'
                            fill='none'
                          >
                            <path
                              d='M11.8216 8.98736L17.9648 2H16.5092L11.1727 8.06576L6.91356 2H2L8.44212 11.1733L2 18.5H3.45554L9.08757 12.0929L13.5864 18.5H18.5L11.8216 8.98736ZM9.82739 11.2538L9.17367 10.3398L3.98044 3.07371H6.21644L10.4088 8.93987L11.0597 9.8539L16.5085 17.4786H14.2725L9.82739 11.2538Z'
                              fill='#19191B'
                            />
                          </svg>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className='max-w-3xl mb-24'>
                  <h2 className='text-lg font-medium tracking-tight mb-6'>
                    Join our Newsletter now
                  </h2>
                  <form action='#'>
                    <div className='flex flex-wrap -m-2'>
                      <div className='w-full sm:flex-1 p-2'>
                        <input
                          className='w-full px-8 py-5 outline-none rounded-lg placeholder-neutral-600 font-medium focus:ring-4 focus:ring-neutral-100 border border-orange-500 transition duration-200'
                          type='text'
                          placeholder='Your Email'
                        />
                      </div>
                      <div className='w-full sm:w-auto p-2'>
                        <button
                          className='flex justify-center items-center text-center h-full w-full p-5 font-semibold tracking-tight text-lg text-white bg-neutral-900 hover:bg-neutral-800 focus:bg-neutral-800 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200'
                          type='submit'
                        >
                          More
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className='flex flex-wrap -mx-4'>
                  <div className='w-full sm:w-1/2 lg:w-1/4 p-4'>
                    <h2 className='text-xl font-medium tracking-tight mb-8'>
                      Product
                    </h2>
                    <ul className='flex flex-col gap-4'>
                      <li>
                        <a
                          className='text-neutral-600 font-medium hover:text-neutral-700 tracking-tight transition duration-200'
                          href='#'
                        >
                          Design
                        </a>
                      </li>
                      <li>
                        <a
                          className='text-neutral-600 font-medium hover:text-neutral-700 tracking-tight transition duration-200'
                          href='#'
                        >
                          Applications
                        </a>
                      </li>
                      <li>
                        <a
                          className='text-neutral-600 font-medium hover:text-neutral-700 tracking-tight transition duration-200'
                          href='#'
                        >
                          Integrations
                        </a>
                      </li>
                      <li>
                        <a
                          className='text-neutral-600 font-medium hover:text-neutral-700 tracking-tight hover:transition duration-200'
                          href='#'
                        >
                          All Devices
                        </a>
                      </li>
                      <li>
                        <a
                          className='text-neutral-600 font-medium hover:text-neutral-700 tracking-tight transition duration-200'
                          href='#'
                        >
                          View our demo
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className='w-full sm:w-1/2 lg:w-1/4 p-4'>
                    <h2 className='text-xl font-medium tracking-tight mb-8'>
                      Resources
                    </h2>
                    <ul className='flex flex-col gap-4'>
                      <li>
                        <a
                          className='text-neutral-600 font-medium hover:text-neutral-700 tracking-tight transition duration-200'
                          href='#'
                        >
                          Status
                        </a>
                      </li>
                      <li>
                        <a
                          className='text-neutral-600 font-medium hover:text-neutral-700 tracking-tight transition duration-200'
                          href='#'
                        >
                          Helpdesk
                        </a>
                      </li>
                      <li>
                        <a
                          className='text-neutral-600 font-medium hover:text-neutral-700 tracking-tight transition duration-200'
                          href='#'
                        >
                          Migra Academy
                        </a>
                      </li>
                      <li>
                        <a
                          className='text-neutral-600 font-medium hover:text-neutral-700 tracking-tight transition duration-200'
                          href='#'
                        >
                          Community
                        </a>
                      </li>
                      <li>
                        <a
                          className='text-neutral-600 font-medium hover:text-neutral-700 tracking-tight transition duration-200'
                          href='#'
                        >
                          Events
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className='w-full sm:w-1/2 lg:w-1/4 p-4'>
                    <h2 className='text-xl font-medium tracking-tight mb-8'>
                      Company
                    </h2>
                    <ul className='flex flex-col gap-4'>
                      <li>
                        <a
                          className='text-neutral-600 font-medium hover:text-neutral-700 tracking-tight transition duration-200'
                          href='#'
                        >
                          About us
                        </a>
                      </li>
                      <li>
                        <a
                          className='text-neutral-600 font-medium hover:text-neutral-700 tracking-tight transition duration-200'
                          href='#'
                        >
                          Team
                        </a>
                      </li>
                      <li>
                        <a
                          className='text-neutral-600 font-medium hover:text-neutral-700 tracking-tight transition duration-200'
                          href='#'
                        >
                          Careers
                        </a>
                      </li>
                      <li>
                        <a
                          className='text-neutral-600 font-medium hover:text-neutral-700 tracking-tight transition duration-200'
                          href='#'
                        >
                          Customer Stories
                        </a>
                      </li>
                      <li>
                        <a
                          className='text-neutral-600 font-medium hover:text-neutral-700 tracking-tight transition duration-200'
                          href='#'
                        >
                          Blog
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className='w-full sm:w-1/2 lg:w-1/4 p-4'>
                    <h2 className='text-xl font-medium tracking-tight mb-8'>
                      Solutions
                    </h2>
                    <ul className='flex flex-col gap-4'>
                      <li>
                        <a
                          className='text-neutral-600 font-medium hover:text-neutral-700 tracking-tight transition duration-200'
                          href='#'
                        >
                          Business
                        </a>
                      </li>
                      <li>
                        <a
                          className='text-neutral-600 font-medium hover:text-neutral-700 tracking-tight transition duration-200'
                          href='#'
                        >
                          Consultations
                        </a>
                      </li>
                      <li>
                        <a
                          className='text-neutral-600 font-medium hover:text-neutral-700 tracking-tight transition duration-200'
                          href='#'
                        >
                          Education
                        </a>
                      </li>
                      <li>
                        <a
                          className='text-neutral-600 font-medium hover:text-neutral-700 tracking-tight transition duration-200'
                          href='#'
                        >
                          Contact
                        </a>
                      </li>
                      <li>
                        <a
                          className='text-neutral-600 font-medium hover:text-neutral-700 tracking-tight transition duration-200'
                          href='#'
                        >
                          Contact sales
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </React.Fragment>
  );
}

