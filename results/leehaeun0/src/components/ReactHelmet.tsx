import React from 'react';
import { Helmet } from 'react-helmet-async';

type ReactHelmetProps = {
  title: string;
  description: string;
};

function ReactHelmet({ title, description }: ReactHelmetProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
}

export default ReactHelmet;
