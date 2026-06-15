import Image from "next/image";

const SideBar = () => {
  return (
    <div className="w-[25%] bg-sidebar pt-12">
      <nav className="mb-20">
        <Image
          className="mx-auto"
          src={"/logo.png"}
          alt="logo"
          width={150}
          height={150}
        />
      </nav>
      <section className="overflow-x-hidden">
        <div className="w-[60%] mx-auto">
          <h1 className="text-3xl font-bold tracking-tight text-white mb-4">
            <p>Plan. Track.</p>
            <p>Deliver.</p>
            <p className="text-primary">Together.</p>
          </h1>
          <p className="text-white opacity-80 text-[0.9rem]">
            SprintOps helps teams manage projects, track issues and ship better
            software faster.
          </p>
        </div>
        <Image
          className="mt-8 ml-12"
          alt="app skeleton"
          src={"/app-skeleton.png"}
          width={500}
          height={500}
        />
      </section>
      <footer className="w-[70%] mx-auto mt-12">
        <Image src={"/open-quote.png"} alt="quote" width={30} height={30} />
        <p className="text-white mt-4">
          SprintOps has simplified the way our team collaborates and delivers
          quality work.
        </p>
        <div className="flex items-center">
          <Image src={"/avatars.png"} alt="Avatars" width={90} height={90} />
          <span className="text-white ml-4">
            <span className="mr-4">-</span>DevFlow Team
          </span>
        </div>
        <div className="flex justify-end">
          <Image src={"/close-quote.png"} alt="quote" width={30} height={30} />
        </div>
      </footer>
    </div>
  );
};

export default SideBar;
