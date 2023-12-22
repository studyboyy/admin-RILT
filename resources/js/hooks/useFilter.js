import { useCallback, useEffect } from 'react';
import { router } from '@inertiajs/react';
import { debounce, pickBy } from 'lodash';

export function useFilter({ route, values, only, wait = 100 }) {
    const reload = useCallback(
        debounce(query => {
            router.get(route, pickBy(query), {
                only: only,
                preserveState: true,
                preserveScroll: true
            });
        }, wait),
        [],
    );


    useEffect(() => reload(values), [values, reload]);

    return { values };
}