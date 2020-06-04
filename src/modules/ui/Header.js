import React from "react"
import { Location } from "@reach/router"

import {
  IntroWrapper,
  LogoMaker,
  HeaderNav,
  HeaderNavItem,
  HeaderNavLink,
} from "./styles/Header.styles"

export default () => (
  <IntroWrapper>
    <HeaderNav>
      <HeaderNavItem>
        <HeaderNavLink to="/" activeClassName="active">
          Grants
        </HeaderNavLink>
      </HeaderNavItem>
      <HeaderNavItem>
        <LogoMaker
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.4813 33.9651C20.7927 33.9651 20.2854 33.4721 20.2854 32.8383V23.9297L10.3918 17.3099V32.8383C10.3918 33.4721 9.84824 33.9651 9.19592 33.9651C8.5436 33.9651 8 33.4721 8 32.8383V15.1268C8 14.493 8.5436 14 9.19592 14C9.4496 14 9.70328 14.0704 9.88448 14.2113L22.1699 22.486C22.496 22.6973 22.6772 23.0142 22.6772 23.4015V32.8735C22.6772 33.4721 22.1336 33.9651 21.4813 33.9651Z"
            fill="#1AAB9B"
          />
          <path
            d="M26.5187 33.9648C25.8301 33.9648 25.3228 33.4718 25.3228 32.838V23.4012C25.3228 23.0491 25.5402 22.697 25.8301 22.4857L38.1155 14.2462C38.3329 14.1053 38.5504 14.0349 38.804 14.0349C39.3839 14.0349 40 14.4575 40 15.1617V32.8732C40 33.507 39.4564 34 38.804 34C38.1517 34 37.6081 33.507 37.6081 32.8732V17.3448L27.7146 23.9294V32.838C27.7146 33.4718 27.171 33.9648 26.5187 33.9648Z"
            fill="#1AAB9B"
          />
        </LogoMaker>
      </HeaderNavItem>
      <HeaderNavItem>
        <HeaderNavLink to="/meetups" activeClassName="active">
          Meetups
        </HeaderNavLink>
      </HeaderNavItem>
    </HeaderNav>
  </IntroWrapper>
)
