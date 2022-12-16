/**
 * WordPress components that create the necessary UI elements for the block
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-components/
 */
import { TextControl } from '@wordpress/components';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @param {Object}   props               Properties passed to the function.
 * @param {Object}   props.attributes    Available block attributes.
 * @param {Function} props.setAttributes Function that updates individual attributes.
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
	const {work_details, new_work_details} = attributes;
	const blockProps = useBlockProps();

	return (
		<div { ...blockProps }>
			<label htmlFor="gutencv-company">Company</label>
			<TextControl
				id='gutencv-company'
				value={ attributes.company }
				onChange={ ( val ) => setAttributes( { company: val } ) }
			/>
			<label htmlFor="gutencv-title">Title</label>
			<TextControl
				value={ attributes.title }
				onChange={ ( val ) => setAttributes( { title: val } ) }
			/>
			<label htmlFor="gutencv-start_date">Start Date</label>
			<TextControl
				value={ attributes.start_date }
				onChange={ ( val ) => setAttributes( { start_date: val } ) }
			/>
			<label htmlFor="gutencv-end_date">End Date</label>
			<TextControl
				value={ attributes.end_date }
				onChange={ ( val ) => setAttributes( { end_date: val } ) }
			/>
			<div className="gutencv-work_details-wrap">
				<h4>Work Details</h4>
				{
					work_details.length > 0 && (
						<ul>
							{
								work_details.map((item, idx) => {
									return (
										<li key={idx}>
											{item}
										</li>
									)
								})
							}
						</ul>
					)
				}
				<TextControl
					onChange={(new_item) => setAttributes({new_work_details: new_item})}
					value={new_work_details}
					onKeyUp={(event) => {
						if ('Enter' === event.key) {
							work_details.push(new_work_details);
							setAttributes({ work_details: work_details.slice(), new_work_details: '' });
						}
					}}
				/>
			</div>
		</div>
	);
}
