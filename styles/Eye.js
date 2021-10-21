import { useEffect } from "react";
import useSWR from "swr";

const fetcher = async (slug) => {
  const res = await fetch(slug);
  return await res.json();
};

const Eye = ({ slug, methodChoice }) => {
  const { data } = useSWR(`/api/views/${slug}`, fetcher);

  useEffect(() => {
    fetch(`/api/views/${slug}`, {
      method: methodChoice,
      slug: slug,
    });
  }, []);

  return (
    <div style={{ color: `var(--foreground)` }}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-6 w-6'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1}
          d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
        />
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
        />
      </svg>
      <p>{data && data?.total ? `${data.total}` : `–––`}</p>
    </div>
  );
};

export default Eye;
