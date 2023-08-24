/**
 * WordPress dependencies
 */
import { useEffect, useState } from '@wordpress/element';
import { useDebounce } from '@wordpress/compose';

export function useDebouncedInput( defaultValue = '' ) {
	const [ input, setInput ] = useState( defaultValue );
	const [ debouncedInput, setDebouncedState ] = useState( defaultValue );

	const setDebouncedInput = useDebounce( setDebouncedState, 250 );

	useEffect( () => {
		setDebouncedInput( input );
	}, [ input, setDebouncedInput ] );

	return [ input, setInput, debouncedInput ];
}
