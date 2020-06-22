import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils'
import './header.styles.scss'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

function Header({ currentUser, hidden }) {
    return (
        <div className="header">
            <Link to="/" className="logo-container">
                <Logo className="logo" />
            </Link>

            <div className="options">
                <Link to="/shop" className="option">
                    SHOP
                </Link>
                <Link to="/shop" className="option">
                    CONTACT
                </Link>
                {
                    currentUser ?
                        <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                        :
                        <Link className="option" to="/signin">SIGN IN</Link>
                }
                <CartIcon />
            </div>
            {hidden ?
                null
                :
                <CartDropdown />
            }
        </div>
    )
}

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
    // Above syntax is Destructuring nested values off the state
    currentUser,
    hidden
})
export default connect(mapStateToProps)(Header)