/* eslint-disable react/no-unescaped-entities */
import { BaseContainer } from '@base/index';
import { Sidebar } from '@content/landing/index';
import { useRouter } from 'next/router';
import React from 'react';
import s from './TermsAndConditions.module.scss';

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

const TermsAndConditions: React.FC = () => {
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

							<h1>Cloud Ladz Terms and Agreements</h1>
						</div>

						<div className={s.Content_Subtitle}>
							<p>
								Questions concerning this information? Please email us
								info@cloudladz.com
							</p>
						</div>

						<p>
							THIS AGREEMENT is made as of the legal entity or sole
							proprietorship (hereinafter referred to as the “Principal")
							identified in and having its principal office at the address
							(hereinafter “Principal Address") specified in the Principal
							Application (aka “Application”) submitted to/on this
							website/portal (hereinafter “Site”) and Cloud Ladz card processing
							solutions (UK Company reg. number 12108869, located at 17 state
							street, suite 4000 NEW YORK 10004 NY United States (hereinafter
							referred to as the “Agent").
						</p>

						<p>
							WHEREAS the Principal desires to appoint the Agent on the terms
							herein as the agent for the limited purpose of conducting
							negotiations and entering into agreements with financial and
							credit institutions providing payment services on behalf of the
							Principal and for Principal’s account and the Agent wishes to
							provide certain services as an Agent on the terms herein to the
							Principal as set forth in this Agreement;
						</p>

						<p>
							NOW IN CONSIDERATION OF THE MUTUAL COVENANTS AND THE PREMISES
							HEREIN CONTAINED AND FOR OTHER GOOD AND VALUABLE CONSIDERATION,
							THE SUFFICIENCY OF WHICH IS HEREBY ACKNOWLEDGED, IT IS HEREBY
							AGREED BETWEEN THE PARTIES HERETO as follows:
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
								<ol>
									<li>
										to search for the banks, payment processors, payment
										transmitters or other financial and credit institutions
										providing payment services and to conduct negotiations aimed
										at the provision of the Payment services;
									</li>
									<li>
										if requested by the Principal to receive payments in
										Principal’s favour from third parties (Principal’s
										Customers) and transmit received funds to the Principal
										according to the Principal’s orders. In case there are no
										special orders, the Agent shall transfer the sum received
										from the Principal’s Customers during reporting month within
										the 10 (ten) days following the reporting month;
									</li>
									<li>
										to reports the total amount of money received from the
										Principal’s Customers in the reporting month and submit such
										report within 10 (ten) days following the reporting month.
									</li>
								</ol>
							</li>
						</ul>

						<div className={s.Subtitle} id='section-3'>
							<h2>Provision of the Remuneration by the Principal</h2>
						</div>

						<ul>
							<li>
								a) On entering into Payment services agreement with the new
								Payment Institution the Agent shall be entitled to a
								remuneration.
							</li>
							<li>
								b) The remuneration payable to the Agent in respect of entering
								into the Payment services agreement with the new Payment
								Institution shall be agreed individually and paid by an invoice
								until otherwise agreed by the Parties hereto.
							</li>
							<li>
								c) The Agent’s remuneration shall be payable in full within 30
								business days following the effective date of the Payment
								services agreement closed by the Agent with the Payment
								Institution until otherwise agreed by the Parties hereto.
							</li>
							<li>
								d) The Agent shall not be solely responsible for any and all
								taxes assessments levies duties rents and other exactions or
								payments required to be paid to any authority on or in respect
								of all monies paid by the Principal to the Agent.
							</li>
							<li>
								e) All payments under this Agreement shall be in EUR and
								remitted by wire transfer to the Agent’s account and the
								Principal shall be responsible for any delay and for any and
								charges for the said remittance shall be borne by the Principal.
							</li>
						</ul>

						<div className={s.Subtitle} id='section-4'>
							<h2>Terms of providing the Services</h2>
						</div>

						<ul>
							<li>
								The Agent shall provide the Services on the terms herein to the
								Principal on a professional basis and shall be free to provide
								its services to third parties during the Term of this Agreement
								provided to the Principal hereunder.
							</li>
						</ul>

						<div className={s.Subtitle} id='section-5'>
							<h2>Dealing with third persons</h2>
						</div>
						<ul>
							<li>
								In order to fulfil the obligations assumed under Agreement the
								Agent has the right to engage Subagents (hereafter referred to
								as the “Subagents”). The Subagents shall be selected in a manner
								that ensures that entering and executing of any respective
								agreement between such Subagents and the Agent complies with
								applicable laws and regulations. The Agent shall conduct
								business with the Subagents in its own name and shall be
								reasonable for its obligations before such Subagents .
							</li>
						</ul>

						<div className={s.Subtitle} id='section-6'>
							<h2>Ownership of Intellectual Property and Work Product</h2>
						</div>
						<ul>
							<li>
								a) The Agent acknowledges and agrees that all materials,
								including but not limited to any and all written material,
								graphs, diagrams, drawings, software, software packages, data,
								correspondence and other documents, artwork, photographic
								images, video or audio materials and/or recordings, in digital
								form or magnetically or optically encoded materials prepared
								and/or obtained by the Agent from the Principal in relation to
								the Principal operations and/or in the delivery of the Services
								in all forms of media or data whatsoever whether now known or
								hereafter devised as well as any and all rights of any nature
								whatsoever pertaining to and/or arising in connection with such
								materials, including, without limitation, any intellectual
								property rights (collectively the “Materials”), remain the sole
								and exclusive property of the Principal. The Principal grants
								the Agent with the limited, personal, non-exclusive,
								non-sublicensable, non-assignable license to use the Materials
								for the term of this Agreement only.
							</li>
							<li>
								b) Upon termination of the Services and/or the expiry in the
								normal course or the termination of this Agreement, or at the
								request of the Principal prior to such expiry or termination,
								the Agent shall promptly return and/or deliver to the Principal
								any and all software programs, documents, books, disks and
								diskettes, drawings, graphs, photographs, magnetic tapes and
								microfilms, video or audio materials or any other Materials of
								any kind or nature, and/or any and all materials of any kind in
								relation to the intellectual property in its possession which
								have been obtained by the Agent from or through the Principal in
								the course of performance of this Agreement. Any such Materials
								which are not practicable to return shall be destroyed by the
								Agent, and the Agent shall certify such destruction in writing
								to the Principal.
							</li>
						</ul>

						<div className={s.Subtitle} id='section-7'>
							<h2>Confidential Information</h2>
						</div>
						<ul>
							<li>
								a) The Parties hereby acknowledge that in connection with
								performance of this Agreement each Party (as the “Receiving
								Party”) may receive information from the other Party (the
								“Disclosing Party”) which is non-public including, without
								limitation, business plans, financial information, customer
								data, computer programs, proprietary software, etc. Such
								information shall be deemed “Confidential Information” under
								this Agreement regardless of the form in which it is provided
								and whether expressly marked as confidential upon provision or
								not.
							</li>
							<li>
								b) The following information shall may not be deemed as
								Confidential Information under this Agreement (subject to the
								burden of proof of existence of the respective conditions lying
								on the Receiving Party):
							</li>
							<li>
								(i) Information that was obtained by the Receiving Party from a
								third party without confidentiality restrictions preventing the
								use in question,
							</li>
							<li>
								(ii) Information that was discovered by the Receiving Party
								without any use of the Confidential Information in question,
							</li>
							<li>
								(iii) Information that is and/or became public through no fault
								of the Receiving Party.
							</li>
							<li>
								c) The Receiving Party agrees that it shall not use Confidential
								Information and/or divulge it to any members of its staff,
								management and to the Payment Institution for purposes other
								than performance of its respective obligations under the
								Agreement, shall not communicate Confidential Information in any
								form or way to any third party, unless specifically authorized
								by the Disclosing Party in writing to do so, and shall safeguard
								Confidential Information with a degree of care, which is neither
								less than that, exercised by the Receiving Party with respect to
								its own information of confidential nature, nor less than the
								reasonable degree of care.
							</li>
							<li>
								d) Limitations set forth in Subclause 7(c) above shall not apply
								to any Confidential Information, which is to be communicated as
								per duly executed demand of a court or any other applicable
								authority of relevant jurisdiction (a “Disclosure Order”),
								provided that:
							</li>
							<li>
								(i) The Receiving Party has notified the Disclosing Party of
								such Disclosure Order as soon (and if) practicable,
							</li>
							<li>
								(ii) The Receiving Party has provided the Disclosing Party with
								full assistance (at the Disclosing Party’s expense) in defending
								and/or limiting such Disclosure Order,
							</li>
							<li>
								(iii) The Receiving Party discloses only such portion of
								Confidential Information, as necessary under the Disclosure
								Order (subject to any alterations to the foregoing as the result
								of actions taken by the Disclosing Party to defend and/or limit
								it).
							</li>
							<li>
								e) The Receiving Party shall be bound by confidentiality
								obligations set forth in this Clause 4 throughout the entire
								Term and for the further period of 2 years following the expiry
								or termination of this Agreement for any reason whatsoever.
							</li>
							<li>
								f) Without limitation to generality of the provisions of this
								Clause, it is hereby expressly stipulated, that any information
								relating to any Product shall be deemed Confidential Information
								of the Principal for the purpose of this Agreement.
							</li>
						</ul>

						<div className={s.Subtitle} id='section-8'>
							<h2>Termination</h2>
						</div>

						<ul>
							<li>
								The Principal may terminate this Agreement and cancel the
								Agent's Services and powers hereunder without cause or for any
								reason upon giving the Principal seven days’ notice of the
								intent to terminate and without further obligation to the Agent
								except for payment due for Services performed to the date of
								such termination. The Agent may terminate this agreement for any
								reason upon giving the Principal one month’s notice of the
								intent to terminate. Each Party agrees that upon termination by
								either Party, it shall promptly return to the other any and all
								embodiments of Confidential Information it has obtained as the
								Receiving Party under this Agreement. When such return is not
								practicable, such Party shall destroy the respective embodiments
								of Confidential Information and shall certify such destruction
								to the other Party in writing.
							</li>
						</ul>

						<div className={s.Subtitle} id='section-9'>
							<h2>Representations and Warranties</h2>
						</div>
						<ul>
							<li>
								The Agent hereby represents, warrants and covenants to the
								Principal that:
							</li>
							<li>
								a) it has the right and capacity to enter into this Agreement
								and fully perform all of its obligations hereunder;
							</li>
							<li>
								b) is not wound-up nor bankrupt nor insolvent and is properly
								constituted and incorporated or not suffering from any illegal
								incapacity to enter into this Agreement;
							</li>
							<li>
								c) It will not act in any manner that jeopardizes the rights of
								the Principal;
							</li>
							<li>
								d) it shall not incur any cost expense, liability or obligation
								in the name of or on the credit of the Principal, except in
								accordance with the instructions and authorization of the
								Principal;
							</li>
							<li>
								e) No action of the Agent in the course of performance of this
								Agreement shall cause the Principal, any Materials or Services
								to be in breach of any third party right including, without
								limitation, intellectual property rights, and/or any applicable
								law.
							</li>
						</ul>

						<div className={s.Subtitle} id='section-10'>
							<h2>Indemnification</h2>
						</div>

						<ul>
							<li>
								The Agent shall not be responsible in any circumstances to the
								Principalor any third party for any indirect or consequential or
								inconsequential or economic damage or loss, howsoever caused,
								whether as a result of negligence, misrepresentation, breach of
								contract or otherwise.
							</li>
							<li>
								The Principal shall indemnify the Agent against any and all
								losses, costs, liabilities, damages and expenses (including
								reasonable lawyers’ fees) resulting from the Principal’s breach
								of this agreement and any of the Payment services agreements.
							</li>
						</ul>

						<div className={s.Subtitle} id='section-11'>
							<h2>Notice</h2>
						</div>
						<ul>
							<li>
								Any notice required or permitted to be given hereunder shall be
								given by personal delivery or registered mail and shall be
								deemed given (i) when delivered personally to any officer of the
								party being notified; or (ii) on the third business day after
								being sent by registered mail and addressed to the respective
								parties at their respective addresses.
							</li>
						</ul>

						<div className={s.Subtitle} id='section-12'>
							<h2>No Assignment</h2>
						</div>
						<ul>
							<li>
								This Agreement is non-assignable by the Agent. This Agreement
								shall inure to the benefit of the Principal’s successors,
								assignees, licensees, grantees and associated, affiliated and
								subsidiary companies. The Principal and any subsequent assignee
								may freely assign this Agreement, in whole or in part, to any
								party provided that such party assumes and agrees in writing to
								keep and perform all of the obligations of the Principal
								hereunder.
							</li>
						</ul>

						<div className={s.Subtitle} id='section-13'>
							<h2>Severance</h2>
						</div>
						<ul>
							<li>
								Any Section or Subsection or any other provision of this
								Agreement which is, or becomes, illegal, invalid or
								unenforceable shall be severed herefrom and shall be ineffective
								to the extent of such illegality, invalidity or unenforceability
								and shall not affect or impair the remaining provisions hereof
								which shall continue in full force and effect.
							</li>
						</ul>

						<div className={s.Subtitle} id='section-14'>
							<h2>Entire Agreement</h2>
						</div>
						<ul>
							<li>
								a) This Agreement (including the recitals, the Schedules, and
								the amendments jointly agreed to in writing contained herein)
								constitutes the entire agreement between the Parties pertaining
								to the subject matter hereof and supersedes all prior
								agreements, understandings, negotiations, and discussions,
								whether oral or written, of the Parties in the event of
								discrepancy between them.
							</li>
							<li>
								b) No amendment, modification or waiver of this Agreement shall
								be binding unless duly executed in writing by the Parties. No
								oral collateral contract and/or parole evidence shall be allowed
								or admitted in a court of law or elsewhere to howsoever
								contradict or add to or vary or alter or amend the terms herein
								nor to construct nor set-up any alleged equity accruing
								howsoever to the Agentin the demised premises or at all.
							</li>
							<li>
								c) Notwithstanding anything to the contrary herein contained,
								the Principal shall have the unilateral and sole right to issue
								written supplementary terms and conditions in addition to the
								Term herein without ascribing any reasons for the same.
							</li>
						</ul>

						<div className={s.Subtitle} id='section-15'>
							<h2>Waiver</h2>
						</div>
						<ul>
							<li>
								No waiver of any breach of any provision of this Agreement will
								be effective or binding unless in writing and signed by the
								parties. No waiver of any of the provisions of this Agreement
								shall be deemed to constitute a waiver of any other provisions
								unless otherwise expressly provided in writing by the Parties.
							</li>
						</ul>

						<div className={s.Subtitle} id='section-16'>
							<h2>Governing Law and Arbitration</h2>
						</div>
						<ul>
							<li>
								All disputes arising out of or in connection with the present
								contract shall be finally settled in Riga (Latvia) under the
								Rules of the Latvian Republic Court in accordance with the said
								Rules and the Parties hereto submit to the jurisdiction of the
								Courts and laws of Latvia in respect of any matter arising from
								or relating to the said.
							</li>
						</ul>

						<div className={s.Subtitle} id='section-17'>
							<h2>Counterparts</h2>
						</div>
						<ul>
							<li>
								This Agreement may be executed in counterparts in the same form
								and such parts as so executed shall together form one original
								document and be read together and construed as if one copy of
								this Agreement had been executed. Execution and delivery of this
								Agreement by fax transmission shall constitute legal and binding
								execution and delivery of this Agreement.
							</li>
						</ul>

						<div className={s.Subtitle} id='section-18'>
							<h2>Legal Counsel</h2>
						</div>
						<ul>
							<li>
								Each Party acknowledges that it has read and understood the
								Agreement in its entirety and signs this Agreement voluntarily,
								having had the opportunity to seek independent legal advice on
								the matters contained herein.
							</li>
						</ul>

						<div className={s.Subtitle} id='section-19'>
							<h2>Force Majeure</h2>
						</div>
						<ul>
							<li>
								Neither Party shall be liable for any delay or failure to
								perform its obligations under this Agreement caused by
								circumstances which are beyond the control of such Party, which
								have arisen without the fault or negligence of the foregoing and
								prevent it from due performance of its obligation under this
								Agreement (“Force-majeure”), unless the Party affected by such
								Force-majeure was or should have been aware of the foregoing
								events and their potential effect on its performance of the
								Agreement at the time of its signing. Force majeure events
								include but are not limited to: war (declared or undeclared),
								flood, fire, earthquake or other natural disaster, military
								actions, riot, civil commotion, government actions, acts of God,
								fire, blockades, labor disturbances, strikes, insurrections,
								earthquakes, acts of terrorism and other.
							</li>
							<li>
								The suspension of performance may not be of longer duration than
								is reasonably required given the nature of the Force Majeure
								event.
							</li>
							<li>
								The affected party shall give the other Party a written notice
								of the Force Majeure as soon as practicable following such
								occurrence. The notice should include the time when the event
								started and the expected duration of its effect on the
								performance of this Agreement. As soon as the affected Party is
								able to resume performance of the obligations affected by the
								Force Majeure, such Party shall give the other Party a written
								notice to that effect and shall promptly resume performance
								hereunder. The affected Party may not claim the Force majeure
								circumstances as the reason for its non-performance under this
								Agreement beyond the time period, during which the event in
								question reasonably effects such performance.
							</li>
						</ul>

						<div className={s.Subtitle} id='section-20'>
							<h2>Interpretation</h2>
						</div>
						<ul>
							<li>In this Agreement where the context so admits:-</li>
							<li>
								a) "the Principal" shall include their heirs, personal
								representatives, successors and assigns;
							</li>
							<li>
								b) "the Agent" shall include their heirs, personal
								representatives, successors and assigns;
							</li>
							<li>
								c) "the Parties" means the Principal and the Agent and their
								respective heirs, personal representatives, successors and
								assigns;
							</li>
							<li>
								d) "the Agreement" means this Agreement including the Schedules
								hereto;
							</li>
							<li>
								e) words importing the masculine gender shall be deemed to
								include the feminine and neuter genders and the singular to
								include the plural and vice versa; and
							</li>
							<li>
								f) words importing to human beings or person include any body or
								persons corporate or unincorporated and vice versa.
							</li>
						</ul>

						<p>Privacy Complaints</p>

						<p>
							If you have a dispute or complaint about Terms & Agreements on a
							Azure Processing website, we kindly ask that you attempt first to
							resolve the issue
						</p>

						<p>directly with Azure Processing Support by email.</p>

						<p>
							We encourage you to contact us if you have any questions,
							concerns, or comments about this Terms & Agremenets or the Site or
							Services in general. You may contact us at
							info@azureprocessing.solutions.
						</p>

						<p>Revisions To This Terms & Agreements</p>

						<p>
							Azure Processing reserves the right in our sole discretion to
							revise, amend, or modify this Terms & Agreements and our other
							policies and agreements at any time and in any manner. Notice of
							any revision, amendment, or modification of this policy will be
							posted on Azure Processing websites, and a User’s continued use of
							the Service will signify agreement to such changes.
						</p>

						<p>
							Registration or Use of The Service Signifies your Agreement to
							Terms & Agreements.
						</p>

						<p>Effective Date: August 1, 2020 up to 13 July 2023.</p>
					</div>

					<Sidebar navbar_links={navbar_links} />
				</div>
			</BaseContainer>
		</div>
	);
};

export default TermsAndConditions;
