export default function Skills() {
  const skills = {
    frontend: ['HTML/CSS', 'JavaScript', 'React', 'Vue.js', 'Tailwind CSS'],
    backend: ['Node.js', 'Python', 'PHP', 'MySQL'],
    tools: ['Git', 'Docker', 'Canvas', 'PowerPoint', 'VS Code']
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Kỹ năng chuyên môn</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <SkillCategory 
            emoji="🎨" 
            title="Frontend" 
            skills={skills.frontend} 
            color="blue"
          />
          <SkillCategory 
            emoji="⚙️" 
            title="Backend" 
            skills={skills.backend} 
            color="green"
          />
          <SkillCategory 
            emoji="🛠️" 
            title="Tools" 
            skills={skills.tools} 
            color="purple"
          />
        </div>
      </div>
    </section>
  );
}

function SkillCategory({ emoji, title, skills, color }) {
  const colorClasses = {
    blue: 'bg-blue-100 text-blue-800',
    green: 'bg-green-100 text-green-800',
    purple: 'bg-purple-100 text-purple-800',
    yellow: 'bg-yellow-100 text-yellow-800',
    red: 'bg-red-100 text-red-800',
    cyan: 'bg-cyan-100 text-cyan-800',
    orange: 'bg-orange-100 text-orange-800',
    gray: 'bg-gray-100 text-gray-800'
  };

  return (
    <div className="bg-white rounded-xl p-8 shadow-lg text-center fade-in-up">
      <div className="text-6xl mb-4">{emoji}</div>
      <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
      <div className="space-y-2">
        {skills.map((skill, index) => (
          <span 
            key={index}
            className={`skill-badge inline-block ${colorClasses[color]} px-3 py-1 rounded-full text-sm font-medium m-1`}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}