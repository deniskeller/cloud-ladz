/* eslint-disable react/no-unescaped-entities */
import { BaseContainer } from '@base/index';
import { Sidebar } from '@content/landing/index';
import { useRouter } from 'next/router';
import React from 'react';
import s from './PrivacyPolicy.module.scss';

const navbar_links = [
	'Personal Data',
	'Cookies And Passive Data Collection',
	'Personal Data',
	'Cookies And Passive Data Collection',
	'Links To Third Party Sites',
	'Azure Processing Service Providers',
	'Legal Requirements',
	'Change Of Ownership',
	'Security',
	'Privacy Complaints',
	'Revisions To This Policy',
];

const PrivacyPolicy: React.FC = () => {
	const router = useRouter();

	return (
		<div className={s.Wrapper}>
			<BaseContainer>
				<div className={s.Body}>
					<div className={s.Content}>
						<div className={s.Content_Header}>
							<span onClick={() => router.back()}>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 32 33'
									fill='none'
								>
									<path
										d='M13.3333 25.8337L4 16.5003M4 16.5003L13.3333 7.16699M4 16.5003L28 16.5003'
										stroke='#1E1E1E'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</svg>
							</span>

							<h1>Azure Processing Privacy Policy</h1>
						</div>

						<div className={s.Content_Subtitle}>
							<p>
								Questions concerning this information? Please email us
								info@cloudladz.com
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
							<h2>Personal Data</h2>
						</div>

						<ul>
							<li>
								We will not sell or market the email addresses or other
								collected personal information of registered Users to third
								parties. You acknowledge and agree that Azure Processing may
								occasionally send you administrative communications regarding
								your account or the Service via email.
							</li>
						</ul>

						<div className={s.Subtitle} id='section-2'>
							<h2>Cookies And Passive Data Collection</h2>
						</div>
						<ul>
							<li>
								Azure Processing uses cookie, IP address, and URL information to
								improve and further develop the Service, and to provide enhanced
								or geographically differentiated features and service levels to
								Users, where available. Azure Processing uses cookies to save
								User screen names, session validators, and on Users’ browsers
								and hard drives, and may use them to provide tailored products
								and services to those Users, as they become available. IP
								Addresses also help us diagnose network congestion, problems
								with our servers and otherwise assist in the administration and
								delivery of the Service to our Users.
							</li>
						</ul>

						<div className={s.Subtitle} id='section-3'>
							<h2>Personal Data</h2>
						</div>

						<ul>
							<li>
								Visitors and Clients of the Site and Services may interact with
								our Site in different ways. For example, Visitors are people who
								may visit the Site but not necessarily sign up to become a
								Client. We collect different information from Visitors than
								Clients, and vice versa.
							</li>
							<li>
								Clients – Clients interact with the Site and Services in a way
								which requires sending of application form so that the Client
								may then upload and incorporate additional information for use
								with the Services. Once you became the Azure Processing Client,
								you are not anonymous to Azure Processing. When signing up with
								Azure Processing, you provide Personal Data, which may include
								company name, industry, number of employees, phone number, your
								title, city, state, country, zip code, a user name, confirmed
								email address, and a password. Azure Processing may also record
								your IP address when you submit information. Azure Processing
								also may collect, at your option, certain preference and
								demographic information from you.
							</li>
							<li>
								All information collected by Azure Processing is used for
								internal purposes of providing the Service, providing support to
								users, and to improve services. Aggregating non-identifying
								information supplied by users allows Azure Processing to
								understand its user base and to improve services.
							</li>
							<li>
								All Users may opt to remove their Personal Data from our live
								database by contacting Azure Processing and canceling their
								Azure Processing user account. Users of the Azure Processing
								Services may also cancel their account at any time by sending a
								cancellation request in writing, either by mail or electronic
								mail.
							</li>
							<li>
								In addition to the information that we actively collect during
								registration, we passively collect some information from
								Visitors.
							</li>
							<li>
								Visitors – Visitors are people who do not actively provide
								content to the Site or Services. However, as described below,
								the site may still collect information from Visitors. Any
								information gathered from Visitors is also gathered from
								Clients.
							</li>
							<li>
								This information is restricted to cookies, IP addresses and
								referral URLs, and other passive information gathering devices,
								as explained below.
							</li>
						</ul>

						<div className={s.Subtitle} id='section-4'>
							<h2>Cookies And Passive Data Collection</h2>
						</div>

						<ul>
							<li>
								Azure Processing automatically receives and records information
								on our server logs from your browser, including your IP address,
								cookie information, and the page you request.
							</li>
							<li>
								Users should be aware that other websites visited before
								entering the Azure Processing websites might place Personal Data
								within a User’s URL during a visit to their website, and Azure
								Processing has no control over such websites. Accordingly, some
								of this information may be logged by Azure Processing.
							</li>
						</ul>

						<div className={s.Subtitle} id='section-5'>
							<h2>Links To Third Party Sites</h2>
						</div>

						<ul>
							<li>
								Azure Processing websites may contain links to other sites that
								are not under our control. These websites have their own
								policies regarding privacy. You should review those policies
								before visiting the websites. We have no responsibility for
								linked websites, and we provide these links solely for the
								convenience and information of our visitors.
							</li>
						</ul>

						<div className={s.Subtitle} id='section-6'>
							<h2>Azure Processing Service Providers</h2>
						</div>

						<ul>
							<li>
								Our primary use of any information that we collect from you is
								to provide you with the Services that you have paid for and
								which we advertise via the Site. In other words, we use the
								information for the purpose for which you provided it.
							</li>
							<li>
								With the limited exceptions found in the Special Cases section
								below, we will never sell, rent, or disclose your personal
								information without your permission. Personal information
								includes all information that you provide for use with your
								Clientship and which we actively collect.
							</li>
							<li>
								With that said, we also use portions of your information to
								deliver customized services to you. For example, information,
								which cannot personally identify you, and aggregate information,
								which may be collected both actively and passively, may be used
								to customize our marketing efforts or to customize the Site or
								Services for an aggregate group of customers. This aggregate
								information may be provided to third parties, such as our Site
								services providers, for the purpose of improving the user
								experience. We may also use the personal information of Clients
								whose membership has expired or has been cancelled in order to
								market our services to these individuals in the future.
							</li>
							<li>
								As explained below in discussing data security, we contract with
								certain third parties to provide you with the Site and Services.
								These parties may include billing processors, data centers for
								hosting the Site and Services, and other vendors needed to
								provide the Site and Services. While we expect that those
								third-parties will respect and keep private all information for
								which they have access, we cannot guarantee that data breaches
								or other unauthorized access to your information will not occur,
								despite our choosing vendors and contractors who we believe to
								share our commitment to securing your information.
							</li>
						</ul>

						<div className={s.Subtitle} id='section-7'>
							<h2>Legal Requirements</h2>
						</div>

						<ul>
							<li>
								Azure Processing does not disclose Personal Data, including the
								data associated with the Service, unless disclosure is necessary
								to comply with an enforceable governmental request such as a
								warrant.
								<ol>
									<li>
										We endeavor to not use or share personally-identifying
										information about you in ways unrelated to those described
										in this Policy without also providing you with an
										opportunity to opt-out or otherwise prohibit the unrelated
										uses. However, there may be special circumstances in which
										we need to disclose, with or without your knowledge,
										personal information about you, or information regarding
										your use of the Site or Services we believe that it is
										reasonable to do so, including:
									</li>
									<li>
										To satisfy any laws, regulations, or governmental, or legal
										requests for such information;
									</li>
									<li>
										To bring legal action against someone who may be violating
										our Terms & Conditions or other policies;
									</li>
									<li>
										If we are compelled to do so by lawful criminal, civil, or
										administrative process, subpoenas, or court orders.
									</li>
									<li>
										If we suspect credit card fraud or abuse, or other
										fraudulent activity.
									</li>
									<li>
										If we sell or transfer the Site or Services to a third
										party; however, we will first notify you to inform you of
										such sale or transfer.
									</li>
								</ol>
							</li>
						</ul>

						<div className={s.Subtitle} id='section-8'>
							<h2>Change Of Ownership</h2>
						</div>

						<ul>
							<li>
								In the event of a change in ownership, or a direct merger or
								acquisition with another entity, we reserve the right to
								transfer all of Azure Processing User information, including
								Personal Data, to a separate entity. We will use commercially
								reasonable efforts to notify you (by posting on our website or
								an email to the email address you provide when you register) of
								any change in ownership, merger or acquisition of Azure
								Processing’s assets by a third party, and you may choose to
								modify any of your registration information at that time.
							</li>
						</ul>

						<div className={s.Subtitle} id='section-9'>
							<h2>Security</h2>
						</div>
						<ul>
							<li>
								Azure Processing uses industry standard security measures to
								protect against the loss, misuse and alteration of the
								information under our control. Although we make good faith
								efforts to store the information collected by Azure Processing
								in a secure operating environment that is not available to the
								public, Azure Processing cannot guarantee complete security.
								Further, while we take reasonable steps to ensure the integrity
								and security of our network and systems, we cannot guarantee
								that our security measures will prevent third-party “crackers”
								from obtaining this information.
							</li>
						</ul>

						<div className={s.Subtitle} id='section-10'>
							<h2>Privacy Complaints</h2>
						</div>
						<ul>
							<li>
								If you have a dispute or complaint about privacy on a Azure
								Processing website, we kindly ask that you attempt first to
								resolve the issue directly with Azure Processing Support by
								email.
							</li>
							<li>
								We encourage you to contact us if you have any questions,
								concerns, or comments about this Policy or the Site or Services
								in general. You may contact us at
								info@azureprocessing.solutions.
							</li>
						</ul>

						<div className={s.Subtitle} id='section-11'>
							<h2>Revisions To This Policy</h2>
						</div>
						<ul>
							<li>
								Azure Processing reserves the right in our sole discretion to
								revise, amend, or modify this policy and our other policies and
								agreements at any time and in any manner. Notice of any
								revision, amendment, or modification of this policy will be
								posted on Azure Processing websites, and a User’s continued use
								of the Service will signify agreement to such changes.
							</li>
							<li>
								Registration or Use of The Service Signifies your Agreement to
								The Privacy Policy.
							</li>
							<li>Effective Date: August 1, 2020 up to 13, July 2023.</li>
						</ul>
					</div>

					<Sidebar navbar_links={navbar_links} />
				</div>
			</BaseContainer>
		</div>
	);
};

export default PrivacyPolicy;
