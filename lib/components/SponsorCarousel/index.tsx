import clsx from "clsx";
import { useState } from "react";
import ScottyDog from "../../assets/sponsor_carousel/scottydog.svg?react";
import DropdownArrow from "../../assets/sponsor_carousel/dropdown_arrow.svg?react";
import css from "./index.module.css";

/**
 * Recommended use: wrap this in a position:relative div with height 0, and 
 * place that div wherever you want the carousel to be.
 */
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
        const filename = (logoUrl.split("/").pop() || "");
        return {
            src: logoUrl,
            alt: filename,
        };
    });

    // double it to make it loop seamlessly
    const doubleLogos = [
        ...logos,
        ...logos,
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
                        className={css[`sponsors-button__dog`]}
                    />{" "}
                    ScottyLabs is sponsored by{" "}
                    <DropdownArrow
                        className={css[`sponsors-button__arrow`]}
                    />
                </button>
                <div className={css.carousel}>
                    <ul className={css.carousel__track}>
                        {doubleLogos.map((logo,i) => (
                            <li className={css.carousel__item} key={i}>
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
