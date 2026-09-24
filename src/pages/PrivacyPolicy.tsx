import { LegalPage } from "../components/legal/LegalPage";

const sections = [
	{ id: "about", 
        title: "1. Personal data we may collect", 
        content: <><p>
            <strong>• Account data: </strong>
            name, email address, phone number where collected, authentication information and information received through Google Sign-In where used.</p>
            <p><strong>• Profile data:</strong> profile picture, biography, professional title, role, institution/organisation and connection links.</p>
            <p><strong>• Workspace and learning data:</strong> Workspaces created or joined, roles, Rooms, classes attended or conducted, Smart Classes, Video Lessons, resources accessed, tests, scores, attempts, assignments, submissions, progress and related activity.</p>
            <p><strong>• Teaching data: </strong> classes and learning experiences created, tests, assignments, uploaded resources and learners managed.</p>
            <p><strong>• Communications: </strong>Workspace/Room messages, replies, reactions and personal messages where enabled.</p></> 
    },

	{ id: "collection", 
        title: "2. How we collect data", 
        content: <p>We may collect information directly from you, automatically through your use of the Platform, from authentication providers where you choose third-party sign-in, and from Workspace or organisational administrators where their lawful use of the Platform involves managing participants.</p> 
    },


	{ id: "purposes", title: "3. Purposes and Lawful Bases", content: <><p>Depending on the circumstances, Vrede may process personal data to create and manage accounts; authenticate users; provide learning services; manage Workspaces and Rooms; facilitate learning and communications; manage tests and assignments; provide profiles; send service notifications; secure the Platform; prevent abuse; improve performance; understand usage; troubleshoot; provide support; and
                                                                            comply with legal obligations.</p>
        <p>The applicable lawful basis may include performance of a contract, compliance with a legal obligation, legitimate interests, consent, or another lawful basis recognized by applicable law. Vrede will not rely on consent where another lawful basis is more appropriate merely to avoid a legal requirement. Specific processing activities should be mapped to their applicable lawful basis in Vrede’s internal data inventory.
            </p></> 
    },
	


    { id: "visibility", 
        title: "4. Visibility and Sharing", 
        content: <><p>Information intentionally displayed in public profiles, public Workspaces, public Workspace activity or public professional links may be visible to other users or the public. Private account information should not automatically be exposed through a public profile.
        </p> 
        <p>Depending on the feature and the user’s settings, information may be shared with Workspace Owners, Facilitators, Participants/Learners, other authorized users, service providers, technology infrastructure providers, authentication providers, analytics providers and AI providers where implemented. Information may also be disclosed to regulators, law-enforcement bodies or other authorities where legally required or permitted.</p> </>
        },


	{ id: "third-party", title: "5. Third-Party Services and International Transfers", content: <><p>
        Vrede may use Google Sign-In, Google Meet, YouTube, email/OTP providers, cloud/storage infrastructure, analytics services, AI services and payment providers if implemented. The final provider list and categories of data shared must be confirmed by the technical team before publication.</p> 
        <p>Where a service provider processes personal data on Vrede’s behalf, Vrede will seek appropriate contractual and security safeguards. Where personal data is transferred outside Nigeria, Vrede will apply safeguards required by applicable Nigerian data-protection law.</p>
        </>
        },
	
    
    { id: "retention", title: "6. User Content", 
        content: <p>Users retain ownership of rights they hold in User Content. Vrede processes User Content to provide the service, including storing, hosting, processing, displaying, transmitting, backing up and making content available to authorized users as applicable. Users remain responsible for ensuring they have the right to upload and share such content.

        </p> 
        },



	{ id: "children", title: "7. Children and Younger Learners", 
        content: <p>Vrede may be used in educational settings involving younger learners. The minimum age for direct account registration and the parental/guardian consent process must be confirmed before launch. Vrede will apply any additional protections required by applicable law where children's personal data is processed.</p> 
    },

	{ id: "security", 
        title: "8. Data Security", content: <p>Vrede will implement appropriate technical and organisational measures designed to protect personal data against unauthorized or unlawful processing and accidental loss, destruction, alteration or disclosure. No online system can be guaranteed completely secure, and users should protect their credentials and notify Vrede promptly of suspected unauthorized access.</p>

     },

     { id: "rights", title: "9. Retention and Deletion", content: <><p>Based on Vrede’s current product brief, account data and User Content are intended to be retained while the account remains active and deleted when the user deletes the account, subject to legal, security, dispute-resolution or other lawful retention requirements. Workspace content may be retained where another user or Workspace has lawful control of the content or where retention is otherwise legally necessary.</p>
    <p>The actual deletion workflow, retention periods and exceptions should be confirmed with the technical team before publication.</p>
    </> },

	{ id: "cookies", title: "10. Cookies and Analytics", content: <>
    <p>The Platform may use cookies, identifiers and analytics technologies. The exact technologies, purposes, providers and consent controls must be confirmed before publication. Where consent is required, Vrede will provide an appropriate mechanism to obtain and withdraw consent.</p>
    </> },
	
    { id: "contact", title: "11. Data Subject Rights", 
        content: <><p>Subject to applicable law and relevant exceptions, data subjects may have rights to be informed, access personal data, request rectification, object to certain processing, request restriction, request portability, request erasure, withdraw consent where consent is the lawful basis, and complain to the Nigeria Data Protection Commission. The NDPC currently identifies these rights in its public guidance.</p>
        <p>Requests should be sent to vrede.team@gmail.com. Vrede may require reasonable information to verify the requester's identity and will respond within the period required by applicable law.</p>
        </>
     },



     { id: "communications", title: "12. Marketing and Communications", 
        content: <>
        <p>Vrede may send essential service communications concerning account activity, security, learning activity, support and service announcements. Marketing communications will be distinguished from essential service communications and will be subject to applicable consent/opt-out requirements.</p>
        </>
     },



     { id: "breaches", title: "13. Data Breaches", 
        content:
        <p>Where a personal-data breach occurs, Vrede will assess and respond to it in accordance with applicable law, including any notification obligations to the relevant regulator and affected data subjects where required.</p>
     },
	
    { id: "changes", title: "14. Changes to this Policy", content: <p>
        Vrede may update this Policy to reflect changes to the Platform, law or data practices. Material changes will be communicated through reasonable means where required. The effective date will be stated at the beginning of the updated Policy</p> 
        },
] as const;

export default function PrivacyPolicy() {
	return <LegalPage title="Data Privacy Policy" date="September 23rd 2026" intro="This Data Privacy Policy explains how VREDE LTD (“Vrede”, “we”, “us” or “our”) collects, uses, stores, discloses and protects personal data when you use Vrede, the website vrede.app, the mobile application and related services. Vrede operates in Nigeria and intends this Policy to support compliance with the Nigeria Data Protection Act 2023 (“NDPA”) and applicable data-protection requirements." sections={sections} artPosition="left" />;
}
