import { Metadata } from 'next';
import Image from 'next/image';
import { SectionWrapper } from '@/src/components/section-wrapper';
import businessData from '@/src/data/business.json';

export const metadata: Metadata = {
  title: 'Σχετικά με εμάς',
  description: `Μάθετε περισσότερα για την ιστορία και τη φιλοσοφία του ${businessData.brandName}. Αυθεντική ελληνική κουζίνα στη Σαλαμίνα.`,
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      <SectionWrapper>
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h1 className="text-gradient mb-6">
                Η Ιστορία μας
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Από το 1985, ο Κοντορόκος αποτελεί σημείο αναφοράς για την αυθεντική 
                ελληνική κουζίνα στη Σαλαμίνα, συνδυάζοντας παραδοσιακές συνταγές 
                με σύγχρονη παρουσίαση.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <h2 className="mb-6">Η Φιλοσοφία μας</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Στον Κοντορόκο πιστεύουμε ότι το φαγητό είναι πολύ περισσότερο από 
                    απλή τροφή. Είναι κουλτούρα, παράδοση και αγάπη που μεταδίδεται 
                    από γενιά σε γενιά.
                  </p>
                  <p>
                    Κάθε πιάτο που σερβίρουμε είναι αποτέλεσμα προσεκτικής επιλογής 
                    των καλύτερων υλικών από τοπικούς παραγωγούς και παραδοσιακών 
                    μεθόδων μαγειρέματος που σέβονται τη γεύση και τη διατροφική αξία.
                  </p>
                  <p>
                    Η ομάδα μας αποτελείται από έμπειρους σεφ που έχουν αφιερώσει 
                    τη ζωή τους στην τέχνη της ελληνικής κουζίνας, φέρνοντας στο 
                    τραπέζι σας γεύσεις που θα σας ταξιδέψουν.
                  </p>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop"
                  alt="Εσωτερικό του εστιατορίου Κοντορόκος"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-20">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">38+</span>
                </div>
                <h3 className="mb-2">Χρόνια Εμπειρίας</h3>
                <p className="text-muted-foreground">
                  Από το 1985 σερβίρουμε αυθεντική ελληνική κουζίνα
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">50+</span>
                </div>
                <h3 className="mb-2">Παραδοσιακά Πιάτα</h3>
                <p className="text-muted-foreground">
                  Μεγάλη ποικιλία από μεζέδες μέχρι κυρίως πιάτα
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">100%</span>
                </div>
                <h3 className="mb-2">Φρέσκα Υλικά</h3>
                <p className="text-muted-foreground">
                  Καθημερινή προμήθεια από τοπικούς παραγωγούς
                </p>
              </div>
            </div>

            <div className="bg-muted/30 rounded-2xl p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="mb-4">Η Ομάδα μας</h2>
                  <p className="text-muted-foreground mb-6">
                    Πίσω από κάθε επιτυχημένο εστιατόριο κρύβεται μια ομάδα 
                    ανθρώπων που αγαπούν αυτό που κάνουν. Στον Κοντορόκο, η 
                    ομάδα μας είναι η καρδιά του εστιατορίου.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-brand-primary rounded-full" />
                      <span>Έμπειροι σεφ με πάθος για την ελληνική κουζίνα</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-brand-primary rounded-full" />
                      <span>Φιλικό προσωπικό που φροντίζει για κάθε λεπτομέρεια</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-brand-primary rounded-full" />
                      <span>Συνεχής εκπαίδευση και βελτίωση των υπηρεσιών</span>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=400&fit=crop"
                    alt="Η ομάδα του εστιατορίου Κοντορόκος"
                    width={500}
                    height={400}
                    className="rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </SectionWrapper>
    </div>
  );
}