import s from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter=({filter, changeFilter})=>{
    return( 
    <label className={s.label}>
    Find contacts by name
    <input type="text" value={filter} onChange={changeFilter} className={s.input}/>
   </label>)
}


Filter.propTypes={
    filter:PropTypes.string.isRequired,
    changeFilter:PropTypes.func.isRequired

}

export default Filter