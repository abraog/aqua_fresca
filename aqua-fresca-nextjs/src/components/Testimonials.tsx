import Image from 'next/image';

export default function Testimonials() {
  const testimonials = [
    {
      text: "Aqua Fresca has been our office water supplier for over two years now. The quality is consistent, and their service is excellent. Our employees love the refreshing taste!",
      name: 'John Doe',
      role: 'Business Manager',
      image: '/image/areo_dili_fresca.jpg',
      rating: 5,
    },
    {
      text: "Since switching to Aqua Fresca for my family, I've noticed we all drink more water. The taste is so clean and refreshing, even my kids prefer it to sugary drinks!",
      name: 'Jane Smith',
      role: 'Mother of Three',
      image: '/image/areo_dili_fresca.jpg',
      rating: 5,
    },
    {
      text: 'As a restaurant owner, water quality is important to me. Aqua Fresca provides us with consistently pure water that complements our food perfectly. Our customers notice the difference!',
      name: 'Michael Chen',
      role: 'Restaurant Owner',
      image: '/image/areo_dili_fresca.jpg',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-linear-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
            What Our Customers Say
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted by families and businesses across Timor-Leste
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-blue-100"
            >
              {/* Stars */}
              <div className="flex mb-4 text-yellow-400">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <div className="relative mb-6">
                <span className="absolute text-7xl text-blue-600 opacity-10 -left-2 -top-6 font-serif">&quot;</span>
                <p className="relative text-gray-700 leading-relaxed italic">{testimonial.text}</p>
              </div>

              {/* Author */}
              <div className="flex items-center pt-4 border-t border-gray-100">
                <div className="w-14 h-14 rounded-full overflow-hidden mr-4 border-2 border-blue-100">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={56}
                    height={56}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-blue-600 font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
