import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-foreground">Bilet Buldum Policies</h1>
          <p className="text-muted-foreground">Please review our policies below</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link 
            href="/biletbuldum/privacy-policy" 
            className="block p-6 bg-card rounded-lg hover:bg-muted/50 transition-colors border border-border"
          >
            <h2 className="text-2xl font-semibold mb-2 text-foreground">Privacy Policy</h2>
            <p className="text-muted-foreground">Learn about how we collect, use, and protect your data</p>
          </Link>
          
          <Link 
            href="/biletbuldum/terms-of-service" 
            className="block p-6 bg-card rounded-lg hover:bg-muted/50 transition-colors border border-border"
          >
            <h2 className="text-2xl font-semibold mb-2 text-foreground">Terms of Service</h2>
            <p className="text-muted-foreground">Review our terms and conditions of use</p>
          </Link>
        </div>
      </div>
    </main>
  );
}
