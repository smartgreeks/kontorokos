import { Metadata } from 'next';
import Image from 'next/image';
import { SectionWrapper } from '@/src/components/section-wrapper';
import businessData from '@/src/data/business.json';

export const metadata: Metadata = {
  title: 'Γκαλερί',
  description: `Δείτε φωτογραφίες από το εστιατόριο ${businessData.brandName} και τα νόστιμα πιάτα μας. Αυθεντική ελληνική κουζίνα στη Σαλαμίνα.`,
};

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop',
    alt: 'Εσωτερικό του εστιατορίου Κοντορόκος',
    category: 'Εστιατόριο'
  },
  {
    src: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=600&h=400&fit=crop',
    alt: 'Ψητά κρέατα στη σχάρα',
    category: 'Πιάτα'
  },
  {
    src: 'https://images.unsplash.com/photo-1544124499-58912cbddaad?w=600&h=400&fit=crop',
    alt: 'Παραδοσιακοί μεζέδες',
    category: 'Πιάτα'
  },
  {
    src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop',
    alt: 'Η ομάδα του εστιατορίου',
    category: 'Εστιατόριο'
  },
  {
    src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop',
    alt: 'Μουσακάς παραδοσιακός',
    category: 'Πιάτα'
  },
  {
    src: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop',
    alt: 'Φρέσκια χωριάτικη σαλάτα',
    category: 'Πιάτα'
  },
  {
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop',
    alt: 'Τραπέζια του εστιατορίου',
    category: 'Εστιατόριο'
  },
  {
    src: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&h=400&fit=crop',
    alt: 'Παραδοσιακά ελληνικά γλυκά',
    category: 'Πιάτα'
  },
  {
    src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&h=400&fit=crop',
    alt: 'Κρασί και μεζέδες',
    category: 'Πιάτα'
  },
  {
    src: 'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?w=600&h=400&fit=crop',
    alt: 'Εξωτερικός χώρος του εστιατορίου',
    category: 'Εστιατόριο'
  },
  {
    src: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&h=400&fit=crop',
    alt: 'Φρέσκα θαλασσινά',
    category: 'Πιάτα'
  },
  {
    src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop',
    alt: 'Ατμόσφαιρα του εστιατορίου το βράδυ',
    category: 'Εστιατόριο'
  }
];

const categories = ['Όλα', 'Εστιατόριο', 'Πιάτα'];

export default function GalleryPage() {
  return (
    <div className="pt-20">
      <SectionWrapper>
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h1 className="text-gradient mb-6">
                Γκαλερί
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Ανακαλύψτε την ατμόσφαιρα του εστιατορίου μας και τα νόστιμα πιάτα 
                που δημιουργούμε με αγάπη και παράδοση.
              </p>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <div 
                  key={index} 
                  className="group relative overflow-hidden rounded-xl bg-muted card-hover"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="font-medium">{image.alt}</p>
                    <p className="text-sm opacity-80">{image.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionWrapper>

      <SectionWrapper>
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-gradient mb-6">
                  Η Εμπειρία μας
                </h2>
                <p className="text-muted-foreground mb-6">
                  Κάθε φωτογραφία αφηγείται μια ιστορία. Από την προσεκτική παρασκευή 
                  των πιάτων μας μέχρι τη ζεστή ατμόσφαιρα του χώρου μας, κάθε 
                  λεπτομέρεια έχει σχεδιαστεί για να σας προσφέρει μια αξέχαστη εμπειρία.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-brand-primary rounded-full" />
                    <span>Φρέσκα υλικά καθημερινά</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-brand-primary rounded-full" />
                    <span>Παραδοσιακές συνταγές</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-brand-primary rounded-full" />
                    <span>Ζεστή και φιλική ατμόσφαιρα</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-brand-primary rounded-full" />
                    <span>Προσεκτική παρουσίαση</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=300&h=200&fit=crop"
                  alt="Λεπτομέρεια εστιατορίου"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-md"
                />
                <Image
                  src="https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=300&h=200&fit=crop"
                  alt="Παρασκευή φαγητού"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-md mt-8"
                />
              </div>
            </div>
          </div>
        </section>
      </SectionWrapper>

      <SectionWrapper>
        <section className="section-padding">
          <div className="container-narrow">
            <div className="text-center">
              <h2 className="text-gradient mb-6">
                Επισκεφθείτε μας
              </h2>
              <p className="text-muted-foreground mb-8">
                Ελάτε να ζήσετε από κοντά την εμπειρία που βλέπετε στις φωτογραφίες. 
                Κάντε κράτηση και απολαύστε την αυθεντική ελληνική κουζίνα.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href={`tel:${businessData.contact.phone}`}
                  className="btn-primary px-8 py-3"
                >
                  Κάντε Κράτηση
                </a>
                <a 
                  href="#contact"
                  className="btn-secondary px-8 py-3"
                >
                  Επικοινωνία
                </a>
              </div>
            </div>
          </div>
        </section>
      </SectionWrapper>
    </div>
  );
}