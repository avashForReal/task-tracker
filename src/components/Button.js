import PropTypes from 'prop-types'

const Button = ({color,text,onShow}) => {
    return (
        <button onClick={onShow} style={{backgroundColor:color}} className="btn">{text}</button>
    )
}

Button.defaultProps = {
    color : 'steelblue',
}

Button.propTypes = {
    color : PropTypes.string,
    text : PropTypes.string,
}

export default Button
