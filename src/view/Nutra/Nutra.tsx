import { BaseContainer } from '@base/index';
import { Navbar } from '@content/landing/index';
import React from 'react';
import s from './Nutra.module.scss';

const Nutra: React.FC = () => {
	return (
		<>
			<Navbar />
			<BaseContainer>
				<div className={s.Content}>
					<div className={s.Content_Title}>
						<h1>
							Nutra, pharmaceuticals, MCC 5122, 5912 (is possible also 5499)
						</h1>
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
						<li>One time sales</li>
						<li>
							Trial or subscription service is considered as the high risk due
							to large amount of chargebacks
						</li>
						<li>
							Each pharmaceutical merchant would be registered in MasterCard
							with MCC: 5122 or 5912 in MRP (MasterCard Registration Program) -
							$500 annual fee. Fee must be paid by merchant or IPSP
						</li>
						<li>
							In some cases, when using non-prescription drugs following MCC
							might be used: 5499 as a food supplement (not require registration
							MRP)
						</li>
						<li>
							Presence of a complete description of components (on the web page
							as well as in the official letter from the manufacturer)
						</li>
						<li>Presence of the merchants contract with supplier</li>
						<li>Presence of the manufacturers certificate/ license</li>
						<li>
							Presence of confirmation that this proposed product is a
							nutritional supplement and does not require licensing /
							registration, of the supervisory authority of the country in which
							the vendor is registered and in which there are sold
						</li>
						<li>
							An ability to provide documents from the shipping company /
							courier service confirming the shipment / delivery of goods on the
							Bank’s demand
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

export default Nutra;
