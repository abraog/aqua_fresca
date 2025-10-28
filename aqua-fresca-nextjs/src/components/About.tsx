import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
            About Aqua Fresca
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Founded in 2018, Aqua Fresca is dedicated to providing the highest
              quality spring water to the people of Timor-Leste and beyond. Our
              water is sourced from natural springs deep within the mountains,
              where it is naturally filtered through layers of rock, enriching
              it with essential minerals.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              At Aqua Fresca, we believe in sustainable practices and giving
              back to our community. We use eco-friendly packaging and support
              local environmental conservation efforts to ensure that our
              natural resources are preserved for generations to come.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our commitment to quality is unwavering. Every bottle of Aqua
              Fresca undergoes rigorous testing to ensure it meets the highest
              standards of purity and taste. We take pride in delivering water
              that is not only refreshing but also beneficial for your health.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <Image
              src="/image/fresca.jpg"
              alt="Aqua Fresca Spring Source"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
