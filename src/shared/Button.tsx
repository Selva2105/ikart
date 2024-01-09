type ButtonType = 'button' | 'submit' | 'reset' | undefined;
type Variant = 'outlined' | 'solid' | 'ghost' | undefined;

interface Props {
    children: React.ReactNode;
    handleClick?: () => void;
    styles: string;
    type?: ButtonType;
    title: string;
    disabled?: boolean;
    variant?: Variant;
}

const Button = (props: Props) => {

    const getVariantStyles = (): string => {
        switch (props.variant) {
            case 'ghost':
                return 'border-2 border-gray-400 text-gray-500 rounded-md transition duration-300 ease-in-out hover:text-white hover:bg-gray-400';
            case 'outlined':
                return 'border-2 border-black text-black rounded-md transition duration-300 ease-in-out hover:text-white hover:bg-black';
            case 'solid':
                return 'bg-hunyadi_yellow-500 text-white border-2 border-hunyadi_yellow rounded-md transition duration-300 ease-in-out hover:border-white hover:text-hunyadi_yellow hover:bg-white hover:border-hunyadi_yellow ';
            default:
                return '';
        }
    };


    return (
        <button
            onClick={props?.handleClick}
            className={`${props.styles} font-inter ${getVariantStyles()} `}
            type={props?.type}
            title={props.title}
            disabled={props?.disabled}
        >
            {props.children}
        </button>
    )
}

export default Button