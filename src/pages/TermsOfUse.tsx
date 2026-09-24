import { LegalPage } from "../components/legal/LegalPage";

const sections = [
	{ id: "platform", title: "The Vrede Platform", content: <p>Vrede provides tools for educators, learners and communities to organise classes, learning activities, resources and communication in one place.</p> },
	{ id: "eligibility", title: "Eligibility and Accounts", content: <p>You must provide accurate information, keep your login details secure and use Vrede only if you are legally able to enter into these terms.</p> },
	{ id: "roles", title: "User Roles", content: <p>Different roles may have different permissions. You are responsible for activity carried out through your account and for respecting the permissions assigned to others.</p> },
	{ id: "workspaces", title: "Workspaces, Rooms and Learning Activities", content: <p>Content and activity in a workspace or room should be relevant, lawful and respectful. Administrators may manage access, resources and participation within their spaces.</p> },
	{ id: "content", title: "User Content and Intellectual Property", content: <p>You retain ownership of content you submit. You give Vrede permission to host, display and process that content as needed to provide, secure and improve the Services.</p> },
	{ id: "property", title: "Vrede Intellectual Property", content: <p>The Services, including their design, branding, software and original content, belong to Vrede or our licensors. These terms give you a limited, personal, non-transferable right to use them.</p> },
	{ id: "educational", title: "Educational Content and Disclaimer", content: <p>Vrede is a platform and does not guarantee the accuracy, completeness or suitability of content shared by users. You should apply appropriate judgment when relying on educational materials.</p> },
	{ id: "third-party", title: "Third-Party Services and Content", content: <p>Vrede may link to or integrate with third-party services. Those services are governed by their own terms and privacy policies.</p> },
	{ id: "ai", title: "AI-Enabled Features", content: <p>Where available, AI-enabled features may produce inaccurate or incomplete results. Review outputs before relying on them, and do not submit sensitive information unless the feature expressly supports it.</p> },
	{ id: "conduct", title: "Prohibited Conduct", content: <p>Do not misuse Vrede, interfere with its operation, impersonate others, access accounts without permission, or post content that is illegal, harmful, abusive or infringes someone else's rights.</p> },
	{ id: "moderation", title: "Moderation, Suspension and Termination", content: <p>We may remove content or suspend access when necessary to protect the community, investigate misuse, maintain security or comply with the law. You can stop using Vrede at any time.</p> },
	{ id: "availability", title: "Availability and Changes", content: <p>We work to keep Vrede available and useful, but the Services are provided on an "as is" and "as available" basis. We may update the Services or these terms when our product or legal obligations change.</p> },
	{ id: "privacy", title: "Privacy", content: <p>Our <a href="/privacy">Data Privacy Policy</a> explains how we collect, use and protect personal information when you use the Services.</p> },
	{ id: "disputes", title: "Governing Law and Disputes", content: <p>These terms are governed by applicable law. If you have a question or concern, please contact us first at <a href="mailto:legal@vrede.app">legal@vrede.app</a> so we can try to resolve it.</p> },
] as const;

export default function TermsOfUse() {
	return <LegalPage title="Terms of Use" date="September 23rd 2026" intro="These Terms of Use explain the rules for using Vrede, including our website, application and related services. Please read them carefully." sections={sections} artPosition="right" />;
}