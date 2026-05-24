import { motion } from "framer-motion";

const GithubStats = () => {
  return (
    <section
      id="github"
      className="py-28 px-6 md:px-20 bg-[#111827]"
    >
      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold mb-6">
            GitHub{" "}
            <span className="text-purple-500">
              Activity
            </span>
          </h2>

          <p className="text-gray-400 text-lg">
            Consistency beats intensity.
          </p>
        </motion.div>

        {/* STATS */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* GITHUB STATS */}
          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            className="bg-[#1f2937] rounded-3xl p-6 border border-gray-700"
          >
            <img
              src="https://github-readme-stats.vercel.app/api?username=Anisettygnanasai&show_icons=true&theme=tokyonight&hide_border=true"
              alt="github stats"
              className="w-full"
            />
          </motion.div>

          {/* STREAK */}
          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            className="bg-[#1f2937] rounded-3xl p-6 border border-gray-700"
          >
            <img
              src="https://streak-stats.demolab.com?user=Anisettygnanasai&theme=tokyonight&hide_border=true"
              alt="github streak"
              className="w-full"
            />
          </motion.div>
        </div>

        {/* LANGUAGES */}
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          className="bg-[#1f2937] rounded-3xl p-6 border border-gray-700 mt-10"
        >
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=Anisettygnanasai&layout=compact&theme=tokyonight&hide_border=true"
            alt="languages"
            className="w-full"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default GithubStats;