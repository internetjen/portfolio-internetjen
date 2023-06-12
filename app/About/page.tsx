import Image from "next/image";

const AboutPage = () => {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-4">
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
        </div>
      </main>
    </>
  );
};

export default AboutPage;
