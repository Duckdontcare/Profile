export default function Works() {
  const works = [
    {
      title: 'เว็บไซต์ Portfolio ส่วนตัว',
      desc: 'ออกแบบเว็บ Profile ด้วย React + Tailwind + Radix UI',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto mt-10 grid gap-6 sm:grid-cols-2">
      {works.map((w, i) => (
        <div
          key={i}
          className="bg-white rounded-xl shadow-lg p-5 hover:shadow-2xl transition-shadow border-t-4 border-purple-400"
        >
          <h3 className="text-xl font-semibold text-purple-600 mb-2">
            {w.title}
          </h3>
          <p className="text-gray-700">{w.desc}</p>
        </div>
      ))}
    </div>
  );
}
