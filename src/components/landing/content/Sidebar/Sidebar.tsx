import React, { useState } from 'react';
import s from './Sidebar.module.scss';

var Scroll = require('react-scroll');
var scroller = Scroll.scroller;

interface Props {
	navbar_links: string[];
}

const Sidebar: React.FC<Props> = ({ navbar_links = [] }) => {
	const [isActive, setIsActive] = useState(0);

	const handleClickNavbar = (index: number) => {
		setIsActive(index);

		scroller.scrollTo(`section-${index + 1}`, {
			duration: 0,
			delay: 0,
			smooth: true,
			offset: -100,
		});
	};

	return (
		<div className={s.Sidebar}>
			<div className={s.Sidebar_Sticky}>
				<div className={s.Sidebar_Header}>
					<span>On this page</span>
				</div>

				<ul className={s.Sidebar_Content}>
					{navbar_links?.map((link, index) => {
						return (
							<li
								className={`${s.Sidebar_Content_Item} ${
									isActive == index ? s.Active : ''
								}`}
								key={index}
								onClick={() => handleClickNavbar(index)}
							>
								<span>{link}</span>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default Sidebar;
