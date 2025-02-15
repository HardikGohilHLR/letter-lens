// About
import React from 'react';

export const About = () => {
  return (
    <section className="pb-14 md:pb-20">
      <div className="container">
        <h2 className="mb-6 text-2xl font-bold md:mb-10 md:text-3xl">About</h2>
        <div className="text-primary mx-auto flex flex-col gap-3 text-sm leading-7 font-medium md:text-base">
          <p>
            LetterLens is an open-source <strong>word and character counter</strong> designed to help writers, students,
            and content creators analyze their text effortlessly. Whether you're drafting an article, writing an essay,
            or optimizing content for SEO, LetterLens provides real-time insights, including word count, character
            count, sentence count, and paragraph count. With its intuitive interface, users can easily track text
            metrics, ensuring their content meets specific requirements.
          </p>

          <p>
            Beyond basic counting, LetterLens offers advanced text analysis features such as{' '}
            <strong>Letter Density</strong> calculations, which display the frequency and percentage of each letter used
            in your content. Additionally, the built-in reading time estimator helps you gauge how long it would take
            for an average reader to go through your text. These features make it an essential tool for content
            creators, marketers, and professionals aiming for well-structured and readable content.
          </p>

          <p>
            As an <strong>open-source</strong> project, LetterLens is built for transparency and collaboration.
            Developers and contributors can explore the codebase, suggest improvements, and add new features to enhance
            its functionality. This <strong>community-driven</strong> approach ensures that the tool remains up-to-date,
            reliable, and adaptable to different writing needs. Users can access the source code on GitHub, making it a
            versatile and customizable tool for anyone who wants more than just a basic word counter.
          </p>

          <p>
            LetterLens is designed to be lightweight, fast, and accessible from any device, making it a go-to tool for
            quick <strong>word text analysis</strong>. Whether you are checking the length of a document, analyzing
            letter frequency, or ensuring your writing meets specific guidelines, LetterLens provides accurate, instant,
            and user-friendly text insights. <strong>Bookmark</strong> this page and take advantage of its powerful
            features to enhance your writing experience!
          </p>
        </div>
      </div>
    </section>
  );
};
