import { LegalPage } from "../components/legal/LegalPage";

const sections = [
	{ id: "platform", 
        title: "1. The Vrede Platform", 
        content: <>
        <p>Vrede is a learning and learning-management platform designed to make knowledge transfer easier by providing tools for facilitators and learners. The Platform may enable users to create Workspaces, Rooms, live and reusable learning experiences, tests, tasks, resource libraries, profiles and communications.</p> 
        <p>Vrede is a technology platform and does not, unless expressly stated otherwise, act as the provider, employer, accreditor or guarantor of any facilitator, course, training, class, assessment, certificate, academic result or other educational service made available through the Platform.</p>
        </> 
    },



	{ id: "eligibility", title: "2. Eligibility and Accounts", content: <>
        <p>You must provide accurate information required to create and maintain your account and keep your account information reasonably current. You are responsible for safeguarding your login credentials and for activities carried out through your account, except to the extent caused by Vrede’s failure to apply reasonable security measures.</p>
        <p>Where the Platform is used by minors, the applicable consent, supervision and data-protection requirements must be satisfied before use.</p>
        <p>You may register using email-based verification or supported third-party authentication such as Google Sign-In. Third-party authentication remains subject to the relevant provider’s terms and privacy practices.</p>
        </>
         },


	{ id: "roles", 
        title: "3. User Roles", content: <p>The Platform may assign or permit roles including Workspace Owner, Facilitator and Participant/Learner. Permissions are determined by the Platform’s functionality and the Workspace or Room settings. Users must not use permissions or administrative access for purposes outside those authorized by Vrede or the relevant Workspace.</p> 
    },
	
    { id: "workspaces", 
        title: "4. Workspaces, Rooms and Learning Activities", 
        content: <>
        <p>Workspace Owners and Facilitators may create and manage Rooms, classes, learning activities, tests, assignments and resources. Workspace Owners and Facilitators are responsible for managing their learning environments lawfully and fairly, including respecting participant privacy and intellectual property.</p>
        <p>Content, membership and activity within a Workspace or Room may be visible to other authorized members and, where a feature is expressly configured as public, to the public. Users should not publish information they do not want disclosed.</p> 
        </>
    },
	
    { id: "content", 
        title: "5. User Content and Intellectual Property", 
        content: 
        <>
        <p>You retain ownership of intellectual property rights you lawfully hold in content you upload, submit, publish or communicate through the Platform (“User Content”). Nothing in these Terms transfers ownership of your User Content to Vrede.</p>
        <p>You grant Vrede a non-exclusive, worldwide, royalty-free licence to host, store, reproduce, process, transmit, display, make available, back up and otherwise use User Content only to the extent reasonably necessary to provide, secure, maintain and improve the Platform and its relevant functionality, and to comply with law. Where content is shared only with specified users, Vrede will use reasonable measures consistent with the Platform’s design to make it available to those users.</p>
        <p>You represent that you have all rights, permissions and lawful bases necessary to upload, share or distribute User Content and that doing so does not infringe copyright, trademarks, privacy, confidentiality or other rights.</p>
        </>
    },


	{ id: "property", 
        title: "6. Vrede Intellectual Property", 
        content: <p>The Vrede name, logo, branding, software, website, mobile application, interface, platform design, documentation and original Vrede-created content are owned by or licensed to Vrede and are protected by applicable intellectual property laws. Except as expressly permitted, you may not copy, modify, distribute, reverse engineer, scrape, sell, license or exploit these materials.</p> 
    },
	
    { id: "educational", title: "7. Educational Content and Disclaimer", 
        content: <>
        <p>Vrede does not guarantee that a facilitator is qualified, that educational or teaching content is accurate or complete, that an assessment is academically valid, that a learner will achieve a particular result, or that a facilitator will provide any promised service. Users should exercise independent judgment when relying on educational content and interactions.</p>
        <p>Certificates, grades, scores, attendance records and other learning outcomes are not independently verified by Vrede unless expressly stated.</p>
        </> 
        },


	{ id: "third-party", title: "8. Third-Party Services and Content", 
        content: <>
        <p>The Platform may use or display third-party services or content, including Google Sign-In, Google Meet, YouTube, cloud/storage providers, analytics providers, AI services and other integrations. Third-party services may have their own terms and privacy policies. Vrede does not control and is not responsible for the availability, accuracy, security, legality, copyright status or privacy practices of third-party services or content.</p>
        <p>Where YouTube videos or other external materials are embedded or linked, Vrede does not claim ownership of those materials and their continued availability is controlled by the relevant third party.</p>
        </>
    },


	{ id: "ai", title: "9. AI-Enabled Features", 
        content: <p>Where AI features are made available, outputs may be incomplete, inaccurate, biased or unsuitable for a particular purpose. AI output is not guaranteed to be accurate or professionally authoritative. Users must review and independently assess AI-generated content before relying on it, particularly for academic, legal, financial, medical or other consequential decisions.</p> 
    },
	
    { id: "conduct", title: "10. Prohibited Conduct", content: 
            <ul>
            <li>• impersonating another person or creating fraudulent accounts;</li>
            <li>• harassing, threatening, abusing or unlawfully discriminating against another user;</li>
            <li>• uploading or distributing unlawful, infringing, defamatory, deceptive or malicious content;</li>
            <li>• accessing another person's account without authorization;</li>
            <li>• scraping or improperly collecting personal information;</li>
            <li>• introducing malware, malicious code or security vulnerabilities;</li>
            <li>• circumventing access controls or Platform security;</li>
            <li>• using the Platform for fraud, unlawful commercial activity or other unlawful purposes;</li>
            <li>• interfering with the operation or integrity of the Platform; and</li>
            <li>• using information obtained through the Platform in a manner contrary to law or the rights of the relevant person.</li>
            </ul>

    },


	{ id: "moderation", title: "11. Moderation, Suspension and Termination", 
        content: <>
        <p>Vrede may, where reasonably necessary, remove or restrict content, restrict functionality, investigate reports, suspend or terminate accounts, or remove users from Workspaces for violations of these Terms, unlawful conduct, security threats, fraud, intellectual-property infringement, misuse of personal information or repeated violations. Where appropriate, Vrede may provide notice and an opportunity to address the issue, but may act without prior notice where necessary to protect users, the Platform or comply with law.</p>
        <p>When an account is deleted or terminated, access to account and User Content may cease. Workspace content, records or communications may remain where another user or Workspace has lawful control of them, or where retention is required by law or necessary for legitimate security, dispute-resolution or compliance purposes.</p>
        </>

    },
	
    { id: "availability", title: "12. Availability and Changes", 
        content: <p>Vrede may modify, suspend or discontinue features or parts of the Platform. We do not guarantee uninterrupted or error-free availability. We may update these Terms from time to time. Material changes will be communicated through reasonable means where required. Continued use after the effective date of an updated version constitutes acceptance where legally permissible.</p>

     },
	
    { id: "privacy", title: "13. Privacy", 
        content: <p>Our processing of personal data is governed by the Vrede Data Privacy Policy and applicable Nigerian data-protection law, including the Nigeria Data Protection Act 2023. The Nigeria Data Protection Commission identifies rights including access, rectification, objection, restriction, portability, erasure and related rights under the Act.</p> 

    },

	{ id: "disputes", title: "14. Governing Law and Disputes", content: <p>These Terms are governed by the laws of the Federal Republic of Nigeria. Subject to any mandatory rights or remedies available under applicable law, the parties shall first attempt in good faith to resolve disputes through direct engagement. Unresolved disputes may be submitted to the courts of competent jurisdiction in Nigeria, unless the parties agree otherwise in writing.</p> },
    
] as const;

export default function TermsOfUse() {
	return <LegalPage title="Terms of Use" date="September 23rd 2026" intro="These Terms of Use explain the rules for using Vrede, including our website, application and related services. Please read them carefully." sections={sections} artPosition="right" />;
}