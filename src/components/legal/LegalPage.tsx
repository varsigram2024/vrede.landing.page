import { useEffect, useState, useRef, type ReactNode } from "react";

type LegalSection = {
	id: string;
	title: string;
	content: ReactNode;
};

type LegalPageProps = {
	title: string;
	date: string;
	intro: string;
	sections: readonly LegalSection[];
	artPosition?: "left" | "right";
};

export function LegalPage({ title, date, intro, sections, artPosition = "left" }: LegalPageProps) {
	const [isContentsOpen, setIsContentsOpen] = useState(false);
	const [activeSection, setActiveSection] = useState(sections[0]?.id ?? "");
	const isNavigatingRef = useRef(false);
	const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

	// Get active section index & title for closed mobile card
	const activeIndex = sections.findIndex((s) => s.id === activeSection);
	const currentActiveSection = sections[activeIndex >= 0 ? activeIndex : 0];

	useEffect(() => {
		const headings = sections
			.map(({ id }) => document.getElementById(id))
			.filter((heading): heading is HTMLElement => Boolean(heading));
		if (!headings.length) return;

		const observer = new IntersectionObserver(
			(entries) => {
				// Don't update active state if user just clicked a TOC link
				if (isNavigatingRef.current) return;

				const visible = entries
					.filter((entry) => entry.isIntersecting)
					.sort((a, b) => Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top))[0];

				if (visible) {
					setActiveSection(visible.target.id);
				}
			},
			{ rootMargin: "-15% 0px -55% 0px", threshold: [0, 0.2, 0.5, 0.8, 1] }
		);

		headings.forEach((heading) => observer.observe(heading));
		return () => observer.disconnect();
	}, [sections]);

	const navigateToSection = (
		event: React.MouseEvent<HTMLAnchorElement>,
		id: string
	) => {
		event.preventDefault();

		setActiveSection(id);
		setIsContentsOpen(false);

		// Lock observer updates during smooth scroll jump
		isNavigatingRef.current = true;
		if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);

		const section = document.getElementById(id);

		if (section) {
			section.scrollIntoView({
				behavior: "smooth",
				block: "start",
			});

			window.history.replaceState(null, "", `#${id}`);
		}

		// Unlock observer after smooth scroll finishes
		scrollTimeoutRef.current = setTimeout(() => {
			isNavigatingRef.current = false;
		}, 800);
	};

	return (
		<div className="legal-page">
			<style>{`
				.legal-page { --legal-ink:#211f22; --legal-muted:#656066; --legal-red:#8d001c; --legal-pink:#fff3f5; --legal-active-bg:#fde8ed; min-height:100vh; color:var(--legal-ink); background:#fff; font-family:"Aeonik", ui-sans-serif, system-ui, sans-serif; }
				.legal-page * { box-sizing:border-box; }
				.legal-header { height:56px; display:flex; align-items:center; justify-content:space-between; padding:0 clamp(24px, 6vw, 72px); border-bottom:1px solid #f0e9eb; background:#fffafb; }
				.legal-brand { display:flex; align-items:center; gap:6px; color:var(--legal-ink); font-size:13px; font-weight:700; text-decoration:none; }
				.legal-brand img { width:17px; height:auto; }
				.legal-cta { display:inline-flex; align-items:center; gap:7px; padding:9px 12px; border-radius:4px; color:#fff; background:var(--legal-red); font-size:9px; font-weight:700; text-decoration:none; }
				
				.legal-hero { display:flex; flex-direction:row; align-items:center; justify-content:center; gap:clamp(32px, 6vw, 100px); min-height:clamp(220px, 26vw, 320px); padding:clamp(32px, 5vw, 64px) clamp(24px, 6vw, 72px); }
				.legal-hero-art { flex:0 1 320px; width:min(280px, 32vw); }
				.legal-hero-art img { display:block; width:100%; height:auto; }
				.legal-hero-copy { flex:1 1 420px; max-width:min(92%, 480px); }
				.legal-hero.art-right { flex-direction:row-reverse; }

				.legal-breadcrumb { margin:0 0 17px; color:var(--legal-muted); font-size:9px; }
				.legal-breadcrumb strong { color:var(--legal-red); font-weight:700; }
				.legal-hero h1 { max-width:100%; margin:0; font-size:clamp(32px, 4.2vw, 56px); line-height:1.03; letter-spacing:-.03em; font-weight:700; }
				.legal-hero-copy > p:first-of-type { margin:14px 0 0; color:var(--legal-muted); font-size:clamp(12px, 1vw, 13px); font-weight:700; }
				.legal-hero-copy > p:last-child { max-width:100%; margin:10px 0 0; color:#4c484d; font-size:clamp(13px, 1.1vw, 15px); line-height:1.6; }
				.legal-body { background:var(--legal-pink); padding:clamp(40px, 6vw, 80px) clamp(24px, 6vw, 72px) clamp(56px, 8vw, 96px); }
				.legal-body-inner { display:grid; grid-template-columns:minmax(180px, 220px) minmax(0, 1fr); gap:clamp(28px, 5vw, 64px); max-width:1120px; margin:0 auto; align-items:start; }
				
				.legal-toc { position:sticky; top:20px; align-self:start; padding:16px 14px; border:1px solid #f0dfe3; border-radius:8px; background:#fff; }
				.legal-toc-label { display:block; margin-bottom:14px; font-size:10px; text-transform:uppercase; letter-spacing:0.05em; font-weight:700; color:var(--legal-muted); }
				.legal-toc a { display:block; padding:8px 10px; color:#575257; font-size:12.5px; line-height:1.4; text-decoration:none; border-radius:5px; }
				.legal-toc a.active { color:var(--legal-red); background:#ffdce5; font-weight:700; }
				.legal-toc a:hover { color:var(--legal-red); }
				
				.legal-content { min-width:0; font-size:clamp(14px, 1vw, 16px); line-height:1.7; text-align:left; align-self: stretch; }
				.legal-content section { scroll-margin-top:25px; margin-bottom:clamp(28px, 3vw, 40px); }
				.legal-content h2 { margin:0 0 12px; font-size:clamp(18px, 1.8vw, 22px); line-height:1.25; font-weight:700; }
				.legal-content p { margin:0 0 14px; color:#4f4a4f; }
				.legal-content ul { margin:6px 0 16px; padding-left:19px; color:#4f4a4f; }
				.legal-content li { margin:8px 0; padding-left:3px; }
				.legal-content a { color:var(--legal-red); font-weight:700; }

				/* Mobile Components */
				.legal-mobile-card { display:none; }
				.legal-mobile-backdrop { display:none; }
				.legal-mobile-drawer { display:none; }

				/* Tablet: narrow the TOC before dropping to the mobile drawer */
				@media (max-width: 1024px) and (min-width: 721px) {
					.legal-body-inner { grid-template-columns: minmax(150px, 180px) minmax(0, 1fr); }
					.legal-hero-art { width: min(220px, 30vw); }
				}

				@media (max-width: 720px) {
					.legal-hero,
					.legal-hero.art-right {
						flex-direction: column;
						gap: 18px;
						min-height: auto;
						padding: 27px 18px 24px;
					}
					.legal-hero-art { flex: none; width: min(240px, 70vw); }
					.legal-hero-copy { flex: none; width: 100%; max-width: none; text-align: left; }
					
					.legal-body-inner { grid-template-columns: 1fr; }
					.legal-toc { display: none; }

					/* Scroll Margin Offset for Sticky Card */
					.legal-content section {
						scroll-margin-top: 110px;
					}

					/* Sticky Mobile Card Container */
					.legal-mobile-card {
						display: block;
						position: sticky;
						top: 12px;
						z-index: 10;
						background: #ffffff;
						border: 1px solid #eddfe2;
						border-radius: 12px;
						padding: 14px 16px;
						margin-bottom: 24px;
						cursor: pointer;
						box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
					}
					.legal-mobile-card-header {
						display: flex;
						align-items: center;
						justify-content: space-between;
						font-size: 11px;
						font-weight: 700;
						letter-spacing: 0.05em;
						text-transform: uppercase;
						color: #211f22;
					}
					.legal-mobile-card-chevron {
						font-size: 14px;
						color: #211f22;
					}
					.legal-mobile-card-divider {
						height: 1px;
						background: #f0e9eb;
						margin: 10px 0;
					}
					.legal-mobile-card-active {
						font-size: 13px;
						font-weight: 700;
						color: var(--legal-red);
					}

					/* Open State: Mobile Bottom Sheet Modal */
					.legal-mobile-backdrop {
						display: block;
						position: fixed;
						inset: 0;
						background: rgba(0, 0, 0, 0.4);
						backdrop-filter: blur(2px);
						z-index: 1000;
						opacity: 0;
						pointer-events: none;
						transition: opacity 0.25s ease;
					}
					.legal-mobile-backdrop.open {
						opacity: 1;
						pointer-events: auto;
					}

					.legal-mobile-drawer {
						display: flex;
						flex-direction: column;
						position: fixed;
						left: 0;
						right: 0;
						bottom: 0;
						max-height: 80vh;
						background: #ffffff;
						border-radius: 20px 20px 0 0;
						padding: 12px 20px 24px;
						z-index: 1001;
						box-shadow: 0 -8px 32px rgba(0, 0, 0, 0.15);
						transform: translateY(100%);
						transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
					}
					.legal-mobile-drawer.open {
						transform: translateY(0);
					}

					.legal-mobile-handle {
						width: 36px;
						height: 4px;
						background: #dcd6d8;
						border-radius: 2px;
						margin: 0 auto 12px;
						flex-shrink: 0;
					}

					.legal-mobile-drawer-header {
						display: flex;
						align-items: center;
						justify-content: space-between;
						padding-bottom: 12px;
						border-bottom: 1px solid #f0e9eb;
						margin-bottom: 8px;
						flex-shrink: 0;
					}
					.legal-mobile-drawer-title {
						font-size: 11px;
						font-weight: 700;
						letter-spacing: 0.05em;
						text-transform: uppercase;
						color: #211f22;
					}
					.legal-mobile-drawer-close {
						border: none;
						background: none;
						font-size: 16px;
						font-weight: 700;
						color: #211f22;
						cursor: pointer;
						padding: 2px 6px;
						line-height: 1;
					}

					.legal-mobile-drawer-list {
						display: flex;
						flex-direction: column;
						gap: 2px;
						overflow-y: auto;
						padding-right: 2px;
					}
					.legal-mobile-drawer-list a {
						display: block;
						padding: 10px 12px;
						font-size: 13px;
						line-height: 1.4;
						color: #333;
						text-decoration: none;
						border-radius: 8px;
						font-weight: 500;
						transition: background 0.15s ease, color 0.15s ease;
					}
					.legal-mobile-drawer-list a.active {
						background: var(--legal-active-bg);
						color: var(--legal-red);
						font-weight: 700;
					}
				}
			`}</style>

			<header className="legal-header">
				<a className="legal-brand" href="/"><img src="/images/logo.svg" alt="" /> Vrede</a>
				<a className="legal-cta" href="/early-access">Request Early Access <span aria-hidden="true">-&gt;</span></a>
			</header>

			<section className={`legal-hero ${artPosition === "right" ? "art-right" : ""}`}>
				<div className="legal-hero-art" aria-hidden="true">
					<img src="/images/legal.svg" alt="" />
				</div>
				<div className="legal-hero-copy">
					<h1>{title}</h1>
					<p>Last Updated: {date}</p>
					<p>{intro}</p>
				</div>
			</section>

			<main className="legal-body">
				<div className="legal-body-inner">
					<aside className="legal-toc">
						<span className="legal-toc-label">On this page</span>
						{sections.map((section) => (
							<a
								className={activeSection === section.id ? "active" : ""}
								href={`#${section.id}`}
								key={section.id}
								onClick={(event) => navigateToSection(event, section.id)}
							>
								{section.title}
							</a>
						))}
					</aside>

					<article className="legal-content">
						{/* Sticky Closed State: Mobile Card */}
						<div className="legal-mobile-card" onClick={() => setIsContentsOpen(true)}>
							<div className="legal-mobile-card-header">
								<span>ON THIS PAGE</span>
								<span className="legal-mobile-card-chevron">+</span>
							</div>
							<div className="legal-mobile-card-divider" />
							<div className="legal-mobile-card-active">
								{currentActiveSection?.title}
							</div>
						</div>

						{/* Sections */}
						{sections.map((section) => (
							<section id={section.id} key={section.id}>
								<h2>{section.title}</h2>
								{section.content}
							</section>
						))}
					</article>
				</div>
			</main>

			{/* Mobile Backdrop */}
			<div
				className={`legal-mobile-backdrop${isContentsOpen ? " open" : ""}`}
				onClick={() => setIsContentsOpen(false)}
			/>

			{/* Mobile Drawer */}
			<nav
				className={`legal-mobile-drawer${isContentsOpen ? " open" : ""}`}
				aria-label="On this page"
			>
				<span className="legal-mobile-handle" aria-hidden="true" />
				<div className="legal-mobile-drawer-header">
					<span className="legal-mobile-drawer-title">ON THIS PAGE</span>
					<button
						className="legal-mobile-drawer-close"
						type="button"
						onClick={() => setIsContentsOpen(false)}
						aria-label="Close table of contents"
					>
						✕
					</button>
				</div>
				<div className="legal-mobile-drawer-list">
					{sections.map((section, index) => (
						<a
							className={activeSection === section.id ? "active" : ""}
							href={`#${section.id}`}
							key={section.id}
							onClick={(event) => navigateToSection(event, section.id)}
						> {section.title}
						</a>
					))}
				</div>
			</nav>
		</div>
	);
}