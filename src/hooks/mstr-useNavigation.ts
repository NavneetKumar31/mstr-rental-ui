import { useCallback, useState } from 'react';

export type MstrPage = 'landing' | 'signin' | 'signup';

export function useMstrNavigation(initialPage: MstrPage = 'landing') {
  const [page, setPage] = useState<MstrPage>(initialPage);
  const navigate = useCallback((nextPage: MstrPage) => {
    setPage(nextPage);
  }, []);
  return {
    page,
    navigate,
  };
}
