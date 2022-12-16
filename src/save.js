/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @param {Object} props            Properties passed to the function.
 * @param {Object} props.attributes Available block attributes.
 * @return {WPElement} Element to render.
 */
export default function save( { attributes  } ) {
	const { company, title, start_date, end_date, work_details } = attributes;
	const blockProps = useBlockProps.save();
	return <div {...blockProps}>
		<span className="gutencv-title">{title}</span> &mdash;
		<span className="gutencv-company">{company}</span>
		<span className="gutencv-date-wrap">
			(
			<span className="gutencv-start_date">{start_date}</span>
			&nbsp;-&nbsp;
			<span className="gutencv-end_date">{end_date}</span>
			)
		</span>
		<div className="gutencv-work_details">
			{
				work_details.length > 0 && (
					<ul>
						{
							work_details.map( (item, index) => {
								return (
									<li key={index}>
										{item}
									</li>
								)
							})
						}
					</ul>
				)
			}
		</div>
	</div>;
}
