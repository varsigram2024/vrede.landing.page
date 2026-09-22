"use client";

import { useEffect, useRef, useState } from "react";
import { SectionHeading } from "./SectionHeading";
import { ScrollReveal } from "../ScrollReveal";

type FeatureSplitSectionProps = {
  title: string;
  description: string;
  reverse?: boolean;
  mockupImage: string;
  withIllustration?: boolean;
  withSVG?: boolean;
  bgColor?: string;    
  accentColor?: string;
};

export function FeatureSplitSection({
  title,
  description,
  reverse = false,
  mockupImage,
  withIllustration = false,
  withSVG = false,
  bgColor = "bg-white",
  accentColor = "#FF6682", 
}: FeatureSplitSectionProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsOpen(true);
          io.disconnect();
        }
      },
      { threshold: 0.55, rootMargin: "0px 0px -10% 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
  if (!withIllustration) return;

  const el = stageRef.current;
  if (!el) return;

  const io = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setIsOpen(true);
        io.disconnect();
      }
    },
    { threshold: 0.55, rootMargin: "0px 0px -10% 0px" }
  );

  io.observe(el);
  return () => io.disconnect();
}, [withIllustration]);

  return (
    <section className={`px-6 pt-8 ${bgColor} lg:px-8 min-h-92.5`}>
      <div
        className={`mx-auto h-full flex max-w-7xl flex-col gap-12 ${
          reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        } lg:items-center`}
      >
        <ScrollReveal
          direction={reverse ? "right" : "left"}
          className="flex-1"
        >
          <div className="flex items-center justify-center py-4">
            <SectionHeading
              title={title}
              description={description}
              withSVG={withSVG}
              className="items-center justify-center"
            />
          </div>
        </ScrollReveal>

        {/* --- Mockup + overlay --- */}
        <ScrollReveal
          direction={reverse ? "up" : "up"}
          delay={150}
          className="flex-1"
        >
          <div className="flex h-full items-start justify-center">
            <div className="relative flex items-center justify-center">
              <img
                src={mockupImage}
                alt={title}
                loading="lazy"
                decoding="async"
                className="w-2/3 lg:w-[20rem]"
              />

              {withIllustration && (
                <div
                  ref={stageRef}
                  className={`tl-stage ${
                    isOpen ? "is-open" : ""
                  } pointer-events-none absolute bottom-4 left-[10%] w-25 lg:left-[-15%] lg:w-40 rounded-[20px]`}
                  aria-hidden="true"
                >
                        <svg width="100%" height="100%" viewBox="0 0 154 121" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_dd_5695_26359)">
                        <rect x="14.1016" y="7.09961" width="126" height="100.272" rx="20" fill="white" shape-rendering="crispEdges"/>
                        <g filter="url(#filter1_d_5695_26359)">
                        <rect x="38.0625" y="19.0996" width="86.0418" height="34.3221" rx="17.161" fill="white" shape-rendering="crispEdges"/>
                        <rect x="50.5391" y="25.3398" width="21.8422" height="21.8422" rx="4.67993" fill="var(--Colorsecondary-color, #FF6682)"/>
                        <g clip-path="url(#clip0_5695_26359)">
                        <path opacity="0.5" d="M65.5864 33.6569C65.6149 33.4975 65.6075 33.334 65.5646 33.1777C65.5218 33.0215 65.4446 32.8763 65.3384 32.7524C65.2323 32.6285 65.0998 32.5289 64.9502 32.4605C64.8006 32.3922 64.6375 32.3568 64.4725 32.3568H58.6778C58.5128 32.3568 58.3497 32.3922 58.2001 32.4605C58.0505 32.5289 57.918 32.6285 57.8118 32.7524C57.7057 32.8763 57.6285 33.0215 57.5856 33.1777C57.5428 33.334 57.5354 33.4975 57.5638 33.6569M64.4926 32.3568C64.5075 32.2216 64.5155 32.1545 64.5155 32.0988C64.516 31.8418 64.4195 31.5936 64.2444 31.4022C64.0694 31.2108 63.8282 31.0897 63.5675 31.0624C63.5113 31.0566 63.4423 31.0566 63.3044 31.0566H59.8459C59.7079 31.0566 59.6385 31.0566 59.5822 31.0624C59.3215 31.0897 59.0804 31.2108 58.9053 31.4022C58.7303 31.5936 58.6337 31.8418 58.6343 32.0988C58.6343 32.1545 58.6417 32.2221 58.6571 32.3568" stroke="white" stroke-width="0.779989"/>
                        <path d="M63.1359 39.373H59.9531" stroke="white" stroke-width="0.779989" stroke-linecap="round"/>
                        <path d="M56.4617 37.1831C56.2246 35.5377 56.1063 34.7155 56.6091 34.1824C57.112 33.6504 58.0074 33.6504 59.7972 33.6504H63.3279C65.1176 33.6504 66.013 33.6504 66.5159 34.1829C67.0188 34.7155 66.9 35.5377 66.6634 37.1831L66.4395 38.7433C66.2539 40.033 66.161 40.6784 65.6852 41.0648C65.2094 41.4512 64.5076 41.4512 63.1035 41.4512H60.0216C58.618 41.4512 57.9157 41.4512 57.4398 41.0648C56.964 40.6784 56.8712 40.0335 56.6855 38.7433L56.4617 37.1831Z" stroke="white" stroke-width="0.779989"/>
                        </g>
                        <path d="M79.3675 40.2598V32.6159H80.3176V39.3862H83.801V40.2598H79.3675ZM85.1335 32.5394C85.3009 32.5394 85.4392 32.594 85.5484 32.7032C85.6576 32.8124 85.7122 32.9507 85.7122 33.1182C85.7122 33.2856 85.6576 33.4239 85.5484 33.5331C85.4392 33.6423 85.3009 33.6969 85.1335 33.6969C84.966 33.6969 84.8277 33.6423 84.7185 33.5331C84.6093 33.4239 84.5547 33.2856 84.5547 33.1182C84.5547 32.9507 84.6093 32.8124 84.7185 32.7032C84.8277 32.594 84.966 32.5394 85.1335 32.5394ZM84.6858 34.6906H85.5812V40.2598H84.6858V34.6906ZM89.6143 34.6251C90.1312 34.6251 90.5898 34.738 90.9902 34.9636C91.3979 35.1893 91.7145 35.5169 91.9402 35.9464C92.1732 36.3759 92.2896 36.8855 92.2896 37.4752C92.2896 38.0358 92.1732 38.5308 91.9402 38.9603C91.7145 39.3898 91.3979 39.7247 90.9902 39.9649C90.5825 40.2052 90.1239 40.3253 89.6143 40.3253C89.1629 40.3253 88.7771 40.2452 88.4568 40.085C88.1365 39.9176 87.8853 39.6919 87.7033 39.408L87.5832 40.2598H86.8079V32.6159H87.7033V35.5861C88.1692 34.9454 88.8062 34.6251 89.6143 34.6251ZM89.5269 39.5281C90.0802 39.5281 90.5243 39.3389 90.8591 38.9603C91.2013 38.5745 91.3724 38.0794 91.3724 37.4752C91.3724 36.871 91.2013 36.3796 90.8591 36.001C90.5243 35.6152 90.0802 35.4223 89.5269 35.4223C89.1702 35.4223 88.8499 35.5096 88.566 35.6844C88.2893 35.8518 88.0746 36.092 87.9217 36.4051C87.7688 36.7108 87.6924 37.0603 87.6924 37.4534C87.6924 37.8538 87.7688 38.2141 87.9217 38.5344C88.0746 38.8475 88.2893 39.0913 88.566 39.2661C88.8499 39.4408 89.1702 39.5281 89.5269 39.5281ZM96.1411 34.6906V35.5642H95.6934C95.162 35.5642 94.7798 35.7426 94.5468 36.0993C94.3211 36.456 94.2083 36.8965 94.2083 37.4206V40.2598H93.3129V34.6906H94.0882L94.2083 35.5315C94.3685 35.2767 94.5759 35.0728 94.8307 34.92C95.0855 34.7671 95.4386 34.6906 95.89 34.6906H96.1411ZM101.902 39.4408V40.2598H101.411C101.054 40.2598 100.799 40.187 100.646 40.0414C100.493 39.8958 100.413 39.681 100.406 39.3971C99.9766 40.0159 99.3541 40.3253 98.5388 40.3253C97.92 40.3253 97.4213 40.1797 97.0428 39.8885C96.6715 39.5973 96.4859 39.2005 96.4859 38.6982C96.4859 38.1377 96.6751 37.7082 97.0537 37.4097C97.4395 37.1112 97.9964 36.962 98.7244 36.962H100.362V36.5798C100.362 36.2158 100.239 35.9319 99.9911 35.728C99.7509 35.5242 99.4124 35.4223 98.9756 35.4223C98.5897 35.4223 98.2694 35.5096 98.0146 35.6844C97.7671 35.8518 97.6142 36.0775 97.556 36.3614H96.6606C96.7261 35.8154 96.9663 35.3895 97.3813 35.0838C97.8035 34.778 98.3495 34.6251 99.0193 34.6251C99.7327 34.6251 100.282 34.7998 100.668 35.1493C101.061 35.4914 101.258 35.9865 101.258 36.6344V39.0367C101.258 39.3061 101.382 39.4408 101.629 39.4408H101.902ZM100.362 37.7154H98.6371C97.8072 37.7154 97.3922 38.0248 97.3922 38.6436C97.3922 38.9203 97.5014 39.1423 97.7198 39.3097C97.9382 39.4772 98.233 39.5609 98.6043 39.5609C99.1503 39.5609 99.5798 39.4189 99.8928 39.135C100.206 38.8438 100.362 38.4616 100.362 37.9884V37.7154ZM105.419 34.6906V35.5642H104.971C104.44 35.5642 104.057 35.7426 103.824 36.0993C103.599 36.456 103.486 36.8965 103.486 37.4206V40.2598H102.59V34.6906H103.366L103.486 35.5315C103.646 35.2767 103.854 35.0728 104.108 34.92C104.363 34.7671 104.716 34.6906 105.168 34.6906H105.419ZM106.684 34.6906L108.398 39.2333L110.058 34.6906H111.008L108.442 41.1989C108.311 41.5337 108.195 41.7849 108.093 41.9523C107.991 42.1198 107.863 42.2435 107.71 42.3236C107.558 42.4037 107.354 42.4437 107.099 42.4437H106.029V41.6247H106.826C107.001 41.6247 107.132 41.6065 107.219 41.5701C107.306 41.5337 107.376 41.4719 107.427 41.3845C107.485 41.3044 107.554 41.1661 107.634 40.9696L107.918 40.3034L105.734 34.6906H106.684Z" fill="black"/>
                        </g>
                        <rect x="91.5078" y="62.7812" width="32.5898" height="32.5898" rx="5.81936" fill="var(--Colorsecondary-color, #FF6682)"/>
                        <path d="M109.665 74.7545L110.9 73.5199C112.135 72.2853 112.135 71.0507 110.9 69.816L109.665 68.5814C108.431 67.3468 107.196 67.3468 105.962 68.5814L104.727 69.816C103.492 71.0507 103.492 72.2853 104.727 73.5199L105.962 74.7545C107.196 75.9891 108.431 75.9891 109.665 74.7545Z" stroke="white" stroke-width="0.873006" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M109.665 89.5709L110.9 88.3363C112.135 87.1017 112.135 85.8671 110.9 84.6324L109.665 83.3978C108.431 82.1632 107.196 82.1632 105.962 83.3978L104.727 84.6324C103.492 85.8671 103.492 87.1017 104.727 88.3363L105.962 89.5709C107.196 90.8055 108.431 90.8055 109.665 89.5709Z" stroke="white" stroke-width="0.873006" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M102.876 81.5454C104.24 80.1817 104.24 77.9707 102.876 76.6069C101.513 75.2432 99.3017 75.2432 97.938 76.6069C96.5743 77.9707 96.5743 80.1817 97.938 81.5454C99.3017 82.9091 101.513 82.9091 102.876 81.5454Z" stroke="white" stroke-width="0.873006" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M117.689 81.5454C119.053 80.1817 119.053 77.9707 117.689 76.6069C116.325 75.2432 114.114 75.2432 112.75 76.6069C111.387 77.9707 111.387 80.1817 112.75 81.5454C114.114 82.9091 116.325 82.9091 117.689 81.5454Z" stroke="white" stroke-width="0.873006" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                        <filter id="filter0_dd_5695_26359" x="0.0015626" y="-0.00039053" width="153.2" height="120.471" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dx="6" dy="6"/>
                        <feGaussianBlur stdDeviation="3.55"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5695_26359"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dx="-7"/>
                        <feGaussianBlur stdDeviation="3.55"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
                        <feBlend mode="normal" in2="effect1_dropShadow_5695_26359" result="effect2_dropShadow_5695_26359"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_5695_26359" result="shape"/>
                        </filter>
                        <filter id="filter1_d_5695_26359" x="31.8226" y="15.9797" width="98.5189" height="46.8021" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="3.11996"/>
                        <feGaussianBlur stdDeviation="3.11996"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12549 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5695_26359"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5695_26359" result="shape"/>
                        </filter>
                        <clipPath id="clip0_5695_26359">
                        <rect width="13.1313" height="12.6061" fill="white" transform="translate(55.2188 30.0176)"/>
                        </clipPath>
                        </defs>
                        </svg>
                </div>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}