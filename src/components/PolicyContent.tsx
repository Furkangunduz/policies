interface PolicyContentProps {
  title: string;
  content: string[];
}

export function PolicyContent({ title, content }: PolicyContentProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="prose prose-gray dark:prose-invert max-w-none">
        {content.map((paragraph, index) => {
          if (paragraph.startsWith('#')) {
            const level = paragraph.match(/^#+/)?.[0].length || 1;
            const text = paragraph.replace(/^#+\s/, '');
            
            switch (level) {
              case 1:
                return <h1 key={index} className="text-4xl font-bold mb-6 text-foreground">{text}</h1>;
              case 2:
                return <h2 key={index} className="text-2xl font-semibold mt-8 mb-4 text-foreground">{text}</h2>;
              case 3:
                return <h3 key={index} className="text-xl font-semibold mt-6 mb-3 text-foreground">{text}</h3>;
              default:
                return <h4 key={index} className="text-lg font-semibold mt-4 mb-2 text-foreground">{text}</h4>;
            }
          }
          
          if (paragraph.startsWith('-')) {
            return (
              <li key={index} className="ml-6 mb-2 text-muted-foreground">
                {paragraph.replace(/^-\s/, '')}
              </li>
            );
          }
          
          return <p key={index} className="mb-4 text-muted-foreground">{paragraph}</p>;
        })}
      </div>
    </div>
  );
} 