import { useEffect, useState, type ReactNode } from "react";

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

	useEffect(() => {
		const headings = sections
			.map(({ id }) => document.getElementById(id))
			.filter((heading): heading is HTMLElement => Boolean(heading));
		if (!headings.length) return;

		const observer = new IntersectionObserver(
			(entries) => {
				const visible = entries
					.filter((entry) => entry.isIntersecting)
					.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
				if (visible) setActiveSection(visible.target.id);
			},
			{ rootMargin: "-20% 0px -65%", threshold: [0, 1] },
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

  const section = document.getElementById(id);

  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    window.history.replaceState(null, "", `#${id}`);
  }
};

	return (
		<div className="legal-page">
			<style>{`
				.legal-page { --legal-ink:#211f22; --legal-muted:#656066; --legal-red:#8d001c; --legal-pink:#fff3f5; min-height:100vh; color:var(--legal-ink); background:#fff; font-family:"Aeonik", ui-sans-serif, system-ui, sans-serif; }
				.legal-page * { box-sizing:border-box; }
				.legal-header { height:56px; display:flex; align-items:center; justify-content:space-between; padding:0 clamp(24px, 6vw, 72px); border-bottom:1px solid #f0e9eb; background:#fffafb; }
				.legal-brand { display:flex; align-items:center; gap:6px; color:var(--legal-ink); font-size:13px; font-weight:700; text-decoration:none; }
				.legal-brand img { width:17px; height:auto; }
                .legal-cta { display:inline-flex; align-items:center; gap:7px; padding:9px 12px; border-radius:4px; color:#fff; background:var(--legal-red); font-size:9px; font-weight:700; text-decoration:none; }
				
                
                          .legal-hero {
                            display: flex;
                            flex-direction: row;
                            align-items: center;
                            justify-content: center;
                            gap: clamp(48px, 8vw, 110px);
                            min-height: 250px;
                            padding: 30px 24px 28px;
                            }

                            /* Illustration */
                            .legal-hero-art {
                            flex: 0 1 360px;
                            width: min(300px, 100%);
                            }

                            .legal-hero-art img {
                            display: block;
                            width: 100%;
                            height: auto;
                            }

                            /* Text */
                            .legal-hero-copy {
                            flex: 0 1 470px;
                            max-width: 470px;
                            }

                            /* Terms of Use: copy left, illustration right */
                            .legal-hero.art-right {
                            flex-direction: row-reverse;
                            }
                        .legal-hero-art img {
                            display: block;
                            width: 100%;
                            height: auto;
                            }


                .legal-breadcrumb { margin:0 0 17px; color:var(--legal-muted); font-size:9px; }
                .legal-breadcrumb strong { color:var(--legal-red); font-weight:700; }
				.legal-hero h1 { max-width:430px; margin:0; font-size:clamp(38px, 5vw, 58px); line-height:.98; letter-spacing:-.045em; font-weight:700; }.legal-hero-copy > p:last-child { max-width:430px; margin:16px 0 0; color:#4c484d; font-size:10px; line-height:1.55; }
				.legal-body { background:var(--legal-pink); padding:26px 24px 90px; }.legal-body-inner { display:grid; grid-template-columns:185px minmax(0, 700px); gap:clamp(26px, 6vw, 70px); max-width:1040px; margin:0 auto; }
				.legal-toc { position:sticky; top:20px; align-self:start; padding:15px 12px; border:1px solid #f0dfe3; border-radius:5px; background:#fff; }.legal-toc-label { display:block; margin-bottom:14px; font-size:8px; text-transform:uppercase; }.legal-toc a { display:block; padding:6px 7px; color:#575257; font-size:8px; line-height:1.25; text-decoration:none; border-radius:3px; }.legal-toc a.active { color:var(--legal-red); background:#ffdce5; font-weight:700; }.legal-toc a:hover { color:var(--legal-red); }
				.legal-content { min-width:0; font-size:11px; line-height:1.55; }.legal-content section { scroll-margin-top:25px; margin-bottom:28px; }.legal-content h2 { margin:0 0 10px; font-size:14px; line-height:1.2; font-weight:700; }.legal-content p { margin:0 0 12px; color:#4f4a4f; }.legal-content ul { margin:5px 0 14px; padding-left:17px; color:#4f4a4f; }.legal-content li { margin:7px 0; padding-left:3px; }.legal-content a { color:var(--legal-red); font-weight:700; }
				.legal-mobile-contents { display:none; }
				
				

				@media (max-width: 720px)
                 {
  .legal-hero,
  .legal-hero.art-right {
    flex-direction: column;
    gap: 18px;
    min-height: auto;
    padding: 27px 18px 24px;
  }

  .legal-hero-art {
    flex: none;
    width: min(240px, 70vw);
  }

  .legal-hero-copy {
    flex: none;
    width: 100%;
    max-width: none;
    text-align: left;
  }
}
                            
			`}</style>
			<header className="legal-header">
				<a className="legal-brand" href="/"><img src="/images/logo.svg" alt="" /> Vrede</a>
				<a className="legal-cta" href="/early-access">Request Early Access <span aria-hidden="true">-&gt;</span></a>
			</header>
			<section className={`legal-hero ${artPosition === "right" ? "art-right" : ""}`}>
                    <div className="legal-hero-art" aria-hidden="true">
                        <img src="/images/legal.svg" alt="" className="" />
                    </div>
				<div className="legal-hero-copy">
                    
                    <h1>{title}</h1><p>Last Updated: {date}</p><p>{intro}</p></div>
			</section>
			<main className="legal-body"><div className="legal-body-inner"><aside className="legal-toc">
                
                <span className="legal-toc-label">On this page</span>   
                {sections.map((section, index) => 
                <a
                    className={activeSection === section.id ? "active" : ""}
                    href={`#${section.id}`}
                    key={section.id}
                    onClick={(event) => navigateToSection(event, section.id)}
                    >{section.title}
                    </a>)}
                </aside><article className="legal-content">{sections.map((section) => <section id={section.id} key={section.id}><h2>{section.title}</h2>{section.content}</section>)}</article></div></main>
			<nav className={`legal-mobile-contents${isContentsOpen ? " open" : ""}`} aria-label="On this page"><span className="legal-mobile-handle" aria-hidden="true" /><button className="legal-mobile-toggle" type="button" onClick={() => setIsContentsOpen((open) => !open)}><strong>On this page</strong><span className="legal-mobile-close" aria-hidden="true">{isContentsOpen ? "×" : "+"}</span></button><div className="legal-mobile-list">{sections.map((section, index) => 
                <a
                    className={activeSection === section.id ? "active" : ""}
                    href={`#${section.id}`}
                    key={section.id}
                    onClick={(event) => navigateToSection(event, section.id)}
                    >
                    {index + 1}. {section.title}
                    </a>)}
                </div></nav>
		</div>
	);
}