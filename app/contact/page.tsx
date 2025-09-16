import { Metadata } from 'next';
import { SectionWrapper } from '@/src/components/section-wrapper';
import { ContactPanel } from '@/src/components/contact-panel';
import { MapEmbed } from '@/src/components/map-embed';
import businessData from '@/src/data/business.json';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Επικοινωνία',
  description: `Επικοινωνήστε με το εστιατόριο ${businessData.brandName}. Κάντε κράτηση ή στείλτε μας τις ερωτήσεις σας.`,
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      <SectionWrapper>
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h1 className="text-gradient mb-6">
                Επικοινωνήστε μαζί μας
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Είμαστε εδώ για να απαντήσουμε στις ερωτήσεις σας και να σας βοηθήσουμε 
                με την κράτησή σας. Επικοινωνήστε μαζί μας με οποιονδήποτε τρόπο προτιμάτε.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Information */}
              <div>
                <h2 className="mb-8">Στοιχεία Επικοινωνίας</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Τηλέφωνο</h3>
                      <p className="text-muted-foreground mb-2">
                        Καλέστε μας για κράτηση ή πληροφορίες
                      </p>
                      <a 
                        href={`tel:${businessData.contact.phone}`}
                        className="text-brand-primary hover:text-brand-secondary font-medium"
                      >
                        {businessData.contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground mb-2">
                        Στείλτε μας email για ερωτήσεις
                      </p>
                      <a 
                        href={`mailto:${businessData.contact.email}`}
                        className="text-brand-primary hover:text-brand-secondary font-medium"
                      >
                        {businessData.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Διεύθυνση</h3>
                      <p className="text-muted-foreground mb-2">
                        Βρείτε μας στην καρδιά της Σαλαμίνας
                      </p>
                      <p className="text-brand-primary font-medium">
                        {businessData.primaryLocation.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Ώρες Λειτουργίας</h3>
                      <p className="text-muted-foreground mb-2">
                        Είμαστε ανοιχτά όλη την εβδομάδα
                      </p>
                      <div className="space-y-1 text-sm">
                        <p><span className="font-medium">Δευτέρα - Παρασκευή:</span> {businessData.contact.hours.mon_fri}</p>
                        <p><span className="font-medium">Σάββατο:</span> {businessData.contact.hours.sat}</p>
                        <p><span className="font-medium">Κυριακή:</span> {businessData.contact.hours.sun}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mt-12">
                  <h3 className="font-semibold mb-4">Ακολουθήστε μας</h3>
                  <div className="flex gap-4">
                    <a 
                      href={businessData.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center text-white hover:bg-brand-secondary transition-colors"
                    >
                      <span className="sr-only">Facebook</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                    <a 
                      href={businessData.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center text-white hover:bg-brand-secondary transition-colors"
                    >
                      <span className="sr-only">Instagram</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z"/>
                      </svg>
                    </a>
                    <a 
                      href={businessData.social.googleBusinessUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center text-white hover:bg-brand-secondary transition-colors"
                    >
                      <span className="sr-only">Google Maps</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="mb-8">Στείλτε μας μήνυμα</h2>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                        Όνομα *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors"
                        placeholder="Το όνομά σας"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                        Επώνυμο *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors"
                        placeholder="Το επώνυμό σας"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Τηλέφωνο
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors"
                      placeholder="+30 xxx xxx xxxx"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Θέμα *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors"
                    >
                      <option value="">Επιλέξτε θέμα</option>
                      <option value="reservation">Κράτηση τραπεζιού</option>
                      <option value="event">Διοργάνωση εκδήλωσης</option>
                      <option value="menu">Ερωτήσεις για το μενού</option>
                      <option value="feedback">Σχόλια και προτάσεις</option>
                      <option value="other">Άλλο</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Μήνυμα *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors resize-none"
                      placeholder="Γράψτε το μήνυμά σας εδώ..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary py-3 text-lg"
                  >
                    Αποστολή Μηνύματος
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </SectionWrapper>

      {/* Map Section */}
      <SectionWrapper>
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-gradient mb-4">
                Πώς να μας βρείτε
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Βρισκόμαστε στην καρδιά της Σαλαμίνας, εύκολα προσβάσιμοι 
                με αυτοκίνητο ή δημόσια μέσα.
              </p>
            </div>
            
            <MapEmbed 
              lat={businessData.primaryLocation.geo.lat}
              lng={businessData.primaryLocation.geo.lng}
              address={businessData.primaryLocation.address}
            />
          </div>
        </section>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper>
        <ContactPanel />
      </SectionWrapper>
    </div>
  );
}