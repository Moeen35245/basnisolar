import Image from "next/image";
import abt2 from "../../public/aboutimg1.jpg";
import abt1 from "../../public/aboutimg2.jpg";

function About() {
  return (
    <div
      id="about-us"
      className="items-center dark:idark  lg:mt-10 flex lg:flex-row flex-col-reverse max-w-[1198px] gap-5  "
    >
      <div className="flex-1 relative my-auto ">
        <div className="hidden lg:block w-[400px] shadow rounded-xl overflow-hidden lg:absolute lg:left-[100px] lg:top-[0px]">
          <Image
            alt="This is about basni solar"
            quality={20}
            src={abt1}
            layout="responsive"
            objectFit="conatin"
            className="object-contain rounded-xl"
          />
        </div>
        <div className="w-[300px] h-auto mobile:h-auto mobile:w-[400px] shadow rounded-lg overflow-hidden lg:absolute lg:left-[160px] lg:-top-[90px]">
          <Image
            alt="This is about basni solar"
            quality={20}
            src={abt2}
            layout="responsive"
            objectFit="contain"
            className="object-cover rounded-xl"
          />
        </div>
      </div>
      <div className="h-[400px] order-1 lg:order-2 px-5 lg:px-0 lg:pt-40 flex-1 flex my-auto flex-col justify-center">
        <h1 className="text-3xl md:text-5xl font-bold about">About us</h1>
        <p className="text-justify mt-5 text-sm md:text-lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat eius
          optio praesentium eum sit qui ea maxime aliquam laudantium ut,
          assumenda laboriosam numquam sunt, architecto quaerat magni neque
          atque ex rerum ipsum doloremque non omnis? Atque a doloremque neque
          inventore nihil officia? Doloremque iste quisquam voluptatem, eius
          veniam assumenda excepturi impedit asperiores cumque modi obcaecati
          autem hic id aliquid quas corporis temporibus, eos ipsam velit?Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Magni, maiores
          ipsa! Enim ab, dolorum suscipit repellendus reprehenderit nisi odio
          praesentium mollitia? Nesciunt, ipsa. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Autem soluta nulla tempore at suscipit
          laborum dolore amet.
        </p>
      </div>
    </div>
  );
}
export default About;
