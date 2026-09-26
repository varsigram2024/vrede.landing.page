import { useNavigate } from "react-router-dom";
import { ScrollReveal } from "../../../components/ScrollReveal";

const RED = "#8B0D16";

const benefits = [
  "Walk you through Vrede and show you how to get the most out of it",
  "Answer anything you want to throw at us",
  "Direct input into features before they're built",
  "Show you what we're building towards",
];

export function TutorSubmittedPage() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-white text-[#171717] space-y-10">
      {/* Congratulations */}
      <section className="flex flex-col items-center justify-center px-6 text-center">
        <ScrollReveal direction="up">
          <div className="flex flex-col items-center">
            <img
              src="/images/svg/submit.svg"
              alt=""
              className="h-auto w-44 lg:w-75"
            />

            <h1 className="mt-5 text-2xl font-black lg:text-6xl text-[#750015]">
              Congratulations
            </h1>

            <p className="mt-2 text-sm">
              you made it into Vrede&apos;s Founding Circle!
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Founding Circle */}
      <section
        className="relative overflow-hidden rounded-t-[32px] px-5 py-4 text-white sm:px-8"
        style={{
          background: "linear-gradient(180deg, #750015 0%, #DB0027 100%)",
        }}
      >
        {/* Background grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          aria-hidden="true"
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(255,255,255,0.25) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(255,255,255,0.25) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "92px 92px",
          }}
        />

        {/* Decorative glow */}
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-rose-300/30 blur-[100px]"
          aria-hidden="true"
        />

        <div
          className="pointer-events-none absolute -bottom-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-rose-300/30 blur-[100px]"
          aria-hidden="true"
        />

        {/* Decorative blocks */}
        <div
          className="pointer-events-none absolute left-0 top-24 h-20 w-20 bg-[#FFDBE2]/10"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute right-0 top-44 h-20 w-20 bg-[#FFDBE2]/10"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto flex max-w-5xl flex-col gap-12">
          {/* Benefits */}
          <ScrollReveal direction="up">
            <div className="mx-auto w-full max-w-xl">
              <h2 className="text-left text-lg font-semibold sm:text-2xl">
                As a Founding Member, we'll:
              </h2>

              <div className="mt-7 space-y-5">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 sm:gap-4"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center text-[#FF6682]">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                          d="M18.0156 10L19.2266 11.5137C19.3438 11.6634 19.4349 11.8262 19.5 12.002C19.5651 12.1777 19.5977 12.3633 19.5977 12.5586C19.5977 12.7539 19.5688 12.9395 19.5098 13.1152C19.4512 13.291 19.3665 13.4505 19.2559 13.5938C19.1452 13.737 19.0117 13.8607 18.8555 13.9648C18.6992 14.069 18.5299 14.1471 18.3477 14.1992L16.4824 14.7168C16.4954 15.0488 16.5117 15.3841 16.5312 15.7227C16.5508 16.0612 16.5638 16.3997 16.5703 16.7383C16.5703 16.9727 16.528 17.1908 16.4434 17.3926C16.3587 17.5944 16.2383 17.7702 16.082 17.9199C15.9258 18.0697 15.7467 18.1901 15.5449 18.2812C15.3431 18.3724 15.1217 18.418 14.8809 18.418C14.679 18.418 14.4805 18.3822 14.2852 18.3105L12.4785 17.627L11.4141 19.2383C11.2578 19.4792 11.056 19.6647 10.8086 19.7949C10.5612 19.9251 10.291 19.9935 9.99805 20C9.71159 20 9.44466 19.9349 9.19727 19.8047C8.94987 19.6745 8.74479 19.4857 8.58203 19.2383L7.51758 17.627L5.71094 18.3105C5.51562 18.3822 5.31706 18.418 5.11523 18.418C4.88086 18.418 4.66276 18.3757 4.46094 18.291C4.25911 18.2064 4.08008 18.0859 3.92383 17.9297C3.76758 17.7734 3.64714 17.5944 3.5625 17.3926C3.47786 17.1908 3.43229 16.9727 3.42578 16.7383C3.42578 16.3997 3.43555 16.0612 3.45508 15.7227C3.47461 15.3841 3.49414 15.0488 3.51367 14.7168L1.64844 14.1992C1.45964 14.1471 1.29036 14.069 1.14062 13.9648C0.990885 13.8607 0.860677 13.737 0.75 13.5938C0.639323 13.4505 0.554688 13.291 0.496094 13.1152C0.4375 12.9395 0.404948 12.7539 0.398438 12.5586C0.398438 12.3698 0.43099 12.1875 0.496094 12.0117C0.561198 11.8359 0.652344 11.6699 0.769531 11.5137L1.98047 10L0.769531 8.48633C0.522135 8.18034 0.398438 7.83203 0.398438 7.44141C0.398438 7.24609 0.427734 7.06055 0.486328 6.88477C0.544922 6.70898 0.629557 6.54948 0.740234 6.40625C0.850911 6.26302 0.98112 6.13932 1.13086 6.03516C1.2806 5.93099 1.45312 5.85286 1.64844 5.80078L3.51367 5.2832C3.50065 4.95117 3.48438 4.61589 3.46484 4.27734C3.44531 3.9388 3.43229 3.60026 3.42578 3.26172C3.42578 3.02734 3.4681 2.80924 3.55273 2.60742C3.63737 2.4056 3.75781 2.22982 3.91406 2.08008C4.07031 1.93034 4.24935 1.8099 4.45117 1.71875C4.65299 1.6276 4.87435 1.58203 5.11523 1.58203C5.31706 1.58203 5.51562 1.61784 5.71094 1.68945L7.51758 2.37305L8.58203 0.761719C8.73828 0.520833 8.9401 0.335286 9.1875 0.205078C9.4349 0.0748698 9.70508 0.00651042 9.99805 0C10.2845 0 10.5514 0.0651042 10.7988 0.195312C11.0462 0.325521 11.2513 0.514323 11.4141 0.761719L12.4785 2.37305L14.2852 1.68945C14.4805 1.61784 14.679 1.58203 14.8809 1.58203C15.1152 1.58203 15.3333 1.62435 15.5352 1.70898C15.737 1.79362 15.916 1.91406 16.0723 2.07031C16.2285 2.22656 16.349 2.4056 16.4336 2.60742C16.5182 2.80924 16.5638 3.02734 16.5703 3.26172C16.5703 3.60026 16.5605 3.9388 16.541 4.27734C16.5215 4.61589 16.502 4.95117 16.4824 5.2832L18.3477 5.80078C18.5299 5.85286 18.6992 5.93099 18.8555 6.03516C19.0117 6.13932 19.1419 6.26302 19.2461 6.40625C19.3503 6.54948 19.4349 6.70898 19.5 6.88477C19.5651 7.06055 19.5977 7.24609 19.5977 7.44141C19.5977 7.83203 19.474 8.18034 19.2266 8.48633L18.0156 10ZM8.74805 13.6035L14.3047 8.05664L13.1914 6.94336L8.74805 11.3965L6.80469 9.44336L5.69141 10.5566L8.74805 13.6035Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>

                    <p className="text-sm leading-6 text-white/90 sm:text-base">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Onboarding */}
          <ScrollReveal delay={200} direction="up">
            <div className="mx-auto flex max-w-xl flex-col items-center gap-4 border-t border-white/15 pt-10 text-center">
              <p className="text-sm font-medium text-white sm:text-base">
                We&apos;re onboarding tutors one-on-one, not by the hundreds.
              </p>

              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-medium text-[#750015] transition hover:scale-[1.02] hover:bg-[#fff5f6]"
              >
                {/* WhatsApp */}
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.415 14.382C17.117 14.233 15.656 13.515 15.384 13.415C15.112 13.315 14.914 13.267 14.715 13.565C14.517 13.862 13.948 14.531 13.775 14.729C13.601 14.928 13.428 14.952 13.131 14.804C12.834 14.654 11.876 14.341 10.741 13.329C9.858 12.541 9.261 11.568 9.088 11.27C8.915 10.973 9.069 10.812 9.218 10.664C9.352 10.531 9.515 10.317 9.664 10.144C9.813 9.971 9.862 9.846 9.961 9.647C10.061 9.449 10.011 9.276 9.936 9.127C9.862 8.978 9.268 7.515 9.02 6.92C8.779 6.341 8.534 6.42 8.352 6.41C8.178 6.402 7.98 6.4 7.782 6.4C7.584 6.4 7.262 6.474 6.99 6.772C6.717 7.069 5.95 7.788 5.95 9.251C5.95 10.713 7.014 12.126 7.163 12.325C7.312 12.524 9.258 15.525 12.239 16.812C12.949 17.118 13.502 17.301 13.933 17.437C14.645 17.664 15.293 17.632 15.805 17.555C16.375 17.47 17.563 16.836 17.811 16.142C18.059 15.448 18.058 14.853 17.984 14.729C17.91 14.605 17.712 14.531 17.414 14.382ZM11.992 21.785H11.988C10.2174 21.7854 8.47937 21.3094 6.956 20.407L6.596 20.193L2.854 21.175L3.853 17.527L3.618 17.153C2.62809 15.5774 2.10424 13.7538 2.107 11.893C2.109 6.44303 6.543 2.00903 11.996 2.00903C13.2948 2.00509 14.5814 2.25934 15.781 2.75702C16.9807 3.2547 18.0694 3.98587 18.984 4.90803C19.9045 5.82433 20.6341 6.91412 21.1305 8.11431C21.6269 9.3145 21.8803 10.6012 21.876 11.9C21.874 17.35 17.44 21.785 11.992 21.785ZM20.404 3.488C19.3021 2.3793 17.9913 1.50013 16.5474 0.901413C15.1035 0.302696 13.5551 -0.0036753 11.992 0C5.438 0.000033 0.102 5.33503 0.1 11.892C0.0968 13.9788 0.6442 16.0295 1.687 17.837L0 24L6.304 22.346C8.04817 23.2954 10.0022 23.7932 11.988 23.794H11.993C18.547 23.794 23.883 18.459 23.885 11.901C23.8899 10.3383 23.5848 8.79011 22.9875 7.34603C22.3902 5.90196 21.5124 4.59067 20.405 3.488"
                    fill="currentColor"
                  />
                </svg>

                Chat to Book My Onboarding
              </a>
            </div>
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal delay={300} direction="fade">
            <div className="flex justify-center pt-2">
              <button
                type="button"
                onClick={() => navigate("/")}
                className="rounded-lg border border-white/30 px-5 py-2.5 text-xs font-medium text-white transition hover:bg-white/10 sm:text-sm"
              >
                Back to Vrede
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </main>
  );
}