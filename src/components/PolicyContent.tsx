interface PolicyContentProps {
  content: string[];
}

export function PolicyContent({ content }: PolicyContentProps) {
  return (
    <div className='mx-auto max-w-4xl px-4 py-16'>
      <div className='prose prose-gray max-w-none dark:prose-invert'>
        {content.map((paragraph, index) => {
          if (paragraph.startsWith('#')) {
            const level = paragraph.match(/^#+/)?.[0].length || 1;
            const text = paragraph.replace(/^#+\s/, '');

            switch (level) {
              case 1:
                return (
                  <h1 key={index} className='mb-6 text-4xl font-bold text-foreground'>
                    {text}
                  </h1>
                );
              case 2:
                return (
                  <h2 key={index} className='mb-4 mt-8 text-2xl font-semibold text-foreground'>
                    {text}
                  </h2>
                );
              case 3:
                return (
                  <h3 key={index} className='mb-3 mt-6 text-xl font-semibold text-foreground'>
                    {text}
                  </h3>
                );
              default:
                return (
                  <h4 key={index} className='mb-2 mt-4 text-lg font-semibold text-foreground'>
                    {text}
                  </h4>
                );
            }
          }

          if (paragraph.startsWith('-')) {
            return (
              <li key={index} className='mb-2 ml-6 text-muted-foreground'>
                {paragraph.replace(/^-\s/, '')}
              </li>
            );
          }

          return (
            <p key={index} className='mb-4 text-muted-foreground'>
              {paragraph}
            </p>
          );
        })}
      </div>
    </div>
  );
}
