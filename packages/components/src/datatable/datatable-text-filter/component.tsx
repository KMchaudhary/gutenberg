/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useEffect } from '@wordpress/element';
/**
 * Internal dependencies
 */
import { useDebouncedInput } from '../../utils';
import { SearchControl } from '../../search-control';

export type DataTableTextFilterProps = {
	className: string;
	searchLabel: string;
	onChange: any;
};

export default function DataTableTextFilter( {
	className,
	searchLabel = __( 'Search' ),
	onChange,
}: DataTableTextFilterProps ) {
	const [ search, setSearch, debouncedSearch ] = useDebouncedInput();
	const baseCssClass = 'some-class-name';
	useEffect( () => {
		onChange( debouncedSearch );
	}, [ debouncedSearch, onChange ] );
	return (
		<SearchControl
			className={ classnames( `${ baseCssClass }-search`, className ) }
			onChange={ setSearch as () => {} }
			value={ search as string }
			label={ searchLabel }
			placeholder={ searchLabel }
		/>
	);
}
