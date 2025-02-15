// Home
'use client';
import React, { useState, useMemo } from 'react';

import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import { Checkbox } from '@/components/ui/checkbox';

import { About } from '@/components/home/utils/about';

export const Home = () => {
  const [text, setText] = useState<string>('');
  const [excludeSpaces, setExcludeSpaces] = useState<boolean>(false);

  const textMetrics = useMemo(() => {
    const trimmedText = text?.trim();
    const textContent = text?.replace(/\s+/g, '');

    const characterCount = excludeSpaces ? textContent?.length : text?.length;

    const sentenceCount = text?.split(/[.!?]+/)?.filter(Boolean)?.length;
    const wordCount = trimmedText ? trimmedText?.split(/\s+/)?.length : 0;

    const letterCounts = [...textContent?.toUpperCase()]?.reduce((acc: any, letter) => {
      if (/[A-Z0-9]/.test(letter)) {
        acc[letter] = (acc[letter] || 0) + 1;
      }
      return acc;
    }, {});

    const totalLetters: any = Object.values(letterCounts)?.reduce((sum: any, count) => sum + count, 0);

    const letterDensity = Object.entries(letterCounts)?.map(([letter, count]: any) => ({
      letter,
      count,
      percentage: ((count / totalLetters) * 100)?.toFixed(2),
    }));

    const paragraphCount = text?.split(/\n+/)?.filter((para) => para?.trim()?.length > 0)?.length;

    const readingTime = wordCount > 0 ? Math.ceil(wordCount / 200) : 0;

    return {
      wordCount,
      characterCount,
      sentenceCount,
      paragraphCount,
      letterDensity,
      readingTime,
    };
  }, [text, excludeSpaces]);

  return (
    <>
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl pb-14 text-center md:pb-20">
            <h1 className="text-3xl leading-10 font-black lg:text-5xl lg:leading-14">
              Count Characters for SEO, Writing, or Just for Fun!
            </h1>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <Textarea
                rows={7}
                placeholder="Enter your text here..."
                value={text}
                onChange={(e) => setText(e?.target?.value)}
              />

              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="excludeSpaces"
                    checked={excludeSpaces}
                    onCheckedChange={() => setExcludeSpaces(!excludeSpaces)}
                  />
                  <label
                    htmlFor="excludeSpaces"
                    className="cursor-pointer text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Exclude spaces
                  </label>
                </div>
                <p className="text-sm font-medium">Estimated Reading Time: {textMetrics?.readingTime} min</p>
              </div>
            </div>

            <div className="dark:text-secondary grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex grow flex-col gap-2 rounded-2xl bg-[#d879ff] px-3 py-4 shadow md:px-4 md:py-6">
                <h2 className="text-2xl font-bold md:text-4xl">{textMetrics?.characterCount || 0}</h2>
                <p className="text-sm font-medium tracking-wide md:text-base">Total Characters</p>
              </div>
              <div className="flex grow flex-col gap-2 rounded-2xl bg-[#f1c40f] px-3 py-4 shadow md:px-4 md:py-6">
                <h2 className="text-2xl font-bold md:text-4xl">{textMetrics?.wordCount || 0}</h2>
                <p className="text-sm font-medium tracking-wide md:text-base">Word Count</p>
              </div>
              <div className="flex grow flex-col gap-2 rounded-2xl bg-[#ff983e] px-3 py-4 shadow md:px-4 md:py-6">
                <h2 className="text-2xl font-bold md:text-4xl">{textMetrics?.sentenceCount || 0}</h2>
                <p className="text-sm font-medium tracking-wide md:text-base">Sentence Count</p>
              </div>
              <div className="flex grow flex-col gap-2 rounded-2xl bg-[#5bbdff] px-3 py-4 shadow md:px-4 md:py-6">
                <h2 className="text-2xl font-bold md:text-4xl">{textMetrics?.paragraphCount || 0}</h2>
                <p className="text-sm font-medium tracking-wide md:text-base">
                  Paragraph{textMetrics?.paragraphCount > 1 && 's'}
                </p>
              </div>
            </div>

            <div className="mt-4 flex flex-col gap-4">
              <h3 className="text-xl font-semibold">Letter Density</h3>
              {textMetrics?.letterDensity?.length > 0 ? (
                <>
                  <ul className="flex flex-col gap-2">
                    {textMetrics?.letterDensity?.map(({ letter, count, percentage }) => (
                      <li className="flex items-center gap-6" key={letter}>
                        {letter}
                        <Progress className="grow" value={+percentage} />
                        <span className="flex w-24 shrink-0 items-center justify-end">
                          {count} ({percentage})%
                        </span>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <p className="text-sm">No characters found. start typing to get started.</p>
              )}
            </div>
          </div>
        </div>
      </section>

      <About />
    </>
  );
};
