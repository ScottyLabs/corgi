import clsx from "clsx";
import { useState } from "react";
import ScottyDog from "../../assets/sponsor_carousel/scottydog.svg?react";
import DropdownArrow from "../../assets/sponsor_carousel/dropdown_arrow.svg?react";
import css from "./index.module.css";

export const SponsorCarousel = ({
    darkMode,
    openByDefault,
    textColor,
    backgroundColor,
    borderColor,
}: {
    darkMode: boolean;
    openByDefault: boolean;
    textColor?: string;
    backgroundColor?: string;
    borderColor?: string;
}) => {
    const [carouselVisible, setCarouselVisible] = useState(openByDefault);

    const customStyles = {
        ...(textColor && { "--sponsors-text-color": textColor }),
        ...(backgroundColor && {
            "--sponsors-background-color": backgroundColor,
        }),
        ...(borderColor && { "--sponsors-border-color": borderColor }),
    } as React.CSSProperties;

    const logos = Object.values(
        import.meta.glob("/lib/assets/sponsor_carousel/logos/*", {
            eager: true,
            query: "url",
        }) as Record<string, { default: string }>,
    ).map(({ default: logoUrl }) => {
        const filename = (logoUrl.split("/").pop() || "") + Math.random();
        return {
            src: logoUrl,
            alt: filename,
        };
    });
    console.log(logos );
    // double it to make it loop seamlessly
    const doubleLogos = [
        ...logos,
        ...logos.map((l) => ({ ...l, alt: `${l.alt}2` })),
    ];

    return (
        <div
            className={clsx(
                css.sponsors,
                darkMode ? css["sponsors--dark"] : css["sponsors--light"],
            )}
            style={customStyles}
        >
            <div
                className={css[`carousel-container`]}
                aria-hidden={!carouselVisible}
            >
                <button
                    onClick={() => setCarouselVisible((v) => !v)}
                    className={css["sponsors-button"]}
                    aria-expanded={carouselVisible}
                    type="button"
                >
                    <ScottyDog
                        alt="scotty dog"
                        className={css[`sponsors-button__dog`]}
                    />{" "}
                    ScottyLabs is sponsored by{" "}
                    <DropdownArrow
                        alt="dropdown arrow"
                        className={css[`sponsors-button__arrow`]}
                    />
                </button>
                <div className={css.carousel}>
                    <ul className={css.carousel__track}>
                        {doubleLogos.map((logo) => (
                            <li className={css.carousel__item} key={logo.alt}>
                                <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    className={css.carousel__image}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};
