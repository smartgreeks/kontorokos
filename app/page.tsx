import { Hero } from '@/src/components/hero';
import { StatsSection } from '@/src/components/stats-section';
import { ServicesGrid } from '@/src/components/services-grid';
import { AboutSection } from '@/src/components/about-section';
import { Testimonials } from '@/src/components/testimonials';
import { FAQ } from '@/src/components/faq';
import { MapEmbed } from '@/src/components/map-embed';
import { ContactPanel } from '@/src/components/contact-panel';
import { SectionWrapper } from '@/src/components/section-wrapper';
import businessData from '@/src/data/business.json';

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsSection />
      
      <SectionWrapper>
        <section id="services" className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-gradient mb-4">
                Το Μενού μας
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Ανακαλύψτε την αυθεντική ελληνική κουζίνα με παραδοσιακές γεύσεις 
                που θα σας ταξιδέψουν στις ρίζες της Μεσογείου.
              </p>
            </div>
            <ServicesGrid services={businessData.services} />
          </div>
        </section>
      </SectionWrapper>

      <SectionWrapper>
        <AboutSection />
      </SectionWrapper>

      <SectionWrapper>
        <section id="testimonials" className="section-padding bg-muted/30">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-gradient mb-4">
                Τι λένε οι πελάτες μας
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Διαβάστε τις εμπειρίες των επισκεπτών μας και ανακαλύψτε γιατί 
                επιλέγουν τον Κοντορόκο για τις γευστικές τους περιπέτειες.
              </p>
            </div>
            <Testimonials />
          </div>
        </section>
      </SectionWrapper>

      <SectionWrapper>
        <section id="faq" className="section-padding">
          <div className="container-narrow">
            <div className="text-center mb-12">
              <h2 className="text-gradient mb-4">
                Συχνές Ερωτήσεις
              </h2>
              <p className="text-muted-foreground">
                Βρείτε απαντήσεις στις πιο συχνές ερωτήσεις σχετικά με το εστιατόριό μας.
              </p>
            </div>
            <FAQ />
          </div>
        </section>
      </SectionWrapper>

      <SectionWrapper>
        <section id="location" className="section-padding bg-muted/30">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-gradient mb-6">
                  Βρείτε μας
                </h2>
                <p className="text-muted-foreground mb-8">
                  Βρισκόμαστε στην καρδιά της Σαλαμίνας, σε μια τοποθεσία που 
                  συνδυάζει την παραδοσιακή ατμόσφαιρα με τη σύγχρονη άνεση.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Διεύθυνση</p>
                      <p className="text-muted-foreground">{businessData.primaryLocation.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Τηλέφωνο</p>
                      <p className="text-muted-foreground">{businessData.contact.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Ώρες Λειτουργίας</p>
                      <p className="text-muted-foreground">
                        Δευτέρα - Παρασκευή: {businessData.contact.hours.mon_fri}<br />
                        Σάββατο: {businessData.contact.hours.sat}<br />
                        Κυριακή: {businessData.contact.hours.sun}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:order-first">
                <MapEmbed 
                  lat={businessData.primaryLocation.geo.lat}
                  lng={businessData.primaryLocation.geo.lng}
                  address={businessData.primaryLocation.address}
                />
              </div>
            </div>
          </div>
        </section>
      </SectionWrapper>

      <SectionWrapper>
        <section id="contact" className="section-padding">
          <div className="container-narrow">
            <div className="text-center mb-12">
              <h2 className="text-gradient mb-4">
                Επικοινωνήστε μαζί μας
              </h2>
              <p className="text-muted-foreground">
                Κάντε κράτηση ή επικοινωνήστε μαζί μας για οποιαδήποτε ερώτηση.
              </p>
            </div>
            <ContactPanel />
          </div>
        </section>
      </SectionWrapper>
    </>
  );
}