import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onShow, show }) => {
    return ( 
        <header>
            <h1>
                {title}
            </h1>
            <Button color={show?'red':'green'} text={show ? 'Close' : 'Add Task'}  onShow={onShow}/>
        </header>
    )
}
// default props if the passed
Header.defaultProps = {
    title:'Task Tracker',
}

//header prop types, for the robustness of the app
Header.propTypes = {
    title : PropTypes.string.isRequired,
}

//no hyphen in css, camelCase is used
// const headingStyle = {
//     color:'red',
//     backgroundColor: 'black',
// }

export default Header