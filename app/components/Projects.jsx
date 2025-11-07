'use client';
import PokemonExplorer from './PokemonExplorer';
import WeatherDashboard from './WeatherDashboard';
import CurrencyExchange from './CurrencyExchange';

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">✨ Dự án nổi bật ✨</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4">Khám phá những dự án thú vị tôi đã tạo ra</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <PokemonExplorer />
          <WeatherDashboard />
          <CurrencyExchange />
        </div>

        {/* Academic Projects */}
        <div className="mt-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Dự án học thuật</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AcademicProject 
              icon="🧠"
              title="Phân tích & Phân loại tín hiệu EEG"
              description="Xử lý, trích xuất đặc trưng và phân loại tín hiệu EEG bằng các mô hình KNN, SVM."
              tags={['Python', 'MATLAB', 'Scikit-learn']}
              color="indigo"
            />
            <AcademicProject 
              icon="📈"
              title="Phân tích FDI tại Việt Nam"
              description="Phân tích dữ liệu FDI (2010–2023), trực quan hóa bằng Matplotlib và đưa ra đề xuất chiến lược."
              tags={['Python', 'Pandas', 'Matplotlib']}
              color="green"
            />
            <AcademicProject 
              icon="🗑️"
              title="Thùng rác thông minh"
              description="Hệ thống thùng rác tự động dùng vi điều khiển ATmega128, cảm biến siêu âm và lập trình C."
              tags={['ATmega128', 'C Programming', 'Sensor System']}
              color="orange"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function AcademicProject({ icon, title, description, tags, color }) {
  const colorClasses = {
    indigo: 'text-indigo-500',
    green: 'text-green-600',
    orange: 'text-orange-500'
  };

  const tagColors = {
    Python: 'bg-blue-100 text-blue-800',
    MATLAB: 'bg-purple-100 text-purple-800',
    'Scikit-learn': 'bg-green-100 text-green-800',
    Pandas: 'bg-yellow-100 text-yellow-800',
    Matplotlib: 'bg-blue-100 text-blue-800',
    ATmega128: 'bg-orange-100 text-orange-800',
    'C Programming': 'bg-blue-100 text-blue-800',
    'Sensor System': 'bg-gray-100 text-gray-800'
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-2xl transition duration-300">
      <div className={`text-4xl mb-4 ${colorClasses[color]}`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span 
            key={index}
            className={`${tagColors[tag] || 'bg-gray-100 text-gray-800'} px-2 py-1 rounded text-xs`}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}