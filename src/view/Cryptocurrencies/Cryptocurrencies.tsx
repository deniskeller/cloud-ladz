import { BaseContainer } from '@base/index';
import { Navbar } from '@content/landing/index';
import React from 'react';
import s from './Cryptocurrencies.module.scss';

const Cryptocurrencies: React.FC = () => {
	return (
		<>
			<Navbar />
			<BaseContainer>
				<div className={s.Content}>
					<div className={s.Content_Title}>
						<h1>Cryptocurrencies, MCC 6012</h1>
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
							The merchant will need to have a license in place of registration
						</li>
						<li>Merchant must provide AML and KYC policies</li>
						<li>Merchant must provide clear company structure</li>
						<li>Merchant must provide liquidity agreement</li>
						<li>Merchant must provide utility bill for business owners</li>
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
									Add the policy that prohibit the registration of the US
									citizens and its territories and put it in the terms of use in
									the footer of the page;
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

export default Cryptocurrencies;
