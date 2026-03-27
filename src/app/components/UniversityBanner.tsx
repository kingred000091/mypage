import { motion } from "motion/react";

export function UniversityBanner() {
  const universities = [
    "一橋大学",
    "筑波大学",
    "早稲田大学",
    "慶應義塾大学",
    "国際基督教大学",
    "青山学院大学",
    "東京理科大学",
    "東京都立大学",
    "明治大学",
    "立教大学",
    "中央大学",
    "法政大学",
  ];

  return (
    <section className="bg-gray-50 border-y border-gray-200 py-8 overflow-hidden">
      <div className="flex">
        <motion.div
          className="flex gap-12 whitespace-nowrap"
          animate={{
            x: [0, -1920],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...universities, ...universities, ...universities].map((uni, index) => (
            <span
              key={index}
              className="text-gray-600 text-lg tracking-wide"
            >
              {uni}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
