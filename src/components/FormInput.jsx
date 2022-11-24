
function FormInput({title, placeholder, changeValue}) {
  return (
    <div className='wrapper'>
      <label for={title} className="label">{title}</label>
      <input type="text" className='input-search' id={title} placeholder={placeholder} onChange={(e) => changeValue(e.target.value)} />
    </div>
  );
}

export default FormInput;
