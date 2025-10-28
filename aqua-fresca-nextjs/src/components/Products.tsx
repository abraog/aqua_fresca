import Image from 'next/image';
import Link from 'next/link';

export default function Products() {
  const products = [
    {
      image: '/image/image1.png',
      title: '500ml Bottle',
      description: 'Perfect for on-the-go hydration. Our convenient 500ml bottle fits in most cup holders and bags.',
    },
    {
      image: '/image/image2.png',
      title: '1.5L Bottle',
      description: 'Ideal for family use or all-day hydration. Our 1.5L bottle provides ample refreshment.',
    },
    {
      image: '/image/image3.png',
      title: '5L Container',
      description: 'Perfect for home or office use. Our 5L container ensures you always have fresh water available.',
    },
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
            Our Products
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our range of premium water bottles designed for every occasion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="h-72 bg-gradient-to-br from-blue-50 to-blue-100 flex justify-center items-center p-6">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={300}
                  height={250}
                  className="max-h-60 w-auto object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-3 text-blue-600">{product.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
                <Link
                  href="#contact"
                  className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold uppercase text-sm tracking-wide hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-md"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
