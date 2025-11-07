'use client';
import { useState } from 'react';

export default function PokemonExplorer() {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchRandomPokemon = async () => {
    setLoading(true);
    try {
      const id = Math.floor(Math.random() * 150) + 1;
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await res.json();
      setPokemon(data);
    } catch (err) {
      console.error("Error fetching Pokémon:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="project-card bg-gradient-to-br from-yellow-100 to-red-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-transform duration-300">
      <div className="flex items-center mb-6">
        <div className="text-4xl mr-3">🔍</div>
        <h3 className="text-2xl font-bold text-gray-800">Pokemon Explorer</h3>
      </div>
      <p className="text-gray-700 mb-6 leading-relaxed">
        Ứng dụng khám phá thế giới Pokemon với thông tin chi tiết về từng Pokemon,
        sử dụng <b>PokeAPI</b> để lấy dữ liệu real-time.
      </p>
      <div className="bg-white rounded-xl p-6 mb-6 text-center shadow-inner">
        <button 
          onClick={fetchRandomPokemon}
          disabled={loading}
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-5 rounded-full transition"
        >
          {loading ? 'Đang tải...' : '🎲 Pokemon ngẫu nhiên'}
        </button>
      </div>
      <div className="text-center mt-4">
        {loading && <div className="mt-4 text-gray-500">Đang tải...</div>}
        {pokemon && (
          <div className="mt-4">
            
            <p className="font-bold text-lg mt-2">{pokemon.name.toUpperCase()}</p>
            <p>Chiều cao: {pokemon.height}</p>
            <p>Cân nặng: {pokemon.weight}</p>
            <div className="mt-2">
              {pokemon.types.map((type, index) => (
                <span key={index} className='bg-white/30 px-2 py-1 rounded-full text-sm mr-1'>
                  {type.type.name}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-wrap gap-2 mt-6">
        <span className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-sm">JavaScript</span>
        <span className="bg-red-200 text-red-800 px-3 py-1 rounded-full text-sm">PokeAPI</span>
        <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm">REST API</span>
      </div>
    </div>
  );
}