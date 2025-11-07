export default function Hero() {
  return (
    <section id="home" className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-6 text-center">
        <div className="fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Xin chào!I am <span className="text-yellow-400">Nguyễn Thị Khánh Nhi</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Công nghệ vật lý điện tử và tin học
          </p>
          <p className="text-lg mb-12 text-white/80 max-w-2xl mx-auto">
            Trường Đại học Khoa học Tự nhiên - ĐHQG TPHCM
          </p>
          <div className="space-x-4">
            <a href="#projects"
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
              Xem dự án
            </a>
            <a href="#contact"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-full transition-all duration-300">
              Liên hệ
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}