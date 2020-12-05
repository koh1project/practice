import React from 'react';
import Link from 'next/link';
import Router from 'next/router';

const errorPage = () => (
  <div>
    <h1>Error page</h1>
    <p>Try <Link href="/auth"><a>going back</a></Link></p>
  </div>
);

export default errorPage;