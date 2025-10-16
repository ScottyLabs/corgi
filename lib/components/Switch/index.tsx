import { Switch as BaseUISwitch } from "@base-ui-components/react/switch";
import { cva, type VariantProps } from "cva";
import { cn } from "../../utils";
import styles from "./index.module.css";

const switchRootStyles = cva({
    base: styles.Switch,
    variants: {
        theme: {
            neutral: styles.Neutral,
            brand: styles.Brand,
        },
    },
});

const switchThumbStyles = cva({
    base: styles.Thumb,
    variants: {
        theme: {
            neutral: styles.NeutralThumb,
            brand: styles.BrandThumb,
        },
    },
});

type SwitchProps = React.ComponentProps<typeof BaseUISwitch.Root> &
    VariantProps<typeof switchRootStyles>;

export const Switch = ({ theme = "neutral", ...props }: SwitchProps) => (
    <BaseUISwitch.Root className={cn(switchRootStyles({ theme }))} {...props}>
        <BaseUISwitch.Thumb className={switchThumbStyles({ theme })} />
    </BaseUISwitch.Root>
);
