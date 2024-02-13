import Image from "next/image";
import Footer from "@/components/footer";

const Contact = () => {
  return (
    <div className="my-5 md:my-20 px-4 md:px-[104px]">
      <h2 className="font-black text-3xl lg:text-5xl">Contact</h2>

      <div className="my-3 md:my-5 lg:my-10 font-semibold tracking-wider text-2xl md:text-5xl lg:text-7xl w-full">
        <p className="text-[#6C6C6C] leading-snug">
          Hey ! I&apos;m{" "}
          <span className="text-white w-full">Haree&nbsp;Prasad</span>
          ,
          <br />
          a India - Based
          <br />
          <span className="text-white">Frontend&nbsp;Developer.</span>
          <br />
          Feel Free to Contact&nbsp;!
        </p>
      </div>

      <hr />
      <a
        href="mailto:d390807@gmail.com"
        target="_blank"
        className="flex justify-between my-4 md:my-5"
      >
        <h2 className="font-semibold text-3xl lg:text-5xl">Mail</h2>

        <Image
          src="/assets/Arrow-Down.svg"
          alt="Arrow"
          height={30}
          width={30}
          quality={100}
        />
      </a>

      <hr />
      <a
        href="https://github.com/Haree123"
        target="_blank"
        className="flex justify-between my-4 md:my-5"
      >
        <h2 className="font-semibold text-3xl lg:text-5xl">Github</h2>

        <Image
          src="/assets/Arrow-Down.svg"
          alt="Arrow"
          height={30}
          width={30}
          quality={100}
        />
      </a>

      <hr />
      <a
        href="https://www.linkedin.com/in/haree-prasad-275180158/"
        target="_blank"
        className="flex justify-between my-4 md:my-5"
      >
        <h2 className="font-semibold text-3xl lg:text-5xl">Linkedin</h2>

        <Image
          src="/assets/Arrow-Down.svg"
          alt="Arrow"
          height={30}
          width={30}
          quality={100}
        />
      </a>

      <hr />

      <Footer isIcons={false} />
    </div>
  );
};

export default Contact;
