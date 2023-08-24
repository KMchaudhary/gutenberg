/**
 * External dependencies
 */
import {
	getCoreRowModel,
	getFilteredRowModel,
	getSortedRowModel,
	getPaginationRowModel,
	useReactTable,
} from '@tanstack/react-table';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { CheckboxControl } from '../checkbox-control';
import { default as DataTableContext } from './context';

type DataTableProps = {
	data: any;
	columns: any;
	options: any;
	children: any;
};

export default function DataTable( {
	data,
	columns,
	options = {},
	children,
}: DataTableProps ) {
	let _columns = columns;
	if ( options.enableRowSelection ) {
		_columns = [
			{
				id: 'select',
				header: ( { table }: any ) => (
					<CheckboxControl
						checked={ table.getIsAllPageRowsSelected() }
						onChange={ ( value ) =>
							table.toggleAllPageRowsSelected( !! value )
						}
						aria-label={ __( 'Select all' ) }
					/>
				),
				cell: ( { row }: any ) => (
					<CheckboxControl
						checked={ row.getIsSelected() }
						onChange={ ( value ) => row.toggleSelected( !! value ) }
						aria-label={ __( 'Select row' ) }
					/>
				),
				enableSorting: false,
				enableHiding: false,
			},
			...columns,
		];
	}
	const table = useReactTable( {
		data,
		columns: _columns,
		...options,
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
	} );
	return (
		<DataTableContext.Provider value={ { ...table } }>
			{ children }
		</DataTableContext.Provider>
	);
}
