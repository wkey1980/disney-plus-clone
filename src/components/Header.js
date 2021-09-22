import React from 'react'
import styled from 'styled-components/macro'


function Header() {
	return (
		<Nav>
			<Logo src="/images/logo/logo.svg" alt="Logo" />
			<NavMenu>
				<a>
					<img src="/images/icons/home-icon.svg" alt="Home Icon" />
					<span>HOME</span>
				</a>
				<a>
					<img src="/images/icons/search-icon.svg" alt="Search Icon" />
					<span>SEARCH</span>
				</a>
				<a>
					<img src="/images/icons/watchlist-icon.svg" alt="Watchlist Icon" />
					<span>WATCHLIST</span>
				</a>
				<a>
					<img src="/images/icons/original-icon.svg" alt="Original Icon" />
					<span>ORIGINALS</span>
				</a>
				<a>
					<img src="/images/icons/movie-icon.svg" alt="Movie Icon" />
					<span>MOVIES</span>
				</a>
				<a>
					<img src="/images/icons/movie-icon.svg" alt="Movie Icon" />
					<span>MOVIES</span>
				</a>
				<a>
					<img src="/images/icons/series-icon.svg" alt="Series Icon" />
					<span>SERIES</span>
				</a>
			</NavMenu>
			<UserImg src="/images/avatar/avatar.svg" alt="Avatar" />
		</Nav>
	)
}

const Nav = styled.nav`
	height: 70px;
	display: flex;
	align-items: center;

	padding: 0 36px;

	background-color: #090b13;
`;
const Logo = styled.img`
	width: 80px;
`;
const NavMenu = styled.div`
	display: flex;
	align-items: center;
	flex: 1;
	margin-left: 25px;

	a {
		display: flex;
		align-items: center;
		padding: 0 12px;
		cursor: pointer;

		img {
			height: 20px;
		}
		span {
			font-size: 13px;
			letter-spacing: 1.42px;
		}
	}
`;
const UserImg = styled.img`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	cursor: pointer;
`;



export default Header
