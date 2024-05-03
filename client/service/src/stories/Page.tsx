import React from 'react';

import './page.css';

type User = {
  name: string;
};

export function Page() {
  return (
    <article>
      <section className="storybook-page">
        <h2>프론트엔드 스토리북</h2>
      </section>
    </article>
  );
}
