import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd, showAdd }) => {
    
    // const onClick = () => {
    //     console.log('click')
    // }
    
    return (
        <header className='header'>
            <h1 style={{ color : 'red'}}> Task Tracker </h1>
            
            <button className='btn'>Add</button>
            <Button color={showAdd ? 'red' : 'maroon'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
            <h2>{title}</h2>
        </header>
    )
}

// Header.defaultProps = {
//     title: 'Default value',
// }

// Header.propTypes = {
//     title: PropTypes.string.isRequired,
// }

// const headingStyle = {
//     color : 'blue',
// }

export default Header
