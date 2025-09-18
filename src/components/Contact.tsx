import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";

const Contact = () => {
  const contacts = [
    {
      icon: FaWhatsapp,
      title: "24/7 WhatsApp Support",
      info: "+447423163505",
      description: "Immediate response",
      link: "https://wa.me/447423163505",
    },
    {
      icon: FaTelegramPlane,
      title: "24/7 Telegram Support",
      info: "+447423163505",
      description: "Immediate response",
      link: "https://t.me/+447423163505",
    },
  ];

  return (
    <section id="contact" className="py-12 md:py-16 lg:py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 px-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Secure Your Communications Today
            </span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4 leading-relaxed">
            Ready to implement enterprise-grade VoIP security? Our cybersecurity experts
            are standing by to design a custom solution for your organization.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4 md:space-y-6 lg:space-y-8">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block binary-hover p-3 sm:p-4 md:p-6 bg-gradient-to-br from-gray-900/80 to-black/70 border border-gray-700/60 rounded-xl hover:border-cyan-400/70 transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                  <contact.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-1">
                    {contact.title}
                  </h4>
                  <p className="text-cyan-400 font-medium mb-1 md:mb-2 text-xs sm:text-sm md:text-base">
                    {contact.info}
                  </p>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    {contact.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
