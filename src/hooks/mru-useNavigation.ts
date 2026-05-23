import { useCallback, useState } from 'react';

export type MruPage = 'signin' | 'signup';

export function useMruNavigation(initialPage: MruPage = 'signin') {
  const [page, setPage] = useState<MruPage>(initialPage);
  const navigate = useCallback((nextPage: MruPage) => {
    setPage(nextPage);
  }, []);
  return {
    page,
    navigate,
  };
}
