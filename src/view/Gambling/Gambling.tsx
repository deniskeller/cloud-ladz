/* eslint-disable react/no-unescaped-entities */
import { BaseContainer } from '@base/index';
import { Navbar } from '@content/landing/index';
import React from 'react';
import s from './Gambling.module.scss';

const Gambling: React.FC = () => {
	return (
		<>
			<Navbar />
			<BaseContainer>
				<div className={s.Content}>
					<div className={s.Content_Title}>
						<h1>Gambling, MCC 7995</h1>
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
						<li>
							Copy of Gambling License. From the provided documentation, it
							should follow that the applying company is officially owned by the
							company holding the gambling license. Approved Online Gambling
							Licenses: EU such a Malta, UK, Gibraltar, Isle of Man or any other
							jurisdiction
						</li>
						<li>
							Copy of Gambling License from Lotteries and Gambling Supervision
							Inspection of Latvia to operate in Latvian market and with Latvian
							companies
						</li>
						<li>Copy of Fraud Management Procedures (KYC, AML & PAYOUTS)</li>
						<li>
							Confirmation, on the Merchant’s Stationary, signed by the
							Director/Secretary, stating that the website is wholly owned and
							operated by the merchant (plus a “domain registration” document
							stating the official owner of the website; can be found online
						</li>
						<li>
							An ability to provide recommendation / reference / account
							statements from the previous bank-acquirer on the Bank’s demand
						</li>
						<li>URL with company contact information and registration data</li>
						<li>
							One language of European Union on a website (not to violate
							cross-boarding license)*
						</li>
						<li>
							Merchant must provide following corporate documents:
							<ol>
								<li>Certificate of incorporation;</li>
								<li>Article of association;</li>
								<li>Memorandum of association; </li>
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
							Website minimum requirements:
							<ol>
								<li>Working website (not under development);</li>
								<li>Terms of use on the website;</li>
								<li>
									Cancellation and refunds policy (obligatory by VISA and MC
									rules);
								</li>
								<li>SSL-certificate;</li>
								<li>
									The statement “Internet Gambling may be illegal in the
									jurisdiction in which you are located; if so, you are not
									authorized to use your payment card to complete this
									transaction”;
								</li>
								<li>
									A statement of the Cardholder's responsibility to know the
									laws concerning online gambling in his or her country of
									domicile;
								</li>
								<li>A statement prohibiting the participation of minors;</li>
								<li>
									A complete description of all of the following: Rules of play;
									Cancellation policies; Pay-out policies;
								</li>
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

export default Gambling;
