import { AnimatePresence, motion } from "framer-motion";

const Form = () => {
  return (
    <AnimatePresence>(
    <motion.form
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="
        max-w-lg mx-auto
        bg-gray-900
        p-8 rounded-2xl
        shadow-lg
        space-y-6
        inset-0
      "
    >
      <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">
        Hire Me
      </h2>

      {/* Name */}
      <input
        type="text"
        placeholder="Your Name"
        className="
          w-full px-4 py-3
          rounded-lg
          bg-gray-800 text-white
          border border-gray-700
          focus:outline-none focus:border-violet-500
        "
      />

      {/* Email */}
      <input
        type="email"
        placeholder="Your Email"
        className="
          w-full px-4 py-3
          rounded-lg
          bg-gray-800 text-white
          border border-gray-700
          focus:outline-none focus:border-violet-500
        "
      />

      {/* Message */}
      <textarea
        rows="4"
        placeholder="Your Message"
        className="
          w-full px-4 py-3
          rounded-lg
          bg-gray-800 text-white
          border border-gray-700
          focus:outline-none focus:border-violet-500
        "
      ></textarea>

      {/* Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="
          w-full py-3
          rounded-xl
          font-semibold text-white
          bg-gradient-to-r from-violet-600 to-purple-600
          shadow-md
        "
      >
        Send Message 🚀
      </motion.button>
    </motion.form>)</AnimatePresence>
  );
};

export default Form;
