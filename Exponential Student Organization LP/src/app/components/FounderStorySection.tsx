import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Quote } from "lucide-react";

export function FounderStorySection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            設立の想い
          </h2>
          <p className="text-xl text-gray-600">
            一歩踏み出せなかった僕が、この場所を作った理由
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-20 blur-xl"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758876202699-abeb827f35b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGVudHJlcHJlbmV1ciUyMHN0YXJ0dXAlMjBvZmZpY2V8ZW58MXx8fHwxNzc0MDk4MzI5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="代表 島"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Right: Story */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-3"
          >
            <div className="relative">
              <Quote className="absolute -top-4 -left-4 w-12 h-12 text-blue-200" />
              <div className="bg-gray-50 rounded-2xl p-8 md:p-10">
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p className="text-lg">
                    僕自身、ずっと<span className="text-blue-600">「起業したい」</span>という志を持っていました。就職活動もその軸で進めてきましたが、心のどこかで<span className="text-blue-600">「具体的に何をすればいいのか分からない」</span>という不安や足踏み感がありました。
                  </p>
                  
                  <p className="text-lg">
                    きっと同じように、高い志を持ちながらも、最初の一歩に悩んでいる人は多いはず。
                  </p>
                  
                  <p className="text-lg">
                    <span className="text-blue-600">「だったら、切磋琢磨し、共に学び、価値を提供し合える場所を自分で作ろう」</span>
                  </p>
                  
                  <p className="text-lg">
                    そう考えて立ち上げたのが、このエクスポです。
                  </p>
                  
                  <div className="pt-6 border-t border-gray-200">
                    <p className="text-xl">
                      一人では見えなかった景色も、このコミュニティなら見えてくるはずです。
                    </p>
                  </div>
                </div>
                
                <div className="mt-8 flex items-center gap-4">
                  <div className="h-px flex-1 bg-gray-300"></div>
                  <div className="text-center">
                    <p className="text-sm text-gray-500">代表</p>
                    <p className="text-lg">島</p>
                  </div>
                  <div className="h-px flex-1 bg-gray-300"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Target Audience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-10">
            <h3 className="text-2xl md:text-3xl mb-8 text-center">
              こんなあなたへ
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-blue-600 text-xl">💡</span>
                </div>
                <p className="text-gray-700">
                  起業に興味があるが、何から手をつければいいか迷っている
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-purple-600 text-xl">🤝</span>
                </div>
                <p className="text-gray-700">
                  大学の枠を超えて、他大学の優秀な層とつながりたい
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-pink-600 text-xl">🎯</span>
                </div>
                <p className="text-gray-700">
                  表面的な知識ではなく、財務や戦略といった「一生使える武器」を身につけたい
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
