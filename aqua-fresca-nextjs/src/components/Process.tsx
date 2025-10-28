export default function Process() {
  const steps = [
    {
      number: '1',
      title: 'Sourcing',
      description: 'Our water comes from natural springs deep within the pristine mountains of Timor-Leste, untouched by pollution.',
      icon: '💧',
    },
    {
      number: '2',
      title: 'Filtration',
      description: 'The water undergoes a natural filtration process through layers of rock, enriching it with essential minerals.',
      icon: '🏔️',
    },
    {
      number: '3',
      title: 'Testing',
      description: 'Rigorous testing ensures our water meets the highest standards of purity, taste, and mineral content.',
      icon: '🔬',
    },
    {
      number: '4',
      title: 'Bottling',
      description: "Our state-of-the-art bottling facility ensures that the water's purity is maintained from source to bottle.",
      icon: '🍶',
    },
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
            Our Process
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From source to bottle, every step ensures the highest quality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="mb-6">
                <div className="w-28 h-28 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex justify-center items-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                  <span className="text-5xl">{step.icon}</span>
                </div>
                <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-2 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md">
                  {step.number}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-600">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
