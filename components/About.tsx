import Image from "next/image";

const About = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <Image
        alt="profile picture"
          src="/me_circle.png"
          width={200}
          height={200}
          className="rounded-full"
        />
        <h2 className="text-2xl font-bold">Hi, I&apos;m Jen</h2>
        <p className="text-xl">I&apos;m a software engineer</p>
      </div>
    </>
  );
};

export default About;
