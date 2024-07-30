const GenderCheckbox = () => {
	return (
		<div className='flex'>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer`}>
					<span className='label-text'>Male</span>
					<input type="radio" name="radio-7" className="radio radio-info" defaultChecked />
				</label>
			</div>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer`}>
					<span className='label-text'>Female</span>
					<input type="radio" name="radio-7" className="radio radio-info" />
				</label>
			</div>
		</div>
	);
};
export default GenderCheckbox;