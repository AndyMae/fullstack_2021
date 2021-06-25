import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { removeLoggedUser } from '../reducers/currentUserReducer'
import styled from 'styled-components'


const NavigationMenu = () => {
  const loggedInUser = useSelector(state => state.user)
  const dispatch = useDispatch()

  const Menu = styled.ul`
  list-style-type: none;
  background: #9BF057;
  margin: 0;
  padding: 0px;
  overflow: hidden;
  `


  const handleLogOut = (event) => {
    event.preventDefault()
    window.localStorage.removeItem('loggedBlogAppUser')
    dispatch(removeLoggedUser())
  }

  /*
  const StyledSpan = styled.span`
    font-family: Helvetica;
    font-style: italic;
    position: absolute;
    right: 90px;
  `
  */

  const StyledButton = styled.button`
    display: block;
    text-align: center;
    background-color: #6057f0;
    color: white;
    border-radius: 5px;
    padding: 10px;
    padding-top: 14px;
  `

  const NaviMenuLeftLi = styled.li`
    float: left;
  `
  const NaviMenuRightLi = styled.li`
    float: right;
  `

  /*

  const StyledLink = styled(Link)`
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    border-right: 1px solid white;
    &:hover {
      background: #68d213;
    };
    &.active {
      background: #68d213 !important;
    };
  `
  */

  const StyledNavLink = styled(NavLink)`
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    border-right: 1px solid white;
    &:hover {
      background: #68d213;
    };
    &.active {
      background: #68d213 !important;
    };
  `

  const StyledSpan = styled.span`
    display: block;
    color: #7A7A7A;
    padding: 14px 16px;
    font-size: 14px;
  `


  if (!loggedInUser) {
    return null
  }



  return (
    <Menu>
      <NaviMenuLeftLi>
        <StyledNavLink to={'/'} exact activeClassName='active'>blogs</StyledNavLink>
      </NaviMenuLeftLi>
      <NaviMenuLeftLi>
        <StyledNavLink to={'/users'} exact activeClassName='active'>users</StyledNavLink>
      </NaviMenuLeftLi>
      <NaviMenuRightLi>
        <StyledButton onClick={handleLogOut}>log out</StyledButton>
      </NaviMenuRightLi>
      <NaviMenuRightLi>
        <StyledSpan>{loggedInUser.name} logged in</StyledSpan>
      </NaviMenuRightLi>
    </Menu>
  )
}

export default NavigationMenu