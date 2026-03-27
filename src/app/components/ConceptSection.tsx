import { motion } from "motion/react";
import { Users, Target, BookOpen } from "lucide-react";

export function ConceptSection() {
  const features = [
    {
      icon: Target,
      title: "起業家輩出",
      description: "具体的なアクションに繋がる実践的な学び"
    },
    {
      icon: Users,
      title: "優秀層のネットワーク",
      description: "難関大学の志高い仲間との出会い"
    },
    {
      icon: BookOpen,
      title: "実践的ビジネス学習",
      description: "表面的な知識ではなく、一生使える武器を"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center md:text-left">
              <div className="inline-block">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="mb-6"
                >
                  <span className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    116
                  </span>
                  <span className="text-4xl md:text-5xl text-gray-400 ml-2">名</span>
                </motion.div>
                <p className="text-xl md:text-2xl text-gray-700 mb-4">
                  志の高い仲間が
                </p>
                <p className="text-xl md:text-2xl text-gray-700">
                  大学の垣根を越えて切磋琢磨
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            関東圏の難関大学を中心に、ただの「知識」ではなく「武器」を磨く場所。
            <br />
            毎週のオンライン勉強会を主軸に、ビジネスの解像度を極限まで高めています。
          </p>
        </motion.div>
      </div>
    </section>
  );
}
