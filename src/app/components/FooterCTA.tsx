import { motion } from "motion/react";
import { ArrowRight, MessageCircle } from "lucide-react";

export function FooterCTA() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#001F3F] via-[#003366] to-[#001F3F]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <path
            d="M 0 1000 Q 250 750 500 300 T 1000 0"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl text-white mb-6">
            君の可能性を、<br className="md:hidden" />指数関数的に。
          </h2>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-2xl mx-auto">
            僕たちと一緒に、自分の可能性を<br />
            「Exponential（指数関数的）」に広げませんか？
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <a
              href="https://line.me/ti/p/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-12 py-6 rounded-full text-xl transition-all duration-300 shadow-2xl hover:shadow-blue-500/50 hover:scale-105"
            >
              <MessageCircle className="w-6 h-6" />
              説明会へのエントリーはこちら
              <ArrowRight className="w-5 h-5" />
            </a>
            
            <p className="text-blue-200 text-sm">
              公式LINEを追加して最新情報を受け取る
            </p>
          </motion.div>
        </motion.div>

        {/* Image Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 grid md:grid-cols-2 gap-6"
        >
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1668092547528-62bdec358652?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nJTIwYnVzaW5lc3MlMjBtZWV0aW5nfGVufDF8fHx8MTc3NDA5ODMyOXww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="勉強会の様子"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1551801746-ce367c4c5d91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjBuZXR3b3JraW5nJTIwZGlzY3Vzc2lvbnxlbnwxfHx8fDE3NzQwOTgzMzB8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="ネットワーキングの様子"
              className="w-full h-64 object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="relative z-10 mt-20 pt-10 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center text-blue-200 text-sm">
            <p className="mb-2">© 2024 Exponential（エクスポ）</p>
            <p>学生ビジネスコミュニティ</p>
          </div>
        </div>
      </div>
    </section>
  );
}
