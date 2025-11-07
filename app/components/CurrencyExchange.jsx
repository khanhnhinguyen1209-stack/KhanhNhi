'use client';
import { useState, useEffect } from 'react';

export default function CurrencyExchange() {
  const [rate, setRate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(null);

  const fetchExchangeRate = async () => {
    setLoading(true);
    setError(false);

    try {
      const response = await fetch("https://open.er-api.com/v6/latest/USD");
      const data = await response.json();

      const currentRate = data?.rates?.VND;
      if (!currentRate) throw new Error("Invalid data");

      setRate(currentRate);
      setLastUpdated(new Date(data.time_last_update_utc));

      // Lưu cache
      localStorage.setItem("usd-vnd-rate", JSON.stringify({ 
        rate: currentRate, 
        timestamp: Date.now() 
      }));
    } catch (err) {
      console.error("❌ Lỗi tải dữ liệu:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const stored = localStorage.getItem("usd-vnd-rate");
    if (stored) {
      const { rate: storedRate, timestamp } = JSON.parse(stored);
      setRate(storedRate);
      setLastUpdated(new Date(timestamp));
    }
    fetchExchangeRate();
  }, []);

  return (
    <div className="project-card bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-transform duration-300">
      <div className="flex items-center mb-6">
        <div className="text-4xl mr-3">💱</div>
        <h3 className="text-2xl font-bold text-gray-800">Currency Exchange</h3>
      </div>
      <p className="text-gray-700 mb-6 leading-relaxed">
        Widget tỷ giá ngoại tệ real-time hiển thị tỷ giá USD sang VND,
        sử dụng <b>Exchange Rate API</b>.
      </p>
      <div className="bg-white rounded-xl p-6 mb-6 text-center shadow-inner">
        <button 
          onClick={fetchExchangeRate}
          disabled={loading}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-5 rounded-full transition"
        >
          {loading ? 'Đang tải...' : '🔄 Làm mới tỷ giá'}
        </button>
      </div>

      <div className="text-center mt-4">
        {loading && <div className="mt-4 text-gray-500">Đang tải...</div>}
        {error && <div className="mt-4 text-red-500 font-semibold">⚠️ Không thể tải dữ liệu!</div>}

        {rate && (
          <div className="mt-4 text-gray-700">
            <p>1 USD = <span className="font-semibold text-green-700">{rate.toLocaleString("vi-VN")}</span> VND</p>
            <p>10 USD = <span>{(rate * 10).toLocaleString("vi-VN")}</span> VND</p>
            <p>100 USD = <span>{(rate * 100).toLocaleString("vi-VN")}</span> VND</p>
            {lastUpdated && (
              <p className="text-sm text-gray-500 mt-1">
                Cập nhật lần cuối: {lastUpdated.toLocaleString("vi-VN")}
              </p>
            )}
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-2 mt-6">
        <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm">JavaScript</span>
        <span className="bg-emerald-200 text-emerald-800 px-3 py-1 rounded-full text-sm">Exchange Rate API</span>
        <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm">Real-time Data</span>
      </div>
    </div>
  );
}