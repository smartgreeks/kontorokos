import { Metadata } from 'next';
import Image from 'next/image';
import { SectionWrapper } from '@/src/components/section-wrapper';
import { ServicesGrid } from '@/src/components/services-grid';
import businessData from '@/src/data/business.json';

export const metadata: Metadata = {
  title: 'Οι Υπηρεσίες μας',
  description: `Ανακαλύψτε τις υπηρεσίες του ${businessData.brandName}. Μεζέδες, ψητά και παραδοσιακά ελληνικά πιάτα στη Σαλαμίνα.`,
};

const menuCategories = [
  {
    name: 'Μεζέδες',
    description: 'Παραδοσιακοί μεζέδες με φρέσκα υλικά',
    image: 'https://images.unsplash.com/photo-1544124499-58912cbddaad?w=400&h=300&fit=crop',
    items: [
      { name: 'Ντολμαδάκια', price: '€8', description: 'Γεμιστά με ρύζι και αρωματικά μυρωδικά' },
      { name: 'Τζατζίκι', price: '€6', description: 'Παραδοσιακό με φρέσκο γιαούρτι και αγγούρι' },
      { name: 'Ταραμοσαλάτα', price: '€7', description: 'Σπιτική με φρέσκο ταραμά' },
      { name: 'Φάβα Σαντορίνης', price: '€9', description: 'Κρεμώδης φάβα με κρεμμύδι και κάπαρη' },
      { name: 'Σαγανάκι', price: '€10', description: 'Φλαμπέ κεφαλοτύρι με μέλι' },
    ]
  },
  {
    name: 'Ψητά',
    description: 'Χειροποίητα ψητά από την παραδοσιακή ελληνική κουζίνα',
    image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=300&fit=crop',
    items: [
      { name: 'Μπριζόλα Χοιρινή', price: '€15', description: 'Ψητή στα κάρβουνα με λεμόνι και ρίγανη' },
      { name: 'Κοντοσούβλι', price: '€18', description: 'Παραδοσιακό χοιρινό σε σούβλα' },
      { name: 'Μπιφτέκι Σπεσιάλ', price: '€12', description: 'Χειροποίητο με φέτα και μυρωδικά' },
      { name: 'Κοκορέτσι', price: '€20', description: 'Παραδοσιακό πασχαλινό φαγητό' },
      { name: 'Λουκάνικα Χωριάτικα', price: '€14', description: 'Σπιτικά λουκάνικα με πιπεριές' },
    ]
  },
  {
    name: 'Σαλάτες',
    description: 'Φρέσκες σαλάτες με εποχιακά υλικά',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
    items: [
      { name: 'Χωριάτικη', price: '€8', description: 'Κλασική ελληνική σαλάτα με φέτα' },
      { name: 'Ρόκα με Παρμεζάνα', price: '€9', description: 'Φρέσκια ρόκα με παρμεζάνα και πινόλια' },
      { name: 'Κρητική Ντάκος', price: '€10', description: 'Παξιμάδι με ντομάτα και μυζήθρα' },
    ]
  },
  {
    name: 'Κυρίως Πιάτα',
    description: 'Παραδοσιακά ελληνικά κυρίως πιάτα',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
    items: [
      { name: 'Μουσακάς', price: '€16', description: 'Παραδοσιακός με μελιτζάνες και κιμά' },
      { name: 'Παστίτσιο', price: '€15', description: 'Με μακαρόνια και μπεσαμέλ' },
      { name: 'Γεμιστά', price: '€14', description: 'Ντομάτες και πιπεριές γεμιστές με ρύζι' },
      { name: 'Κλέφτικο', price: '€22', description: 'Αρνί ψητό σε λαδόκολλα με πατάτες' },
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <SectionWrapper>
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h1 className="text-gradient mb-6">
                Οι Υπηρεσίες μας
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Ανακαλύψτε την πλούσια γκάμα των παραδοσιακών ελληνικών πιάτων μας. 
                Κάθε συνταγή είναι προσεκτικά επιλεγμένη και παρασκευασμένη με αγάπη.
              </p>
            </div>

            <ServicesGrid services={businessData.services} />
          </div>
        </section>
      </SectionWrapper>

      <SectionWrapper>
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-gradient mb-6">
                Το Μενού μας
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Εξερευνήστε την πλήρη γκάμα των πιάτων μας, από παραδοσιακούς μεζέδες 
                μέχρι κυρίως πιάτα που θα σας ενθουσιάσουν.
              </p>
            </div>

            <div className="space-y-16">
              {menuCategories.map((category, index) => (
                <div key={category.name} className="">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                      <h3 className="text-3xl font-bold mb-4">{category.name}</h3>
                      <p className="text-muted-foreground mb-8">{category.description}</p>
                      
                      <div className="space-y-6">
                        {category.items.map((item) => (
                          <div key={item.name} className="flex justify-between items-start gap-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <h4 className="font-semibold">{item.name}</h4>
                                <div className="flex-1 border-b border-dotted border-muted-foreground/30" />
                                <span className="font-bold text-brand-primary">{item.price}</span>
                              </div>
                              <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                      <Image
                        src={category.image}
                        alt={category.name}
                        width={500}
                        height={400}
                        className="rounded-xl shadow-lg w-full h-[400px] object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionWrapper>

      <SectionWrapper>
        <section className="section-padding">
          <div className="container-narrow">
            <div className="bg-gradient-to-r from-brand-primary to-brand-accent rounded-2xl p-8 lg:p-12 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">
                Κάντε Κράτηση Τώρα
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Εξασφαλίστε το τραπέζι σας και απολαύστε μια αξέχαστη γευστική εμπειρία
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href={`tel:${businessData.contact.phone}`}
                  className="btn-base bg-white text-brand-primary hover:bg-white/90 px-8 py-3"
                >
                  Τηλεφωνική Κράτηση
                </a>
                <a 
                  href={`mailto:${businessData.contact.email}`}
                  className="btn-base bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-primary px-8 py-3"
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        </section>
      </SectionWrapper>
    </div>
  );
}