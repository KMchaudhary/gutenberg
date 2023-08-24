/**
 * WordPress dependencies
 */
import { createHigherOrderComponent, useInstanceId } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';
import { getBlockSupport } from '@wordpress/blocks';
import {
	MenuItem,
	__experimentalHStack as HStack,
	__experimentalVStack as VStack,
	Button,
	TextControl,
	Modal,
} from '@wordpress/components';
import { useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import {
	BlockSettingsMenuControls,
	useBlockDisplayInformation,
	InspectorControls,
} from '../components';

const emptyString = ( testString ) => testString?.trim()?.length === 0;

function RenameModal( { blockName, originalBlockName, onClose, onSave } ) {
	const [ editedBlockName, setEditedBlockName ] = useState( blockName );

	const nameHasChanged = editedBlockName !== blockName;
	const nameIsOriginal = editedBlockName === originalBlockName;

	const isNameValid =
		( nameHasChanged || nameIsOriginal ) &&
		! emptyString( editedBlockName );

	const autoSelectInputText = ( event ) => event.target.select();

	const dialogDescription = useInstanceId(
		RenameModal,
		`block-editor-rename-modal__description`
	);

	return (
		<Modal
			title={ __( 'Rename block' ) }
			onRequestClose={ onClose }
			overlayClassName="block-editor-block-rename-modal"
			aria={ {
				describedby: dialogDescription,
			} }
		>
			<p id={ dialogDescription }>
				{ __( 'Choose a custom name for this block.' ) }
			</p>
			<form
				onSubmit={ ( e ) => {
					e.preventDefault();

					if ( ! isNameValid ) {
						return;
					}

					onSave( editedBlockName );

					// Immediate close avoids ability to hit save multiple times.
					onClose();
				} }
			>
				<VStack spacing="3">
					<TextControl
						required
						__nextHasNoMarginBottom
						value={ editedBlockName }
						label={ __( 'Block name' ) }
						hideLabelFromVision={ true }
						placeholder={ originalBlockName }
						onChange={ setEditedBlockName }
						onBlur={ () => {
							if ( emptyString( editedBlockName ) ) {
								setEditedBlockName( originalBlockName );
							}
						} }
						onFocus={ autoSelectInputText }
					/>
					<HStack justify="right">
						<Button variant="tertiary" onClick={ onClose }>
							{ __( 'Cancel' ) }
						</Button>

						<Button
							aria-disabled={ ! isNameValid }
							variant="primary"
							type="submit"
						>
							{ __( 'Save' ) }
						</Button>
					</HStack>
				</VStack>
			</form>
		</Modal>
	);
}

function BlockRenameControl( props ) {
	const [ renamingBlock, setRenamingBlock ] = useState( false );

	const { clientId, customName, onChange } = props;

	const blockInformation = useBlockDisplayInformation( clientId );

	return (
		<>
			<InspectorControls group="advanced">
				<TextControl
					__nextHasNoMarginBottom
					label={ __( 'Custom block name' ) }
					value={ customName || '' }
					onChange={ onChange }
				/>
			</InspectorControls>
			<BlockSettingsMenuControls>
				{ ( { selectedClientIds } ) => {
					// Only enabled for single selections.
					const canRename =
						selectedClientIds.length === 1 &&
						clientId === selectedClientIds[ 0 ];

					// This check ensures the `BlockSettingsMenuControls` fill
					// doesn't render multiple times and also that it renders for
					// the block from which the menu was triggered.
					if ( ! canRename ) {
						return null;
					}

					return (
						<MenuItem
							onClick={ () => {
								setRenamingBlock( true );
							} }
							aria-expanded={ renamingBlock }
							aria-haspopup="dialog"
						>
							{ __( 'Rename' ) }
						</MenuItem>
					);
				} }
			</BlockSettingsMenuControls>

			{ renamingBlock && (
				<RenameModal
					blockName={ customName || blockInformation?.title || '' }
					originalBlockName={ blockInformation?.title }
					onClose={ () => setRenamingBlock( false ) }
					onSave={ ( newName ) => {
						// If the new value is the block's original name (e.g. `Group`)
						// then assume the intent is to reset the value. Therefore reset
						// the metadata.
						if ( newName === blockInformation?.title ) {
							newName = undefined;
						}

						onChange( newName );
					} }
				/>
			) }
		</>
	);
}

export const withBlockRenameControl = createHigherOrderComponent(
	( BlockEdit ) => ( props ) => {
		const { clientId, name, attributes, setAttributes } = props;

		const metaDataSupport = getBlockSupport(
			name,
			'__experimentalMetadata',
			false
		);

		const supportsBlockNaming = !! (
			true === metaDataSupport || metaDataSupport?.name
		);

		return (
			<>
				{ supportsBlockNaming && (
					<>
						<BlockRenameControl
							clientId={ clientId }
							customName={ attributes?.metadata?.name }
							onChange={ ( newName ) => {
								setAttributes( {
									metadata: {
										...( attributes?.metadata &&
											attributes?.metadata ),
										name: newName,
									},
								} );
							} }
						/>
					</>
				) }

				<BlockEdit key="edit" { ...props } />
			</>
		);
	},
	'withToolbarControls'
);

addFilter(
	'editor.BlockEdit',
	'core/block-rename-ui/with-block-rename-control',
	withBlockRenameControl
);
