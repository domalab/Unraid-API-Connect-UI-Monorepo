import { AppError } from '@app/core/errors/app-error.js';
import { FieldMissingError } from '@app/core/errors/field-missing-error.js';
import { type CoreContext, type CoreResult } from '@app/core/types/index.js';
import { ensurePermission } from '@app/core/utils/permissions/ensure-permission.js';
import { hasFields } from '@app/core/utils/validation/has-fields.js';
import { getters } from '@app/store/index.js';

interface Context extends CoreContext {
    params: {
        /** Name of user to add the role to. */
        name: string;
    };
}

/**
 * Add role to user.
 */
export const addRole = async (context: Context): Promise<CoreResult> => {
    const { params } = context;

    // Validation
    const { name } = params;
    const missingFields = hasFields(params, ['name']);

    if (missingFields.length !== 0) {
        throw new FieldMissingError(missingFields[0]);
    }

    // Check user exists
    if (!getters.emhttp().users.find((user) => user.name === name)) {
        throw new AppError('No user exists with this name.');
    }

    // @todo: add user role

    return {
        text: 'User updated successfully.',
    };
};
