import Image from "next/image";

const Hero = () => {

  return (
    <>
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <h1 className="mt-10 text-4xl font-bold tracking-tight sm:text-6xl">
                  I&apos;m Jen.
                </h1>
                <p className="mt-6 text-lg leading-8">
                  I&apos;m a software engineer
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="/Jennifer_Arboleda_CV_2023.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md bg-orange-100 text-slate-800 px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Download C/V
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
            <div
              className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 md:-mr-20 lg:-mr-36"
              aria-hidden="true"
            />
            <Image
              alt="profile picture"
              src="/linkedin-profile.png"
              width={300}
              height={300}
              className="rounded-full"
            />
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24" />
      </div>
    </>
  );
};

export default Hero;
