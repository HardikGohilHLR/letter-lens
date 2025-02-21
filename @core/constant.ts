// Constants
import { Metadata } from 'next';

export const META_DATA: Metadata = {
  title: 'LetterLens - Online Word & Character Counter',
  description:
    'Accurately count words, characters, sentences, and paragraphs with LetterLens. Get letter density insights, estimated reading time, and more',
  icons: { icon: '/favicon.ico' },
  keywords: [
    'word counter online',
    'character counter tool',
    'sentence counter',
    'paragraph counter',
    'letter density calculator',
    'text analysis tool',
    'reading time estimator',
    'online text counter',
    'free word counter',
    'character count with spaces',
    'exclude spaces character counter',
    'letter frequency analysis',
    'writing assistant tool',
    'content writing word count',
    'how to count words in a paragraph online',
    'best free word and character counter tool',
    'online text counter with letter density analysis',
    'calculate reading time based on word count',
    'sentence and paragraph counter for writers',
  ],
  authors: [{ name: 'Hardik Gohil' }],
  openGraph: {
    title: 'LetterLens - Online Word & Character Counter',
    description:
      'Accurately count words, characters, sentences, and paragraphs with LetterLens. Get letter density insights, estimated reading time, and more',
    type: 'website',
    siteName: 'LetterLens',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    images: [{ url: `${process.env.NEXT_PUBLIC_SITE_URL}/images/letter-lens.jpg` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LetterLens - Online Word & Character Counter',
    description:
      'Accurately count words, characters, sentences, and paragraphs with LetterLens. Get letter density insights, estimated reading time, and more',
    images: [{ url: `${process.env.NEXT_PUBLIC_SITE_URL}/images/letter-lens.jpg` }],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_VERIFICATION_GOOGLE,
  },
};
