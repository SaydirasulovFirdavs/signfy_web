import React, { useState, useEffect } from 'react';
import { Bot, Mic, MessageSquare, Headphones, Volume2, Users, Menu, X, Send, Heart, Zap, PlayCircle, Star, Sparkles, ArrowRight } from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [showVideo, setShowVideo] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const TELEGRAM_BOT_USERNAME = "SignfyAiBot";
  const TELEGRAM_BOT_LINK = `https://t.me/${TELEGRAM_BOT_USERNAME}`;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = () => {
    if (email) {
      alert(`Rahmat! ${email} manzili ro'yxatga olindi.`);
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-2xl' : ''}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <div className="flex items-center space-x-3 group cursor-pointer">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-lg group-hover:blur-xl transition"></div>
                  <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 p-3 rounded-2xl">
                    <Bot className="w-7 h-7 text-white" />
                  </div>
                  <Headphones className="w-5 h-5 text-green-400 absolute -bottom-1 -right-1 bg-black rounded-full p-0.5" />
                </div>
                <span className="text-3xl font-black text-white tracking-tight">
                  Signfy<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">AI</span>
                </span>
              </div>
              
              <div className="hidden md:flex space-x-8">
                {['Imkoniyatlar', 'Qanday ishlaydi', 'Missiyamiz', 'Aloqa'].map((item, idx) => (
                  <a key={idx} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-gray-300 hover:text-white transition-all hover:scale-110 font-medium relative group">
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
                  </a>
                ))}
              </div>

              <button 
                className="md:hidden text-white hover:scale-110 transition"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>

            {mobileMenuOpen && (
              <div className="md:hidden pb-6 space-y-4 border-t border-white/10 mt-2 pt-6">
                {['Imkoniyatlar', 'Qanday ishlaydi', 'Missiyamiz', 'Aloqa'].map((item, idx) => (
                  <a key={idx} href={`#${item.toLowerCase()}`} className="block text-gray-300 hover:text-white transition font-medium py-2">{item}</a>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-40 pb-32 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-white/20 backdrop-blur-sm mb-8 hover:scale-105 transition">
                <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
                <span className="text-white font-semibold text-sm">Har bir inson uchun muloqot imkoniyati</span>
                <Heart className="w-5 h-5 text-red-400 animate-pulse" />
              </div>
              
              <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-tight">
                Ovozni
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient">
                  Matnga Aylantiring
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
                Kar va zaif eshituvchilar uchun yaratilgan <span className="text-white font-semibold">aqlli yordamchi</span>. 
                Sun'iy intellekt orqali ovozni bir lahzada matnga o'giradi.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a 
                  href={TELEGRAM_BOT_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-10 py-5 text-lg font-bold text-white rounded-2xl overflow-hidden transition-all hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition"></div>
                  <div className="relative flex items-center gap-3">
                    <MessageSquare className="w-6 h-6" />
                    Telegram'da Boshlash
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
                  </div>
                </a>
                
                <button 
                  onClick={() => setShowVideo(!showVideo)}
                  className="group px-10 py-5 text-lg font-bold text-white rounded-2xl border-2 border-white/20 backdrop-blur-sm hover:bg-white/10 transition-all hover:scale-105 flex items-center gap-3"
                >
                  <PlayCircle className="w-6 h-6" />
                  Demo Ko'rish
                </button>
              </div>
            </div>

            {/* Animated Demo Box */}
            <div className="max-w-5xl mx-auto mt-20">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur-xl group-hover:blur-2xl transition opacity-75"></div>
                <div className="relative bg-black/50 backdrop-blur-xl rounded-3xl border border-white/20 p-10">
                  <div className="flex flex-col md:flex-row items-center justify-around gap-12">
                    <div className="text-center transform hover:scale-110 transition">
                      <div className="relative">
                        <div className="absolute inset-0 bg-blue-500 rounded-full blur-2xl opacity-50 animate-pulse"></div>
                        <div className="relative w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center shadow-2xl">
                          <Mic className="w-16 h-16 text-white" />
                        </div>
                      </div>
                      <p className="text-white font-bold text-2xl mt-6">Ovoz</p>
                      <p className="text-gray-400 text-sm mt-2">Gapiring</p>
                    </div>

                    <div className="hidden md:block">
                      <Zap className="w-12 h-12 text-yellow-400 animate-bounce" />
                    </div>

                    <div className="text-center transform hover:scale-110 transition">
                      <div className="relative">
                        <div className="absolute inset-0 bg-green-500 rounded-full blur-2xl opacity-50 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                        <div className="relative w-32 h-32 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center shadow-2xl">
                          <MessageSquare className="w-16 h-16 text-white" />
                        </div>
                      </div>
                      <p className="text-white font-bold text-2xl mt-6">Matn</p>
                      <p className="text-gray-400 text-sm mt-2">O'qing</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="imkoniyatlar" className="py-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
                Kuchli <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Imkoniyatlar</span>
              </h2>
              <p className="text-gray-400 text-xl">SignfyAiBot bilan muloqot yanada oson</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Volume2, title: "Ovozni Matnga", desc: "Real vaqt rejimida ovozli xabarlarni matnga aylantiradi. AI yordamida yuqori aniqlik.", color: "from-blue-500 to-cyan-500" },
                { icon: Zap, title: "Tezkor Tarjima", desc: "Bir necha soniya ichida ovoz matnga aylanadi. Suhbatda kechikishlar bo'lmaydi.", color: "from-purple-500 to-pink-500" },
                { icon: Users, title: "Oson Muloqot", desc: "Kar va zaif eshituvchilar bilan boshqalar o'rtasida muloqot to'siqlarini bartaraf etadi.", color: "from-green-500 to-teal-500" }
              ].map((feature, idx) => (
                <div key={idx} className="group relative">
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${feature.color} rounded-3xl blur opacity-25 group-hover:opacity-50 transition`}></div>
                  <div className="relative bg-black/50 backdrop-blur-xl p-10 rounded-3xl border border-white/10 hover:border-white/30 transition transform hover:scale-105">
                    <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-2xl`}>
                      <feature.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed text-lg">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="qanday-ishlaydi" className="py-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black text-white mb-6">Qanday Ishlaydi?</h2>
              <p className="text-gray-400 text-xl">Faqat uch oddiy qadam</p>
            </div>

            <div className="space-y-8">
              {[
                { num: "1", title: "Telegram'da botni qo'shing", desc: `@${TELEGRAM_BOT_USERNAME} ni toping va /start buyrug'ini yuboring`, color: "from-blue-500 to-cyan-500" },
                { num: "2", title: "Ovozli xabar yuboring", desc: "Telegram'da mikrofon tugmasini bosing va gapiring", color: "from-purple-500 to-pink-500" },
                { num: "3", title: "Matn olasiz", desc: "Bot darhol ovozni matnga o'girib javob beradi", color: "from-green-500 to-teal-500" }
              ].map((step, idx) => (
                <div key={idx} className="group relative">
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${step.color} rounded-3xl blur opacity-25 group-hover:opacity-50 transition`}></div>
                  <div className="relative bg-black/50 backdrop-blur-xl p-10 rounded-3xl border border-white/10 flex flex-col md:flex-row items-center gap-8">
                    <div className={`flex-shrink-0 w-24 h-24 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-4xl font-black text-white shadow-2xl`}>
                      {step.num}
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-3xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-gray-300 text-lg">{step.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <a 
                href={TELEGRAM_BOT_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 px-12 py-6 text-xl font-bold text-white rounded-2xl overflow-hidden transition-all hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition"></div>
                <div className="relative flex items-center gap-3">
                  <Star className="w-6 h-6 animate-spin" style={{animationDuration: '3s'}} />
                  Hoziroq Sinab Ko'ring
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition" />
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section id="missiyamiz" className="py-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <Heart className="w-20 h-20 text-red-400 mx-auto mb-8 animate-pulse" />
              <h2 className="text-5xl md:text-6xl font-black text-white mb-6">Bizning Missiyamiz</h2>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition"></div>
              <div className="relative bg-black/50 backdrop-blur-xl p-12 rounded-3xl border border-white/10">
                <p className="text-gray-300 text-xl leading-relaxed mb-6">
                  Biz har bir insonning muloqot qilish huquqiga ishonamiz. Kar va zaif eshituvchilar kundalik 
                  hayotda ko'plab qiyinchiliklarga duch kelishadi.
                </p>
                <p className="text-gray-300 text-xl leading-relaxed mb-6">
                  SignfyAiBot shu muammolarni hal qilish uchun yaratilgan. Zamonaviy AI 
                  texnologiyalari yordamida ovozli muloqotni har kim uchun ochiq qilamiz.
                </p>
                <p className="text-white text-2xl font-bold leading-relaxed">
                  Chunki har bir inson eshitishga loyiqdir. 💙
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              {[
                { stat: "95%", label: "Aniqlik darajasi", color: "from-blue-500 to-cyan-500" },
                { stat: "<3s", label: "Tarjima tezligi", color: "from-purple-500 to-pink-500" },
                { stat: "24/7", label: "Ishlash vaqti", color: "from-green-500 to-teal-500" }
              ].map((item, idx) => (
                <div key={idx} className="group relative">
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.color} rounded-2xl blur opacity-50 group-hover:opacity-75 transition`}></div>
                  <div className="relative bg-black/50 backdrop-blur-xl p-8 rounded-2xl border border-white/10 text-center">
                    <div className={`text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r ${item.color} mb-3`}>{item.stat}</div>
                    <div className="text-gray-300 text-lg font-medium">{item.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="aloqa" className="py-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-5xl font-black text-white mb-6">Xabardor Bo'ling</h2>
            <p className="text-gray-400 mb-10 text-xl">
              Yangi xususiyatlar va yangilanishlardan birinchi bo'lib bilib oling
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email manzilingiz"
                className="flex-1 px-8 py-5 bg-white/5 text-white rounded-2xl border border-white/20 focus:border-white/50 focus:outline-none text-lg backdrop-blur-sm placeholder-gray-500"
              />
              <button
                onClick={handleSubmit}
                className="group relative px-8 py-5 font-bold text-white rounded-2xl overflow-hidden transition-all hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition"></div>
                <div className="relative flex items-center justify-center gap-2">
                  <Send className="w-5 h-5" />
                  Yuborish
                </div>
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 py-12 px-4 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <div className="flex items-center space-x-3 mb-6 md:mb-0">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-lg"></div>
                  <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 p-3 rounded-2xl">
                    <Bot className="w-7 h-7 text-white" />
                  </div>
                </div>
                <span className="text-2xl font-black text-white">SignfyAI</span>
              </div>
              
              <div className="flex flex-col items-center gap-4">
                <a 
                  href={TELEGRAM_BOT_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition flex items-center gap-2 font-semibold"
                >
                  <MessageSquare className="w-5 h-5" />
                  @{TELEGRAM_BOT_USERNAME}
                </a>
                <div className="flex items-center gap-3 text-gray-400">
                  <span>Har bir inson uchun muloqot</span>
                  <Heart className="w-5 h-5 text-red-400" />
                </div>
              </div>
            </div>
            
            <div className="text-center text-gray-500 text-sm border-t border-white/10 pt-8">
              <p>© 2024 SignfyAiBot. Barcha huquqlar himoyalangan.</p>
              <p className="mt-2">Muloqot to'siqlarini bartaraf etish uchun yaratilgan</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;