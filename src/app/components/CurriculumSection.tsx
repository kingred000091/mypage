import { motion } from "motion/react";
import { TrendingUp, Lightbulb, Handshake } from "lucide-react";

export function CurriculumSection() {
  const cards = [
    {
      icon: TrendingUp,
      tag: "Finance",
      title: "生きた数字を読み解く",
      description: "タイミーの有価証券報告書や、ANA/JALの財務諸表比較、オリオンビールのPL/BS分析など、実例をベースに財務スキルを磨く。",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: Lightbulb,
      tag: "Strategy",
      title: "ゼロからの事業創造",
      description: "AmazonやNetflixなどのマーケティング分析から、自分たちでゼロからビジネスモデルを構築する実践ワーク。",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: Handshake,
      tag: "Network",
      title: "視座を高める機会",
      description: "現役経営者の登壇イベント、事業創造ワークショップ、学生キャリア意識向上イベントの開催。",
      gradient: "from-pink-500 to-pink-600"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6">
            圧倒的な「実践」と「知識」
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            毎週のオンライン勉強会を主軸に、<br />
            ビジネスの解像度を極限まで高めています
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.tag}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full">
                {/* Header with gradient */}
                <div className={`bg-gradient-to-r ${card.gradient} p-6`}>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-white/90 text-sm tracking-wider uppercase">
                      {card.tag}
                    </span>
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <card.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl text-white">
                    {card.title}
                  </h3>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
