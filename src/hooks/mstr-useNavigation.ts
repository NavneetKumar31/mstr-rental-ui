import { useCallback, useState } from 'react';

export type MstrPage = 'signin' | 'signup';

export function useMstrNavigation(initialPage: MstrPage = 'signin') {
  const [page, setPage] = useState<MstrPage>(initialPage);
  const navigate = useCallback((nextPage: MstrPage) => {
    setPage(nextPage);
  }, []);
  return {
    page,
    navigate,
  };
}
