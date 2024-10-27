import { Configuration } from 'webpack';

export function buildStats(): Configuration['stats'] {
    return {
        children: true,
        modulesSpace: 0,
    };
}
