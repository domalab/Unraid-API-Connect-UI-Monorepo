import { expect, test, vi } from 'vitest';

import type { SliceState } from '@app/store/modules/emhttp.js';
import { getters } from '@app/store/index.js';

test('Returns true if the array is started', async () => {
    vi.spyOn(getters, 'emhttp').mockImplementation(
        () => ({ var: { mdState: 'STARTED' } }) as unknown as SliceState
    );

    const { arrayIsRunning } = await import('@app/core/utils/array/array-is-running.js');
    expect(arrayIsRunning()).toBe(true);
    vi.spyOn(getters, 'emhttp').mockReset();
});

test('Returns false if the array is stopped', async () => {
    vi.spyOn(getters, 'emhttp').mockImplementation(
        () => ({ var: { mdState: 'Stopped' } }) as unknown as SliceState
    );
    const { arrayIsRunning } = await import('@app/core/utils/array/array-is-running.js');
    expect(arrayIsRunning()).toBe(false);
    vi.spyOn(getters, 'emhttp').mockReset();
});
