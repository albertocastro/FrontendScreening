

const FormCheckBox = ({label,...rest})=>{

    const handlerChange = (e)=>{
        const {target:{checked,id}} = e
        rest.onChange(id,checked)
    }
    return <div className="baseInput checkbox">
        <input type="checkbox" {...rest} onChange={handlerChange}/>
        <label>
        {label}
        </label>
    </div>
}

export default FormCheckBox