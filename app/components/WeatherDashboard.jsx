'use client';
import { useState } from 'react';

export default function WeatherDashboard() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const getWeather = () => {
    setLoading(true);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code,wind_speed_10m,wind_direction_10m`;

        try {
          const response = await fetch(apiUrl);
          const data = await response.json();
          const current = data.current;

          // Chuyển mã thời tiết thành biểu tượng và mô tả
          const weatherCode = current.weather_code;
          let icon = "☀️", desc = "Trời quang";
          if ([1, 2, 3].includes(weatherCode)) { icon = "🌤️"; desc = "Ít mây"; }
          else if ([45, 48].includes(weatherCode)) { icon = "🌫️"; desc = "Sương mù"; }
          else if ([51, 61, 80].includes(weatherCode)) { icon = "🌦️"; desc = "Mưa nhẹ"; }
          else if ([63, 65, 81, 82].includes(weatherCode)) { icon = "🌧️"; desc = "Mưa to"; }
          else if ([71, 73, 75].includes(weatherCode)) { icon = "❄️"; desc = "Tuyết rơi"; }
          else if ([95, 96, 99].includes(weatherCode)) { icon = "⛈️"; desc = "Giông bão"; }

          setWeather({
            temp: current.temperature_2m.toFixed(1),
            wind: current.wind_speed_10m,
            direction: current.wind_direction_10m,
            time: new Date(current.time).toLocaleTimeString("vi-VN"),
            icon,
            description: desc
          });
        } catch (error) {
          alert("Không thể lấy dữ liệu thời tiết!");
          console.error(error);
        } finally {
          setLoading(false);
        }
      }, () => {
        alert("Không thể truy cập vị trí. Hãy bật định vị (GPS).");
        setLoading(false);
      });
    } else {
      alert("Trình duyệt không hỗ trợ định vị.");
      setLoading(false);
    }
  };

  const getBgColor = (temp) => {
    if (!temp) return "bg-blue-600";
    const temperature = parseFloat(temp);
    if (temperature > 30) return "bg-red-500";
    if (temperature > 20) return "bg-orange-400";
    if (temperature < 15) return "bg-cyan-500";
    return "bg-blue-600";
  };

  return (
    <div className="project-card bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl p-8 shadow-lg">
      <div className="flex items-center mb-6">
        <div className="text-4xl mr-4">🌤️</div>
        <h3 className="text-2xl font-bold text-gray-800">Weather Dashboard</h3>
      </div>

      <p className="text-gray-600 mb-6">
        Ứng dụng thời tiết thông minh hiển thị thông tin hiện tại và dự báo,
        sử dụng Open-Meteo API.
      </p>

      <div className="bg-white rounded-lg p-6 mb-6 text-center">
        <button 
          onClick={getWeather}
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 transition-all text-white font-semibold py-2 px-4 rounded-full shadow-md"
        >
          {loading ? 'Đang tải...' : '📍 Lấy thời tiết hiện tại'}
        </button>
      </div>

      <div className="text-center">
        {loading && <div className="mt-4 text-gray-500">Đang tải dữ liệu thời tiết...</div>}

        {weather && (
          <div className={`rounded-xl p-6 text-white text-center shadow-inner transition-all duration-500 ${getBgColor(weather.temp)}`}>
            <div className="text-6xl mb-4">{weather.icon}</div>
            <h4 className="text-2xl font-bold mb-2">Vị trí hiện tại</h4>
            <div className="text-4xl font-bold mb-2">
              {weather.temp}°C
            </div>
            <div className="text-lg mb-4">{weather.description}</div>

            <div className="grid grid-cols-2 gap-4 text-sm bg-white/10 rounded-lg p-4">
              <div>
                <span className="font-semibold">💨 Tốc độ gió:</span>
                <div>{weather.wind} km/h</div>
              </div>
              <div>
                <span className="font-semibold">🧭 Hướng gió:</span>
                <div>{weather.direction}°</div>
              </div>
            </div>

            <p className="text-sm mt-4 opacity-90">Cập nhật: {weather.time}</p>
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-2 mt-6">
        <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm">JavaScript</span>
        <span className="bg-cyan-200 text-cyan-800 px-3 py-1 rounded-full text-sm">Open-Meteo API</span>
        <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm">Geolocation</span>
      </div>
    </div>
  );
}