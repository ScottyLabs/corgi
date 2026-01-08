import { Switch as BaseUISwitch } from "@base-ui-components/react/switch";
import { cva, type VariantProps } from "cva";
import { cn } from "../../utils";
import styles from "./index.module.css";

const switchRootStyles = cva({
    base: styles.Switch,
    variants: {
        palette: {
            neutral: styles.Neutral,
            brand: styles.Brand,
            brandNeutral: styles.BrandNeutral,
        },
    },
});

const switchThumbStyles = cva({
    base: styles.Thumb,
    variants: {
        palette: {
            neutral: styles.NeutralThumb,
            brand: styles.BrandThumb,
            brandNeutral: styles.BrandNeutralThumb,
        },
    },
});

type SwitchProps = React.ComponentProps<typeof BaseUISwitch.Root> &
    VariantProps<typeof switchRootStyles>;

export const Switch = ({ palette = "neutral", ...props }: SwitchProps) => (
    <BaseUISwitch.Root className={cn(switchRootStyles({ palette }))} {...props}>
        <BaseUISwitch.Thumb className={switchThumbStyles({ palette })} />
    </BaseUISwitch.Root>
);
