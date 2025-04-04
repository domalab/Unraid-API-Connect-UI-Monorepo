import { ArrayRunningError } from '@app/core/errors/array-running-error.js';
import { FieldMissingError } from '@app/core/errors/field-missing-error.js';
import { getArrayData } from '@app/core/modules/array/get-array-data.js';
import { type CoreContext, type CoreResult } from '@app/core/types/index.js';
import { arrayIsRunning } from '@app/core/utils/array/array-is-running.js';
import { emcmd } from '@app/core/utils/clients/emcmd.js';
import { ensurePermission } from '@app/core/utils/permissions/ensure-permission.js';
import { hasFields } from '@app/core/utils/validation/has-fields.js';

/**
 * Add a disk to the array.
 */
export const addDiskToArray = async function (context: CoreContext): Promise<CoreResult> {
    const { data = {}, user } = context;

    // Check permissions
    ensurePermission(user, {
        resource: 'array',
        action: 'create',
        possession: 'any',
    });

    const missingFields = hasFields(data, ['id']);
    if (missingFields.length !== 0) {
        // Just log first error
        throw new FieldMissingError(missingFields[0]);
    }

    if (arrayIsRunning()) {
        throw new ArrayRunningError();
    }

    const { id: diskId, slot: preferredSlot } = data;
    const slot = Number.parseInt(preferredSlot as string, 10);

    // Add disk
    await emcmd({
        changeDevice: 'apply',
        [`slotId.${slot}`]: diskId,
    });

    const array = getArrayData();

    // Disk added successfully
    return {
        text: `Disk was added to the array in slot ${slot}.`,
        json: array,
    };
};
