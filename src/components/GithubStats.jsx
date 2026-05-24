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

        {/* TOP SECTION */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* STATS CARD */}
          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            className="bg-[#1f2937] rounded-3xl p-6 border border-gray-700 overflow-hidden"
          >
            <img
              src="https://github-readme-stats.vercel.app/api?username=Anisettygnanasai&show_icons=true&theme=tokyonight&hide_border=true&cache_seconds=1800"
              alt="GitHub Stats"
              className="w-full"
            />
          </motion.div>

          {/* STREAK CARD */}
          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            className="bg-[#1f2937] rounded-3xl p-6 border border-gray-700 overflow-hidden"
          >
            <img
              src="https://github-readme-streak-stats.herokuapp.com/?user=Anisettygnanasai&theme=tokyonight&hide_border=true"
              alt="GitHub Streak"
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
          className="bg-[#1f2937] rounded-3xl p-6 border border-gray-700 mt-10 overflow-hidden"
        >
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=Anisettygnanasai&layout=compact&theme=tokyonight&hide_border=true&cache_seconds=1800"
            alt="Top Languages"
            className="w-full"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default GithubStats;