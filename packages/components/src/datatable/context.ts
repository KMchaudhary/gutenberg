/**
 * WordPress dependencies
 */
import { createContext, useContext } from '@wordpress/element';

/**
 * Internal dependencies
 */
// import type { DataTableContextProps } from './types';

const DataTableContext = createContext(
	{} as any //DataTableContextProps
);
export const useDataTableContext = () => useContext( DataTableContext );
export default DataTableContext;
