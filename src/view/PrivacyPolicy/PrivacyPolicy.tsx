/* eslint-disable react/no-unescaped-entities */
import { BaseContainer } from '@base/index';
import { Sidebar } from '@content/landing/index';
import React from 'react';
import s from './PrivacyPolicy.module.scss';

const navbar_links = [
	'Term',
	'The Agent Appointment and Services',
	'Provision of the Remuneration by the Principal',
	'Terms of providing the Services',
	'Dealing with third persons',
	'Ownership of Intellectual Property and Work Product',
	'Confidential Information',
	'Termination',
	'Representations and Warranties',
	'Indemnification',
	'Notice',
	'No Assignment',
	'Severance',
	'Entire Agreement',
	'Waiver',
	'Governing Law and Arbitration',
	'Counterparts',
	'Legal Counsel',
	'Force Majeure',
	'Interpretation',
];

const PrivacyPolicy: React.FC = () => {
	return (
		<div className={s.Wrapper}>
			<BaseContainer>
				<div className={s.Body}>
					<div className={s.Content}>
						<div className={s.Content_Header}>
							<span>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='32'
									height='33'
									viewBox='0 0 32 33'
									fill='none'
								>
									<path
										d='M13.3333 25.8337L4 16.5003M4 16.5003L13.3333 7.16699M4 16.5003L28 16.5003'
										stroke='#1E1E1E'
										stroke-width='2'
										stroke-linecap='round'
										stroke-linejoin='round'
									/>
								</svg>
							</span>

							<h1>Azure Processing Privacy Policy</h1>
						</div>

						<div className={s.Content_Subtitle}>
							<p>
								Questions concerning this information? Please email us
								info@azureprocessing.solutions
							</p>
						</div>

						<p>
							This Privacy Policy explains the practices and policies of Azure
							Processing (“Azure Processing”, AZURE PAYMENTS LIMITED) regarding
							the collection and protection of Personal Data supplied by users
							or collected by us from users of Azure Processing websites and the
							Azure Processing services (the “Service”).
						</p>

						<p>
							Azure Processing defines “Personal Data” as any data from which it
							is practical to directly determine the identity of an individual.
							Any capitalized terms not defined in this Privacy Policy have the
							meanings given in the Service’s License and Service Agreement (the
							“User Agreement”). This Privacy Policy may be updated by Azure
							Processing from time to time. Azure Processing will provide notice
							of materially significant changes to the Privacy Policy by posting
							notice on its websites.
						</p>

						<p>
							By registering to use the Service, you agree (1) to comply with
							the terms and conditions of this Privacy Policy and (2) Azure
							Processing may process (i.e., collect, use, etc.) your Personal
							Data as described in this Privacy Policy or the Terms and
							Conditions. Personal Data may be processed by Azure Processing in
							the country where it was collected as well as other countries
							(including the United States) where laws regarding processing of
							Personal Data may be less stringent. Please note that by visiting
							and using Azure Processing’s website, you are accepting the
							practices described in this Privacy Policy.
						</p>

						<div className={s.Subtitle} id='section-1'>
							<h2>Term</h2>
						</div>

						<ul>
							<li>
								The term of this Agreement shall be for an unlimited term until
								terminated by either Party on the terms specified in this
								Agreement.
							</li>
						</ul>

						<div className={s.Subtitle} id='section-2'>
							<h2>The Agent Appointment and Services</h2>
						</div>

						<ul>
							<li>
								a) The Principal appoints the Agent as an agent for the limited
								purpose of conducting negotiations and entering into agreements
								with banks, payment processors, payment transmitters or other
								financial and credit institutions providing payment services
								(hereinafter – the “Payment Institutions”) on behalf of the
								Principal and for Principal’s account.
							</li>
							<li>
								b) The Principal authorises the Agent to sign any agreement with
								the Payment Institution under which the Payment Institution
								provides payment services used by the Principal’s Customers
								(hereinafter – the “Payment services agreement”) on behalf of
								the Principal and to bind the Principal to this Payment services
								agreement. The Principal only should be bound the Payment
								services agreement terms and bears all rights and
								responsibilities under the mentioned agreement.
							</li>
							<li>
								c) The Principal instructs the Agent to perform on behalf of the
								Principal and for Principal’s account such activities and
								services as are or may be required or prescribed from time to
								time by the Principal (hereinafter – the “Services”) including
								but not restricted to:
							</li>
						</ul>

						<div className={s.Subtitle} id='section-1'>
							<h2></h2>
						</div>

						<div className={s.Subtitle} id='section-1'>
							<h2></h2>
						</div>

						<div className={s.Subtitle} id='section-1'>
							<h2></h2>
						</div>

						<div className={s.Subtitle} id='section-1'>
							<h2></h2>
						</div>

						<div className={s.Subtitle} id='section-1'>
							<h2></h2>
						</div>

						<div className={s.Subtitle} id='section-1'>
							<h2></h2>
						</div>

						<div className={s.Subtitle} id='section-1'>
							<h2></h2>
						</div>

						<div className={s.Subtitle} id='section-1'>
							<h2></h2>
						</div>

						<div className={s.Subtitle} id='section-1'>
							<h2></h2>
						</div>

						<div className={s.Subtitle} id='section-1'>
							<h2></h2>
						</div>

						<div className={s.Subtitle} id='section-1'>
							<h2></h2>
						</div>

						<div className={s.Subtitle} id='section-1'>
							<h2></h2>
						</div>

						<div className={s.Subtitle} id='section-1'>
							<h2></h2>
						</div>

						<div className={s.Subtitle} id='section-1'>
							<h2></h2>
						</div>

						<div className={s.Subtitle} id='section-1'>
							<h2></h2>
						</div>

						<div className={s.Subtitle} id='section-1'>
							<h2></h2>
						</div>

						<div className={s.Subtitle} id='section-1'>
							<h2></h2>
						</div>

						<div className={s.Subtitle} id='section-1'>
							<h2></h2>
						</div>
					</div>

					<Sidebar navbar_links={navbar_links} />
				</div>
			</BaseContainer>
		</div>
	);
};

export default PrivacyPolicy;
