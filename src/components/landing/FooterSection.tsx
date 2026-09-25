import { PrimaryButton } from "./PrimaryButton";
import { ScrollReveal } from "../ScrollReveal";
import logo from "/images/logo.svg";

export function FooterSection({ onEarlyAccess }: { onEarlyAccess: () => void }) {
  return (
    <footer className="bg-[#750015] px-6 py-16 text-white lg:px-8 relative">
      <div 
      className="pointer-events-none absolute inset-0 w-full h-full opacity-100 animate-pulse-slow"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='1440' height='1558' viewBox='0 0 1440 1558' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg opacity='0.05'%3E%3Cline x1='-73' y1='1321.06' x2='1654.87' y2='1321.06' stroke='white' stroke-width='1.4411'/%3E%3Cline x1='-73' y1='583.225' x2='1654.87' y2='583.225' stroke='white' stroke-width='1.4411'/%3E%3Cline x1='-73' y1='952.143' x2='1654.87' y2='952.143' stroke='white' stroke-width='1.4411'/%3E%3Cline x1='-73' y1='214.303' x2='1654.87' y2='214.303' stroke='white' stroke-width='1.4411'/%3E%3Cline x1='-73' y1='1136.6' x2='1654.87' y2='1136.6' stroke='white' stroke-width='1.4411'/%3E%3Cline x1='-73' y1='398.76' x2='1654.87' y2='398.76' stroke='white' stroke-width='1.4411'/%3E%3Cline x1='-73' y1='767.682' x2='1654.87' y2='767.682' stroke='white' stroke-width='1.4411'/%3E%3Cline x1='-73' y1='29.842' x2='1654.87' y2='29.842' stroke='white' stroke-width='1.4411'/%3E%3Cline x1='-73' y1='1228.83' x2='1654.87' y2='1228.83' stroke='white' stroke-width='1.4411'/%3E%3Cline x1='-73' y1='490.994' x2='1654.87' y2='490.994' stroke='white' stroke-width='1.4411'/%3E%3Cline x1='-73' y1='859.916' x2='1654.87' y2='859.916' stroke='white' stroke-width='1.4411'/%3E%3Cline x1='-73' y1='122.072' x2='1654.87' y2='122.072' stroke='white' stroke-width='1.4411'/%3E%3Cline x1='-73' y1='1044.38' x2='1654.87' y2='1044.38' stroke='white' stroke-width='1.4411'/%3E%3Cline x1='-73' y1='306.533' x2='1654.87' y2='306.533' stroke='white' stroke-width='1.4411'/%3E%3Cline x1='-73' y1='675.455' x2='1654.87' y2='675.455' stroke='white' stroke-width='1.4411'/%3E%3Cline x1='718.885' y1='-187.043' x2='718.885' y2='1147.41' stroke='white' stroke-width='1.4411'/%3E%3Cline x1='349.963' y1='-187.043' x2='349.963' y2='1147.41' stroke='white' stroke-width='1.4411'/%3E%3Cline x1='1087.8' y1='-187.043' x2='1087.8' y2='1147.41' stroke='white' stroke-width='1.4411'/%3E%3Cline x1='165.502' y1='-187.043' x2='165.502' y2='1147.41' stroke='white' stroke-width='1.4411'/%3E%3Cline x1='903.342' y1='-187.043' x2='903.342' y2='1147.41' stroke='white' stroke-width='1.4411'/%3E%3Cline x1='534.424' y1='-187.043' x2='534.424' y2='1147.41' stroke='white' stroke-width='1.4411'/%3E%3Cline x1='1272.26' y1='-187.043' x2='1272.26' y2='1147.41' stroke='white' stroke-width='1.4411'/%3E%3Cline x1='73.2713' y1='-187.043' x2='73.2713' y2='1147.41' stroke='white' stroke-width='1.4411'/%3E%3Cline x1='811.111' y1='-187.043' x2='811.111' y2='1147.41' stroke='white' stroke-width='1.4411'/%3E%3Cline x1='442.189' y1='-187.043' x2='442.189' y2='1147.41' stroke='white' stroke-width='1.4411'/%3E%3Cline x1='1180.03' y1='-187.043' x2='1180.03' y2='1147.41' stroke='white' stroke-width='1.4411'/%3E%3Cline x1='257.736' y1='-187.043' x2='257.736' y2='1147.41' stroke='white' stroke-width='1.4411'/%3E%3Cline x1='995.576' y1='-187.043' x2='995.576' y2='1147.41' stroke='white' stroke-width='1.4411'/%3E%3Cline x1='626.65' y1='-187.043' x2='626.65' y2='1147.41' stroke='white' stroke-width='1.4411'/%3E%3Cline x1='1364.49' y1='-187.043' x2='1364.49' y2='1147.41' stroke='white' stroke-width='1.4411'/%3E%3C/g%3E%3Cg opacity='9.5'%3E%3Crect x='903.41' y='793.965' width='91.7061' height='91.7061' fill='%23FFDBE2' fill-opacity='0.5'/%3E%3Crect x='442.258' y='793.965' width='91.7061' height='91.7061' fill='%23FFDBE2' fill-opacity='0.2'/%3E%3Crect x='1272.86' y='149.402' width='91.7061' height='90.396' fill='%23FFDBE2' fill-opacity='0.25'/%3E%3Crect x='533.965' y='425.773' width='91.7061' height='90.396' fill='%23FFDBE2' fill-opacity='0.15'/%3E%3Crect x='1179.84' y='241.109' width='91.7061' height='90.396' fill='%23FFDBE2' fill-opacity='0.25'/%3E%3Crect x='442.094' y='149.402' width='91.7061' height='90.396' fill='%23FFDBE2' fill-opacity='0.15'/%3E%3Crect x='1179.84' y='149.402' width='91.7061' height='90.396' fill='%23FFDBE2' fill-opacity='0.25'/%3E%3Crect x='442.094' y='425.773' width='91.7061' height='90.396' fill='%23FFDBE2' fill-opacity='0.15'/%3E%3Crect x='350.551' y='793.965' width='91.7061' height='91.7061' fill='%23FFDBE2' fill-opacity='0.2'/%3E%3Crect x='350.551' y='885.672' width='91.7061' height='93.0162' fill='%23FFDBE2' fill-opacity='0.2'/%3E%3Crect x='165.832' y='702.258' width='91.7061' height='91.7061' fill='%23FFDBE2' fill-opacity='0.2'/%3E%3Crect x='1088.13' y='-35.3164' width='91.7061' height='91.7061' fill='%23FFDBE2' fill-opacity='0.15'/%3E%3Crect x='995.422' y='-35.8086' width='91.7061' height='91.4801' fill='%23FFDBE2' fill-opacity='0.15'/%3E%3Crect x='165.832' y='55.0742' width='93.0162' height='94.3262' fill='%23FFDBE2' fill-opacity='0.2'/%3E%3Crect x='72.8164' y='-36.6328' width='93.0162' height='91.7061' fill='%23FFDBE2' fill-opacity='0.2'/%3E%3Crect x='-18.8906' y='-35.3242' width='93.0162' height='91.7061' fill='%23FFDBE2' fill-opacity='0.2'/%3E%3Crect x='72.8164' y='55.0742' width='93.0162' height='94.3262' fill='%23FFDBE2' fill-opacity='0.2'/%3E%3Crect x='165.832' y='239.797' width='91.7061' height='93.0162' fill='%23FFDBE2' fill-opacity='0.2'/%3E%3Crect x='1272.86' y='702.258' width='91.7061' height='91.7061' fill='%23FFDBE2' fill-opacity='0.15'/%3E%3Crect x='1364.56' y='793.965' width='91.7061' height='91.7061' fill='%23FFDBE2' fill-opacity='0.15'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 text-center">
        <ScrollReveal direction="up">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-2xl font-bold tracking-tight sm:text-4xl">Transform your learning experience</h2>
            <p className="text-xs leading-4 md:leading-8 text-white/75 sm:text-base">
              Join educators and modern cohorts running Vrede to deliver clear, connected, and organized classes.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150} className="w-full sm:max-w-[20rem]">
          <PrimaryButton onClick={onEarlyAccess} variant="ghost" className="w-full flex stretch border-white bg-white text-[#750015] hover:bg-white/10">
            Request Invitation
            <span aria-hidden>→</span>
          </PrimaryButton>
        </ScrollReveal>

        <ScrollReveal delay={250} direction="fade" className="w-full">
          <div className="flex flex-col items-start gap-8 border-t border-white/15 pt-8 text-xs text-white/75 sm:flex-row sm:justify-between sm:gap-8">
            <div className="flex items-center gap-3">
              <div className="place-items-left text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="55" height="33" viewBox="0 0 55 33" fill="none">
                    <path d="M39.2982 23.7236C39.2986 23.7036 39.2926 23.6839 39.2898 23.664L28.1064 18.3408L20.1909 31.1997L24.8728 31.8531C28.0754 32.2803 31.6688 32.3037 34.5217 30.1503C35.0499 29.7516 35.554 29.3013 35.974 28.7882C36.2937 28.3975 39.2957 23.8797 39.2982 23.7236Z" fill="white"/>
                    <path d="M32.7301 11.6538C32.2088 12.0658 31.7916 12.5564 31.3831 13.088L28.1059 18.3397L39.0315 24.1942L47.0915 11.044L41.8169 10.4623C41.2308 10.4627 35.5461 9.42915 32.7301 11.6538Z" fill="white"/>
                    <path d="M5.61033 0.407118C3.78989 0.407605 1.79996 0.368245 0 0.417456L9.36389 15.6091L19.7249 8.89872L17.6211 5.5401C16.119 3.18081 15.6683 1.33276 12.6574 0.639173C10.7578 0.201593 7.54408 0.498613 5.61033 0.407118Z" fill="white"/>
                    <path d="M20.5512 10.5542C20.533 10.5454 20.5126 10.5426 20.4933 10.5368C18.2433 11.8407 16.0148 13.4631 13.6661 15.0238L10.5344 17.3649L18.7278 30.8259L22.2392 25.1684C23.995 22.4372 25.1615 21.0762 24.3987 17.5835C24.2574 16.9369 24.0591 16.2905 23.7681 15.6942C23.5466 15.2402 20.6923 10.6218 20.5512 10.5542Z" fill="white"/>
                    <path d="M43.6982 0C42.3229 0.0195355 41.8361 0.0647255 40.5777 0.615077C38.3215 1.60226 37.4407 3.47099 36.1059 5.41599L33.3734 9.90274C35.1285 7.95 39.5012 8.33398 48.1994 9.31932C49.565 7.17337 53.6471 0.389354 54.0374 9.59545e-09L43.6982 0Z" fill="white"/>
                  </svg>
              </div>
              <div>
                <p className="text-lg font-bold text-white/950">Vrede</p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row flex-wrap justify-center items-start gap-4">
              <a className="transition-opacity hover:opacity-70" href="mailto:hello@vrede.app">Contact</a>
              <a className="transition-opacity hover:opacity-70" href="/privacy">Privacy Policy</a>
              <a className="transition-opacity hover:opacity-70" href="/terms">Terms of Use</a>
            </div>
            <span>© 2026 Vrede. All rights reserved.</span>

            <div className="flex flex-row flex-wrap justify-center items-start gap-4">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <g clip-path="url(#clip0_5699_19989)">
                  <path d="M15.3125 0H4.6875C2.09867 0 0 2.09867 0 4.6875V15.3125C0 17.9013 2.09867 20 4.6875 20H15.3125C17.9013 20 20 17.9013 20 15.3125V4.6875C20 2.09867 17.9013 0 15.3125 0Z" fill="#750015"/>
                  <path d="M15.3125 0H4.6875C2.09867 0 0 2.09867 0 4.6875V15.3125C0 17.9013 2.09867 20 4.6875 20H15.3125C17.9013 20 20 17.9013 20 15.3125V4.6875C20 2.09867 17.9013 0 15.3125 0Z" fill="white"/>
                  <path d="M14.4321 17.0068H16.719C16.8019 17.0068 16.8814 16.9738 16.94 16.9152C16.9986 16.8567 17.0316 16.7772 17.0316 16.6943L17.0328 11.8629C17.0328 9.33763 16.4886 7.3966 13.5372 7.3966C12.4153 7.35488 11.3573 7.93316 10.7864 8.8988C10.7836 8.90349 10.7793 8.90714 10.7743 8.90918C10.7692 8.91123 10.7636 8.91157 10.7584 8.91015C10.7531 8.90872 10.7484 8.90561 10.7451 8.90129C10.7418 8.89697 10.7399 8.89168 10.7399 8.88622V7.94223C10.7399 7.85935 10.707 7.77986 10.6484 7.72125C10.5897 7.66265 10.5102 7.62972 10.4274 7.62972H8.25705C8.17416 7.62972 8.09467 7.66265 8.03605 7.72125C7.97744 7.77986 7.94451 7.85935 7.94451 7.94223V16.6939C7.94451 16.7767 7.97744 16.8562 8.03605 16.9148C8.09467 16.9734 8.17416 17.0064 8.25705 17.0064H10.5439C10.6267 17.0064 10.7062 16.9734 10.7648 16.9148C10.8235 16.8562 10.8564 16.7767 10.8564 16.6939V12.3678C10.8564 11.1446 11.0884 9.95998 12.6051 9.95998C14.1002 9.95998 14.1195 11.3597 14.1195 12.447V16.6942C14.1195 16.7771 14.1525 16.8566 14.2111 16.9152C14.2697 16.9738 14.3492 17.0068 14.4321 17.0068ZM2.96875 4.65845C2.96875 5.58533 3.73188 6.34799 4.65893 6.34799C5.58575 6.34792 6.34841 5.58479 6.34841 4.65806C6.34825 3.73133 5.58551 2.96875 4.65862 2.96875C3.73149 2.96875 2.96875 3.73157 2.96875 4.65845ZM3.51248 17.0068H5.80233C5.88522 17.0068 5.96472 16.9738 6.02333 16.9152C6.08194 16.8566 6.11487 16.7771 6.11487 16.6942V7.94223C6.11487 7.85935 6.08194 7.77986 6.02333 7.72125C5.96472 7.66265 5.88522 7.62972 5.80233 7.62972H3.51248C3.42959 7.62972 3.3501 7.66265 3.29149 7.72125C3.23287 7.77986 3.19995 7.85935 3.19995 7.94223V16.6942C3.19995 16.7771 3.23287 16.8566 3.29149 16.9152C3.3501 16.9738 3.42959 17.0068 3.51248 17.0068Z" fill="#750015"/>
                </g>
                <defs>
                  <clipPath id="clip0_5699_19989">
                    <rect width="20" height="20" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </span>

            <span>
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M15.75 0.9375H18.8171L12.1171 8.61392L20 19.0615H13.8286L8.99143 12.7264L3.46286 19.0615H0.392857L7.55857 10.848L0 0.938928H6.32857L10.6943 6.72838L15.75 0.9375ZM14.6714 17.2217H16.3714L5.4 2.68162H3.57714L14.6714 17.2217Z" fill="currentColor"/>
</svg>
            </span>


            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M6.49778 1.66602H13.4983C16.1652 1.66602 18.3321 3.83286 18.3321 6.49974V13.5003C18.3321 14.7823 17.8228 16.0118 16.9163 16.9183C16.0098 17.8248 14.7803 18.334 13.4983 18.334H6.49778C3.8309 18.334 1.66406 16.1672 1.66406 13.5003V6.49974C1.66406 5.21775 2.17333 3.98828 3.07983 3.08178C3.98632 2.17528 5.2158 1.66602 6.49778 1.66602ZM6.3311 3.33282C5.53539 3.33282 4.77227 3.64891 4.20961 4.21157C3.64696 4.77422 3.33086 5.53734 3.33086 6.33306V13.667C3.33086 15.3254 4.67264 16.6672 6.3311 16.6672H13.665C14.4607 16.6672 15.2239 16.3511 15.7865 15.7885C16.3492 15.2258 16.6653 14.4627 16.6653 13.667V6.33306C16.6653 4.67459 15.3235 3.33282 13.665 3.33282H6.3311ZM14.3734 4.58292C14.6497 4.58292 14.9147 4.69267 15.11 4.88804C15.3054 5.0834 15.4152 5.34838 15.4152 5.62467C15.4152 5.90095 15.3054 6.16593 15.11 6.36129C14.9147 6.55666 14.6497 6.66642 14.3734 6.66642C14.0971 6.66642 13.8321 6.55666 13.6368 6.36129C13.4414 6.16593 13.3317 5.90095 13.3317 5.62467C13.3317 5.34838 13.4414 5.0834 13.6368 4.88804C13.8321 4.69267 14.0971 4.58292 14.3734 4.58292ZM9.99806 5.83302C11.1032 5.83302 12.1631 6.27204 12.9446 7.0535C13.726 7.83497 14.1651 8.89486 14.1651 10C14.1651 11.1052 13.726 12.1651 12.9446 12.9465C12.1631 13.728 11.1032 14.167 9.99806 14.167C8.89291 14.167 7.83301 13.728 7.05155 12.9465C6.27008 12.1651 5.83106 11.1052 5.83106 10C5.83106 8.89486 6.27008 7.83497 7.05155 7.0535C7.83301 6.27204 8.89291 5.83302 9.99806 5.83302ZM9.99806 7.49982C9.33497 7.49982 8.69903 7.76323 8.23015 8.23211C7.76128 8.70099 7.49786 9.33692 7.49786 10C7.49786 10.6631 7.76128 11.299 8.23015 11.7679C8.69903 12.2368 9.33497 12.5002 9.99806 12.5002C10.6612 12.5002 11.2971 12.2368 11.766 11.7679C12.2348 11.299 12.4983 10.6631 12.4983 10C12.4983 9.33692 12.2348 8.70099 11.766 8.23211C11.2971 7.76323 10.6612 7.49982 9.99806 7.49982Z" fill="white"/>
              </svg>
            </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
