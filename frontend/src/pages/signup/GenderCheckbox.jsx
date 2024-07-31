const GenderCheckbox = ({changeGender}) => {
	return (
		<div className='flex'>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer`}>
					<span className='label-text  text-gray-300'>Male</span>
					<input type="radio" onChange={changeGender} value="male" name="gender" className="radio radio-info"  />
				</label>
			</div>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer`}>
					<span className='label-text  text-gray-300'>Female</span>
					<input type="radio" onChange={changeGender} value="female" name="gender" className="radio radio-info" />
				</label>
			</div>
		</div>
	);
};
export default GenderCheckbox;