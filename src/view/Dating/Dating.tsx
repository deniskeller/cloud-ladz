import { BaseContainer } from '@base/index';
import { Navbar } from '@content/landing/index';
import React from 'react';
import s from './Dating.module.scss';

const Dating: React.FC = () => {
	return (
		<>
			<Navbar />
			<BaseContainer>
				<div className={s.Content}>
					<div className={s.Content_Title}>
						<h1>Dating, MCC 7273</h1>
					</div>

					<div className={s.Content_Subtitle}>
						<p>
							The following information must be provided by merchant to
							Financial Institution during onboarding process:
						</p>
					</div>

					<ul>
						<li>
							Company must be incorporated in European Union or the United
							Kingdom
						</li>
						<li>Merchant must provide test account funded with credits</li>
						<li>
							Merchant must provide agreements with each model that has account
							on website
						</li>
						<li>Passport of each model</li>
						<li>Age verification procedure detailed description</li>
						<li>
							Invoices for the purchase of goods and contracts with service
							providers
						</li>
						<li>Merchant must provide following corporate documents:</li>
						<li>
							One language of European Union on a website (not to violate
							cross-boarding license)*
						</li>
						<li>
							Each dating merchant would be registered in MasterCard with MCC:
							7273 in MRP (MasterCard Registration Program) - $500 annual fee.
							Fee must be paid by merchant or IPSP
						</li>
						<li>
							Merchant must provide following corporate documents:
							<ol>
								<li>Certificate of incorporation;</li>
								<li>Article of association;</li>
								<li>Memorandum of association;</li>
								<li>Shareholder register;</li>
								<li>
									Extract from register about directors and company dated no
									older than 15 days;
								</li>
								<li>
									Copies of passports (person who has sign rights and
									beneficiary owner);
								</li>
								<li>Banking details;</li>
								<li>Completed merchant questionnaire.</li>
							</ol>
						</li>
						<li>
							Policy description of how users personal data are stored and
							processed (for example age verification)
						</li>
						<li>
							Description of users monitoring system (IP-address tracking,
							countries, documents control that are uploaded by users)
						</li>
						<li>
							Website minimum requirements:
							<ol>
								<li>Working website (not under development);</li>
								<li>
									Notice of age restrictions and terms & conditions about users
									identification;
								</li>
								<li>Terms of use on the website;</li>
								<li>
									Cancellation and refunds policy (obligatory by VISA and MC
									rules);
								</li>
								<li>SSL-certificate;</li>
								<li>
									Contacts section must contain following information: company
									contact information (phone number, email and etc.), company
									legal name with registration number and all other details;
								</li>
								<li>Placed VISA and MasterCard logotypes on main page;</li>
								<li>
									Payment methods description with available currency /
									currencies;
								</li>
								<li>Confidentiality agreement;</li>
								<li>Copyright;</li>
								<li>
									Obligatory presence of “Tick box” at the moment of payment for
									goods or services by the user, that he has read and agree with
									the terms & conditions and return policy.
								</li>
							</ol>
						</li>
					</ul>

					<div className={s.Content_Note}>
						<p>* Not all acquiring banks are asking this.</p>
					</div>
				</div>
			</BaseContainer>
		</>
	);
};

export default Dating;
