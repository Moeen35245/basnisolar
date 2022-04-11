import { motion } from "framer-motion";
function ContactSlog() {
  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1 }}
      className="px-5 md:px-0 mt-20 max-w-[850px] flex flex-col md:flex-row mx-auto gap-10"
    >
      <div className="flex-[60%]">
        <h4 className="mb-2 text-2xl font-bold text-iyellow">
          Save The Environment
        </h4>
        <h2 className="text-4xl font-bold">
          We are Building A Sustainable Future
        </h2>
      </div>
      <div className="flex-[40%] pr-5 flex my-auto">
        <p className="text-sm">
          we drive the transition to more sustainable,reliable and affordable
          energy systems. With our innovative technologies we energies the
          socity!
        </p>
      </div>
    </motion.div>
  );
}

export default ContactSlog;
